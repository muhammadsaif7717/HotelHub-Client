import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    // console.log(rooms)

    useEffect(() => {
        axios.get('https://hotelhub-server-one.vercel.app/rooms')
            .then(res => {
                setRooms(res.data);
            });
    }, []);

    // Sort rooms by price in descending order
    const sortedRooms = rooms.sort((a, b) => b.pricePerNight - a.pricePerNight);

    // Slice the first 3 rooms with the highest prices
    const top3Rooms = sortedRooms.slice(0, 3);

    const getTotalReviews = (roomId) => {
        const room = rooms.find(room => room._id === roomId);
        return room ? room.reviews.length : 0;
    };

    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-semibold mb-8 text-center">Featured Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {top3Rooms.map(room => (
                    <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={room.images[0]} alt={room.name} className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h1 className="text-2xl font-semibold">{room.title}</h1>
                            <h1 className="text-xl text-gray-500 font-semibold">{room.roomSize}</h1>
                            <h1 className="text-lg text-gray-500 font-semibold">Availability: {room.availability}</h1>
                            <p className="text-gray-500 text-lg font-semibold mb-2">{getTotalReviews(room._id)} Reviews</p>
                            <p className="text-gray-600 mb-4">{room.description.slice(0, 80)}.</p>
                            <Link to={`/book-now/${room._id}`} className="bg-[#F97316] text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                Book Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-14">
                <Link to={`/rooms`} className="btn text-lg btn-primary bg-[#F97316] text-white border-none">Show More Room Collections</Link>
            </div>
        </div>
    );
};

export default FeaturedRooms;
