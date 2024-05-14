import { useLoaderData, useParams } from "react-router-dom";

const PostReview = () => {
    const bookings = useLoaderData();
    const { id } = useParams(); // Corrected: useParams() instead of useParams
    const clickedbooking = bookings.find((booking) => booking._id === id);
    console.log(clickedbooking)
    return (
        <div>
            <h2>Post a Review:</h2>
        </div>
    );
};

export default PostReview;
