import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyBookings = () => {
    const bookings = useLoaderData();
    const { user } = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState([]);
    console.log(myBookings)

    useEffect(() => {

        const myBookings = bookings.filter(
            (booking) => booking.email.toLowerCase() === user.email.toLowerCase()
        );
        setMyBookings(myBookings);
    }, [bookings, user.email]);


    return (
        <div>
            <div>
                <h2 className="font-bold text-3xl text-center mt-10">My Bookings:{myBookings.length}</h2>

                <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
            </th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        {myBookings.map(myBooking => (
            <tr key={myBooking._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{myBooking.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{myBooking.selectedRoom.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{myBooking.selectedRoom.pricePerNight}</div>
                </td>
            </tr>
        ))}
    </tbody>
</table>

            </div>
        </div>
    );
};

export default MyBookings;