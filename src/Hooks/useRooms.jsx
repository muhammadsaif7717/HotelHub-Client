import axios from "axios";
import { useEffect, useState } from "react";


const useRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/rooms')
            .then(res => {
                setRooms(res.data);
            })
    }, []);
    return rooms
};

export default useRooms;