import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const About = () => {

    return (
        <div className="flex justify-center items-center h-auto md:h-[80vh] mb-10">
            <Helmet>
                <title>HotelHub | About Us</title>
            </Helmet>
            <div className="animate__animated animate__zoomIn hero bg-gray-100 md:p-2 rounded-xl">
                <div className="hero-content text-center mt-12 mb-12">
                    <div className="">
                        <h1 className="text-3xl md:text-5xl font-bold">Welcome to HotelHub!</h1>
                        <p className="py-6 w-full">
                            HotelHub offers a comprehensive range of hotels, from luxury resorts to budget accommodations, ensuring you find the perfect stay for your travels. Our user-friendly platform provides hassle-free booking, detailed descriptions, and customer reviews, making it easy to plan your trip. Located in Tejgaon, Dhaka, HotelHub is your go-to destination for all your hotel needs.
                        </p>
                        <NavLink to='/'>
                            <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
                                Get Started
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
