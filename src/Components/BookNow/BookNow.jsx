import { useState, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Helmet } from "react-helmet-async";

const BookNow = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [roomForBook, setRoomForBook] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [modalVisible, setModalVisible] = useState(false);
    const [roomSummary, setRoomSummary] = useState(null);

    // Get today's date in dd-mm-yyyy format
    const today = new Date().toLocaleDateString('en-GB').split('/').reverse().join('-');

    useEffect(() => {
        // Fetch rooms
        axios.get("http://localhost:5000/rooms")
            .then(res => {
                // Find the room to book
                const room = res.data.find(room => room._id === id);
                setRoomForBook(room);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        // New booking
        const newBooking = {
            name,
            email,
            selectedRoom: roomForBook,
            bookedDate: today // Add bookedFromDate to the newBooking object
        };

        // Store room summary
        setRoomSummary(newBooking);
        // Show modal
        setModalVisible(true);
    };

    const handleConfirmBooking = () => {
        if (roomForBook.availability == "Yes") {
            // updates
            const updatedRoom = {
                availability: "No",
                bookedDate: today // Update bookedDate to today's date
            };

            // Post to database
            axios.post('http://localhost:5000/bookings', roomSummary)
                .then(res => {
                    // console.log(res.data);
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
                    // Update room availability in state
                    setRoomForBook(prevState => ({
                        ...prevState,
                        availability: "No"
                    }));
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

            // Update room availability in database
            axios.patch(`http://localhost:5000/rooms/${roomForBook._id}`, updatedRoom)
                .then(() => {
                    // console.log(res.data)
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Room Is Not Available",
            });
        }
    };

    return (
        <div className="p-10 bg-gray-300 mt-14 rounded-xl min-h-[82vh] flex items-center justify-center">
            <div>
                <Helmet>
                    <title>HotelHhub | Book Now</title>
                </Helmet>
                <h2 className="text-3xl font-semibold mb-8 text-center">Book Now: {roomForBook?.title}</h2>

                <div className="space-y-7">
                    <h2 className="text-xl font-bold text-center">
                        {roomForBook?.availability == "Yes" ? "Available" : "Unavailable"}
                    </h2>
                    <form onSubmit={handleBooking} className="w-full">
                        <div className="flex flex-col items-center gap-5 justify-center">
                            <div className="flex flex-col w-80 md:96">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    defaultValue={today} // Set the default value to today's date
                                    minDate={new Date()}
                                    isClearable
                                    placeholderText="Select Your Date"
                                    className="input input-bordered w-80 md:96"
                                    showTimeSelect={false}
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                defaultValue={user.displayName}
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-80 md:96"
                                required
                            />
                            <input
                                type="email"
                                defaultValue={user.email}
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-80 md:96"
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
                            <p>Name: {roomSummary?.name}</p>
                            <p>Email: {roomSummary?.email}</p>
                            <p>Booked From: {roomSummary?.bookedDate}</p>
                            <p>Room: {roomSummary?.selectedRoom?.title}</p>
                            <div className="flex justify-end mt-4">
                                <button onClick={() => setModalVisible(false)} className="bg-gray-300 px-4 py-2 rounded-md mr-4">Close</button>
                                <button onClick={handleConfirmBooking} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookNow;
