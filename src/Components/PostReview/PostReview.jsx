import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import axios from "axios";

const PostReview = () => {
    const { user } = useContext(AuthContext);
    const bookings = useLoaderData();
    const { id } = useParams();
    const clickedbooking = bookings.find((booking) => booking._id === id);
    // console.log(clickedbooking);



    const handlePostReview = (e) => {
        e.preventDefault();

        const form = e.target;
        const rating = parseInt(form.rating.value);
        const comment = form.comment.value;
        const timestamp = new Date().toISOString();

        // Prepare the review object
        const review = {
            userName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            rating: rating,
            comment: comment,
            timestamp: timestamp
        };

        // Update the specific room's reviews array
        axios.put(`https://hotelhub-server-one.vercel.app/rooms/${clickedbooking._id}/reviews`, review)
            .then((res) => {
                // console.log(res.data);
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your review has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to submit review",
                });
            });
    };


    return (
        <div className="my-14">
            <Helmet>
                <title>HotelHub | Post Review</title>
            </Helmet>
            <h2 className="font-bold text-center text-3xl mb-7">Post a Review: {clickedbooking.title}</h2>

            <form onSubmit={handlePostReview} className="w-96 mx-auto space-y-4">
                <div className="flex flex-col ">
                    <label className="font-semibold">User Name</label>
                    <input
                        type="text"
                        name="userName"
                        defaultValue={user.displayName}
                        className="input input-bordered"
                        readOnly />
                </div>
                <div className="flex flex-col ">
                    <label className="font-semibold">Rating</label>

                    <select name="rating" className="border-2 border-gray-300 rounded-lg p-3" required>
                        <option value="">Select Rating</option> {/* Added an empty value */}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                </div>
                <div className="flex flex-col ">
                    <label className="font-semibold">Timestamp</label>
                    <input
                        name="timestamp"
                        defaultValue={new Date().toISOString()}
                        className="input input-bordered"
                        readOnly />
                </div>
                <div className="flex flex-col ">
                    <label className="font-semibold">Comment</label>
                    <textarea
                        name="comment"
                        placeholder="Comment"
                        className="input input-bordered h-24"
                        required></textarea>
                </div>
                <button type="submit" className="btn w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Submit Review</button>
            </form>
        </div>
    );
};

export default PostReview;
