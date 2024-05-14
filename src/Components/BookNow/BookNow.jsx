import { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Contexts/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const BookNow = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const rooms = useLoaderData();
    const roomForBook = rooms.find((room) => room._id === id);
    console.log(roomForBook._id)
    const [selectedDate, setSelectedDate] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [roomSummary, setRoomSummary] = useState(null);

    const handleBooking = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        // new booking
        const newBooking = {
            name,
            email,
            selectedRoom: roomForBook,
        };

        // Store room summary
        setRoomSummary(newBooking);
        // Show modal
        setModalVisible(true);
    };

    const handleConfirmBooking = () => {
        // updates
        const updatedRoom = {
            availability: "No",
            bookedDate: roomSummary.bookedFromDate,
        };


        // Post to database
        axios.post('http://localhost:5000/bookings', roomSummary)
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Room Has Been Booked",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                setModalVisible(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setModalVisible(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Room Is Not Available",
                });

            });

        //update some values
        axios.patch(`http://localhost:5000/rooms/${roomForBook._id}`, updatedRoom)
            .then(res => {
                console.log(res.data)
            })
    };

    return (
        <div className="p-10 bg-gray-300 mt-14 rounded-xl min-h-[82vh] ">
            <h2 className="text-3xl font-semibold mb-8 text-center">Book Now: {roomForBook.title}</h2>

            <div className="space-y-7">
                <form onSubmit={handleBooking} className="w-full">
                    <div className="flex flex-col md:flex-row  justify-center items-center gap-5 ">
                        <div className="flex flex-col w-96">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                isClearable
                                placeholderText="Select Your Date"
                                className="input input-bordered w-full"
                                showTimeSelect={false}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-5 justify-center">
                        <input
                            type="text"
                            defaultValue={user.displayName}
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-96"
                            required
                        />
                        <input
                            type="email"
                            defaultValue={user.email}
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-96"
                            required
                        />
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600  mt-8">
                            Book Now
                        </button>
                    </div>
                </form>
            </div>

            {/* Modal */}
            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Room Summary</h3>
                        <p>Name: {roomSummary.name}</p>
                        <p>Email: {roomSummary.email}</p>
                        <p>Booked From: {roomSummary.bookedFromDate}</p>
                        <p>Room: {roomSummary.selectedRoom.title}</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={() => setModalVisible(false)} className="bg-gray-300 px-4 py-2 rounded-md mr-4">Close</button>
                            <button onClick={handleConfirmBooking} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Confirm Booking</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookNow;
