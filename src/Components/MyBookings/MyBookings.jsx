import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyBookings = () => {
    const [bookings, setBookings] = useState([])
    const axiousSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [newDate, setNewDate] = useState(null);


    useEffect(() => {
        axiousSecure.get(`/bookings?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })
    }, [axiousSecure, user?.email])

    useEffect(() => {
        const filteredBookings = bookings.filter(
            (booking) => booking.email?.toLowerCase() === user.email?.toLowerCase()
        );
        setMyBookings(filteredBookings);
    }, [bookings, user.email]);

    const handleCancelBooking = (id, deletingId, bookedDate) => {
        const bookingDate = new Date(bookedDate);
        const currentDate = new Date();
        const differenceInTime = bookingDate.getTime() - currentDate.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);

        if (differenceInDays <= 1) {
            Swal.fire({
                title: "Cannot Cancel Booking",
                text: "You Cannot cancel this booking before 1 day of the booking date.",
                icon: "error"
            });
            return;
        }

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
                    });

                // Update room availability & bookedDate
                const updatedRoom = {
                    availability: "Yes",
                    bookedDate: " ",
                };

                axios.patch(`http://localhost:5000/rooms/${deletingId}`, updatedRoom)
                    .then(res => {
                        console.log(res.data)
                    });
            }
        });
    };





    const handleUpdateDate = () => {
        if (newDate && selectedBooking) {
            // Update the booking date for the selected booking
            const updatedBooking = { bookedDate: newDate };

            axios.patch(`http://localhost:5000/bookings/${selectedBooking._id}`, updatedBooking)
                .then(res => {
                    console.log(res.data);
                    // Update myBookings with the new date
                    setMyBookings(prevBookings =>
                        prevBookings.map(booking =>
                            booking._id === selectedBooking._id ? { ...booking, bookedDate: newDate } : booking
                        )
                    );
                    // Close the modal and reset states
                    setModalVisible(false);
                    setSelectedBooking(null);
                    setNewDate(null);
                    Swal.fire({
                        icon: "success",
                        title: "Date Updated!",
                        text: "Your booking date has been updated successfully."
                    });
                })
                .catch(error => {
                    console.error('Error:', error);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to update booking date",
                    });
                });
        }
    };

    const today = new Date().toISOString().split('T')[0]; // Get today's date

    // Function to format date as dd-mm-yyyy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    };

    return (
        <div className="my-14">
            <h2 className="font-bold text-3xl text-center mb-5">My Bookings: {myBookings.length}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {myBookings.map(booking => (
                    <div key={booking._id} className="bg-white shadow-lg w-full h-full rounded-lg overflow-hidden p-5 space-y-4">
                        <img src={booking.selectedRoom.images[0]} alt={booking.selectedRoom.title} className="w-full object-cover" />
                        <div className="">
                            <div className="font-bold text-xl mb-4">{booking.selectedRoom.title}</div>
                            <p className="text-gray-700 text-base">{booking.selectedRoom.description}</p>
                        </div>
                        <div className="">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">$ {booking.selectedRoom.pricePerNight}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Size: {booking.selectedRoom.roomSize}</span>
                        </div>
                        <div className="">
                            <h1>Booked Date: {formatDate(booking.bookedDate)}</h1> {/* Format date */}
                        </div>
                        <div className="flex gap-5 items-center justify-start">
                            <button onClick={() => handleCancelBooking(booking._id, booking.selectedRoom._id, booking.bookedDate)} className="btn btn-error text-white border-none">Cancel</button>
                            <button onClick={() => {
                                setSelectedBooking(booking);
                                setNewDate(formatDate(booking.bookedDate)); // Set default value to the currently selected booking date
                                setModalVisible(true);
                            }} className="btn btn-success  text-white bg-blue-500 border-none">Update Date</button>
                            <Link to={`/post-review/${booking.selectedRoom._id}`} className="btn btn-success  text-white bg-blue-400 border-none">Review</Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Update Booking Date</h3>
                        <input
                            type="date"
                            value={newDate}
                            min={today} // Set the minimum selectable date to today
                            onChange={(e) => setNewDate(e.target.value)}
                            className="input input-bordered mb-4"
                        />
                        <div className="flex justify-end mt-4">
                            <button onClick={() => setModalVisible(false)} className="bg-gray-300 px-4 py-2 rounded-md mr-4">Close</button>
                            <button onClick={handleUpdateDate} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update Date</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyBookings;
