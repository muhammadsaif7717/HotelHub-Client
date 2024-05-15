import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRooms from "../../Hooks/useRooms";
import { Helmet } from "react-helmet-async";

const Rooms = () => {
    const rooms = useRooms();
    const [sortedRooms, setSortedRooms] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");

    useEffect(() => {
        sortRooms();
    }, [sortOrder, rooms]);

    const sortRooms = () => {
        if (!rooms.length) return;
        let sorted = [...rooms];
        if (sortOrder === "asc") {
            sorted.sort((a, b) => a.pricePerNight - b.pricePerNight);
        } else if (sortOrder === "desc") {
            sorted.sort((a, b) => b.pricePerNight - a.pricePerNight);
        }
        setSortedRooms(sorted);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    // Function to calculate total reviews for a room
    const getTotalReviews = (roomId) => {
        const room = rooms.find(room => room._id === roomId);
        return room ? room.reviews.length : 0;
    };

    return (
        <div className="container mx-auto py-12">
            <Helmet>
                <title>HotelHub | Rooms</title>
            </Helmet>
            <h2 className="text-3xl text-center font-semibold mb-8">All Rooms</h2>
            <div className="mb-7 flex items-center justify-center">
                <select
                    id="sort"
                    className="border-2 rounded-md border-gray-300 px-3 py-3"
                    value={sortOrder}
                    onChange={handleSortChange}
                >
                    <option value="default">Sort by Average Cost</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedRooms.map(room => (
                    <Link to={`/details/${room._id}`} key={room._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={room.images[0]} alt={room.title} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h1 className="text-2xl font-semibold">{room.title}</h1>
                            <h1 className="text-xl text-gray-500 font-semibold">{room.roomSize}</h1>
                            <h1 className="text-lg text-gray-500"><b>Price Per Night:</b> {room.pricePerNight}</h1>
                            <h1 className="text-lg text-gray-500"><b>Availability:</b> {room.availability}</h1>
                            <p className="text-gray-700 mb-2">{getTotalReviews(room._id)} Reviews</p>
                            {/* Add your rating display here if needed */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Rooms;
