import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const MyBookings = () => {
    const bookings = useLoaderData();
    const { user } = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        const filteredBookings = bookings.filter(
            (booking) => booking.email.toLowerCase() === user.email.toLowerCase()
        );
        setMyBookings(filteredBookings);
    }, [bookings, user.email]);

    const handleCancleBooking = (id, deletingId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel Booking!"
        }).then((result) => {
            if (result.isConfirmed) {
                // cancel and delete
                axios.delete(`http://localhost:5000/bookings/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            
                            setMyBookings(prevBookings => prevBookings.filter(booking => booking._id !== id));

                        }
                    })

                //update availability & bookedDate
                // updates
                const updatedRoom = {
                    availability: "Yes",
                    bookedDate: " ",
                };

                axios.patch(`http://localhost:5000/rooms/${deletingId}`, updatedRoom)
                    .then(res => {
                        console.log(res.data)
                    })

            }
        });
    }

    return (
        <div className=" my-14">
            <h2 className="font-bold text-3xl text-center mb-5">My Bookings: {myBookings.length}</h2>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-10">
                {myBookings.map(myBooking => (
                    <div key={myBooking._id} className="bg-white shadow-lg w-full h-full rounded-lg overflow-hidden p-5 space-y-4">
                        <img src={myBooking.selectedRoom.images[0]} alt={myBooking.selectedRoom.title} className="w-full  object-cover" />
                        <div className="">
                            <div className="font-bold text-xl mb-4">{myBooking.selectedRoom.title}</div>
                            <p className="text-gray-700 text-base">{myBooking.selectedRoom.description}</p>
                        </div>
                        <div className="">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">$ {myBooking.selectedRoom.pricePerNight}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Size: {myBooking.selectedRoom.roomSize}</span>

                        </div>
                        <div className="flex gap-5 items-center justify-start">
                            <button onClick={() => handleCancleBooking(myBooking._id, myBooking.selectedRoom._id)} className="btn btn-error text-white border-none">Cancel</button>
                            <Link className="btn btn-success  text-white bg-blue-400 border-none">Update Date</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;
