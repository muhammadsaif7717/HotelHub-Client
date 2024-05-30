import axios from "axios";
import { useEffect, useState } from "react";


const useRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get('https://hotelhub-server-one.vercel.app/rooms')
            .then(res => {
                setRooms(res.data);
            })
    }, []);
    return rooms
};

export default useRooms;