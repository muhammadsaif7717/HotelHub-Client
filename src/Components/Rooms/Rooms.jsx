// import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRooms from "../../Hooks/useRooms";
import { Helmet } from "react-helmet-async";


const Rooms = () => {
    const rooms = useRooms();
    // const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");

    // console.log(rooms)

    // useEffect(() => {
    //     axios.get('https://hotelhub-server-one.vercel.app/rooms')
    //         .then(res => {
    //             setRooms(res.data);
    //         })
    // }, []);

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


    return (
        <div className="container mx-auto py-12">
            <Helmet>
                <title>HotelHub | Rooms</title>
            </Helmet>
            <h2 className="text-3xl text-center font-semibold mb-8">All Rooms</h2>
            <div className="mb-7 flex items-center justify-center">
                <select
                    id="sort"
                    className="border-2 rounded-md border-gray-300  px-3 py-3"
                    value={sortOrder}
                    onChange={handleSortChange}
                >
                    <option value="default">Sort by Average Cost</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sortedRooms.map(room => (
                    <Link to={`/details/${room._id}`} key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={room.images[0]} alt={room.name} className="w-full h-64 object-cover" />
                        <h1>{room.title}</h1>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Rooms;