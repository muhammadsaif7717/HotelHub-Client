import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
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
          reviews: room.reviews.reverse() // Reverse the order of reviews
        }));
        setRooms(roomsData);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Zoom>
      <div className="rounded-xl">
        <h1 className="text-center text-3xl font-bold mt-10 mb-5">
          Our Customers Reviews
        </h1>
        <Slider {...settings}>
          {rooms.map((room) => (
            room.reviews.map((review, index) => (
              <div key={index} className="mb-7">
                <div className="px-4">
                  <div className="card bg-base-100 shadow-xl border rounded-xl">
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
                      <p>Timestamp: {review.timestamp}</p>
                    </div>
                  </div>
                </div>
              </div>
            )).reverse() // Reverse the mapped reviews
          ))}
        </Slider>
      </div>
    </Zoom>
  );
};

export default UserReview;
