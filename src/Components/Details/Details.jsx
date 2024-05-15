import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Details = () => {
    const { id } = useParams();
    const rooms = useLoaderData();

    const clickedRoom = rooms.find((room) => room._id === id);

    // Slick settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Helmet>
                <title>HotelHub | Details</title>
            </Helmet>
            <h2 className="font-bold text-3xl text-center mt-10">Details of: {clickedRoom.title} </h2>
            <div className="mt-14">
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col p-5">
                    <Slider {...settings}>
                        {clickedRoom.images.map((image, index) => (
                            <div key={index} className="px-2"> {/* Added padding to create a gap */}
                                <img src={image} alt={clickedRoom.title} className="w-full rounded-xl" />
                            </div>
                        ))}
                    </Slider>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{clickedRoom.title}</h3>
                        <p className="text-gray-600 mb-4">{clickedRoom.description}</p>
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold">${clickedRoom.pricePerNight} per night</p>
                            <p className="text-lg"><b>Area: </b>{clickedRoom.roomSize}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-gray-600">Availability: {clickedRoom.availability}</p>
                        </div>
                        {clickedRoom.specialOffers && ( // Check if specialOffers is available
                            <div className="mt-4">
                                <h4 className="text-lg font-semibold mb-2">{clickedRoom.specialOffers.offerTitle}</h4>
                                <p className="text-gray-600 mb-2">{clickedRoom.specialOffers.offerDescription}</p>
                                <p className="text-lg font-semibold">${clickedRoom.specialOffers.offerPrice} per night</p>
                            </div>
                        )}
                        <div>
                            <Link to={`/book-now/${clickedRoom._id}`} className="btn mt-5 btn-primary bg-orange-500 text-white border-none">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
