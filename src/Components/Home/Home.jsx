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
                <title>Template | Home</title>
            </Helmet>

            <div className="my-10">
                <Slider></Slider>
                <FeaturedRooms></FeaturedRooms>
                <Map></Map>
                <Newsletter></Newsletter>
                <UserReview></UserReview>
            </div>
        </>
    );
};

export default Home;