import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const rooms = useLoaderData();

    const clickedRoom = rooms.find((room) => room._id === id);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="font-bold text-3xl text-center mt-10">Details of: {clickedRoom.title} </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={clickedRoom.images[0]} alt={clickedRoom.title} className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{clickedRoom.title}</h3>
                        <p className="text-gray-600 mb-4">{clickedRoom.description}</p>
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold">${clickedRoom.price} per night</p>
                            <p className="text-lg">{clickedRoom.roomSize}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-gray-600">Availability:</p>
                            <p className="text-lg">{clickedRoom.availability.fromDate} - {clickedRoom.availability.toDate}</p>
                        </div>
                        {clickedRoom.specialOffers.length > 0 && (
                            <div className="mt-4">
                                <h4 className="text-lg font-semibold mb-2">Special Offers:</h4>
                                <ul>
                                    {clickedRoom.specialOffers.map((offer, index) => (
                                        <li key={index} className="text-gray-600">{offer.title}: {offer.description}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div>
                        <button className="btn  btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
