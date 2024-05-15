import { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Zoom } from "react-awesome-reveal";

const UserReview = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/rooms`)
      .then(res => {
        const roomsData = res.data.map(room => ({
          ...room,
          reviews: room.reviews.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) // Sort reviews by timestamp in descending order
        }));
        setRooms(roomsData);
    });
  }, []);

  return (
    <Zoom>
      <div className="rounded-xl">
        <h1 className="text-center text-3xl font-bold mt-10 mb-5">
          Our Customers Reviews
        </h1>

        <div className="flex flex-row-reverse items-center justify-center">
          {rooms.map((room) => (
            <div key={room._id} className="flex">
              {/* Display reviews in a row */}
              <div className="flex flex-row">
                {room.reviews.map((review, index) => (
                  <div key={index} className="card bg-base-100 shadow-xl border rounded-xl mr-4">
                    <figure className="bg-[#C0D6E8] py-5">
                      <img
                        src={review.photoURL}
                        alt={review.userName}
                        className="w-36 rounded-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{review.userName}</h2>
                      <p>Rating: {review.rating}</p>
                      <p>Comment: {review.comment}</p>
                      <p>Timestamp: {new Date(review.timestamp).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Zoom>
  );
};

export default UserReview;
