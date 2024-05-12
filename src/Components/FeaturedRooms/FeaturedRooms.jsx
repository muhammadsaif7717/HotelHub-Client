import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FeaturedRooms = () => {
    const [rooms,setRooms]=useState([])
   
    useEffect(() => {
        axios.get('http://localhost:5000/rooms')
            .then(res => {
            setRooms(res.data)
            
        })
    },[])

    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-semibold mb-8">Featured Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rooms.map(room => (
                    <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                            <p className="text-gray-600 mb-4">{room.description}</p>
                            <Link to={`/details/${room._id}`} className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedRooms;
