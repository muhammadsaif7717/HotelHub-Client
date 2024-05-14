import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const rooms = useLoaderData();

    const clickedRoom = rooms.find((room) => room._id === id);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="font-bold text-3xl text-center mt-10">Details of: {clickedRoom.title} </h2>
            <div className="mt-14">
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
                    <img src={clickedRoom.images[0]} alt={clickedRoom.title} className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{clickedRoom.title}</h3>
                        <p className="text-gray-600 mb-4">{clickedRoom.description}</p>
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold">${clickedRoom.pricePerNight} per night</p>
                            <p className="text-lg">{clickedRoom.roomSize}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-gray-600">Availability: { clickedRoom.availability}</p>
                        </div>
                        {clickedRoom.specialOffers.length > 0 && (
                            <div className="mt-4">
                                <h4 className="text-lg font-semibold mb-2">Special Offers: { clickedRoom.specialOffers}</h4>
                            </div>
                        )}
                        <div>
                            <Link to={`/book-now/${clickedRoom._id}`} className="btn mt-5 btn-primary">
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
