import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Rooms = () => {

    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");

    console.log(rooms)

    useEffect(() => {
        axios.get('http://localhost:5000/rooms')
            .then(res => {
                setRooms(res.data);
            })
    }, []);

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
            <h2 className="text-3xl font-semibold mb-8">Featured Rooms</h2>
            <div className="mb-4">
                <select
                    id="sort"
                    className="border rounded-md py-1 px-2"
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
                        <h1>{ room.title}</h1>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Rooms;