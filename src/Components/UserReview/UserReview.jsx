import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Zoom } from "react-awesome-reveal";

const UserReview = () => {
  const settingsLg = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const settingsMd = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const settingsSm = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const data = [
    {
      id: 1,
      photo: "https://i.postimg.cc/yNc48J9B/img-1-1697904907198.jpg",
      name: "Muhammad Saif",
      comment:
        "TripTrax made my dreams real! From scenic views to tasty meals, every moment was magic.",
    },
    {
      id: 2,
      photo:
        "https://i.postimg.cc/DzpgHWg7/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg",
      name: "Liam Wilson",
      comment:
        "TripTrax uncovered hidden gems worldwide! Unforgettable experiences, thanks to them.",
    },
    {
      id: 3,
      photo:
        "https://i.postimg.cc/ncK1ZSkR/leio-mclaren-L2d-Tmh-Qzx4-Q-unsplash.jpg",
      name: "Ava Thompson",
      comment:
        "With TripTrax, every journey was an adventure! From mountains to cities, their tours left me speechless.",
    },
    {
      id: 4,
      photo:
        "https://i.postimg.cc/4N5JQsL1/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg",
      name: "Noah Clark",
      comment:
        "TripTrax took me on a world journey! From beaches to ruins, I experienced it all.",
    },
    {
      id: 5,
      photo: "https://i.postimg.cc/15ZtKW9y/portrait-man-laughing.jpg",
      name: "Alex Ronal",
      comment:
        "Exploring with TripTrax was a dream! Expert guides and seamless planning made it special.",
    },
    {
      id: 6,
      photo:
        "https://i.postimg.cc/JhBVvLqv/close-up-portrait-man-looking-camera-outdoors.jpg",
      name: "James Garcia",
      comment:
        "TripTrax made my tour unforgettable! From villages to cities, every spot was a delight.",
    },
  ];

  return (
    <Zoom>
      <div className=" rounded-xl ">
        <div className="hidden lg:block">
          <h1 className="text-center text-3xl font-bold mt-10 mb-5">
            Our Customers reviews
          </h1>
          <Slider {...settingsLg}>
            {data.map((d) => (
              <div key={d.id} className="mb-7">
                <div className="px-4 ">
                  <div className="card bg-base-100 shadow-xl border rounded-xl">
                    <figure className="bg-[#C0D6E8] py-5">
                      <img
                        src={d.photo}
                        alt={d.name}
                        className="w-36 rounded-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{d.name}</h2>
                      <p>{d.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="hidden md:block lg:hidden">
          <h1 className="text-center text-3xl font-bold mt-10 mb-5">
            User reviews
          </h1>
          <Slider {...settingsMd}>
            {data.map((d) => (
              <div key={d.id} className="mb-7">
                <div className="px-4 ">
                  <div className="card  bg-base-100 shadow-xl border rounded-xl">
                    <figure className="bg-[#C0D6E8] py-5">
                      <img
                        src={d.photo}
                        alt={d.name}
                        className="w-36 rounded-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{d.name}</h2>
                      <p>{d.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col items-center justify-center md:hidden lg:hidden ">
          <h1 className="text-center text-3xl font-bold mt-10 mb-5">
            Our Customers reviews
          </h1>

          <Slider {...settingsSm} className=" w-[90%]">
            {data.map((d) => (
              <div key={d.id} className="mb-7">
                <div className="px-4 ">
                  <div className="card bg-base-100 shadow-xl border rounded-xl">
                    <figure className="bg-[#C0D6E8] py-5">
                      <img
                        src={d.photo}
                        alt={d.name}
                        className="w-36 rounded-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{d.name}</h2>
                      <p>{d.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div />
      </div>
    </Zoom>
  );
};

export default UserReview;
