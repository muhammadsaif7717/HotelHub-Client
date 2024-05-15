import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import UserReview from "../UserReview/UserReview";
import Map from "../Map/Map";
import Newsletter from "../Newsletter/Newsletter";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>HotelHub | Home</title>
            </Helmet>

            <div className="mt-5 mb-10">
                <Slider></Slider>
                <div className="mt-[50px]"><FeaturedRooms></FeaturedRooms></div>
                <div className="mt-[100px]"><Newsletter></Newsletter></div>
                <div className="mt-[100px]"><UserReview></UserReview></div>
                <div className="my-[100px]"><Map></Map></div>
            </div>
        </>
    );
};

export default Home;