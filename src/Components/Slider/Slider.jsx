import { useState } from 'react';
import banner1 from '../../assets/images/b1.jpg';
import banner2 from '../../assets/images/b2.jpg';
import banner3 from '../../assets/images/b3.jpg';
import banner4 from '../../assets/images/b4.jpg';
import { Link } from 'react-router-dom';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = (event) => {
    event.preventDefault(); // Prevent scrolling to top
    setCurrentSlide((prevSlide) => {
      if (prevSlide === 4) return 1;
      return prevSlide + 1;
    });
  };

  const prevSlide = (event) => {
    event.preventDefault(); // Prevent scrolling to top
    setCurrentSlide((prevSlide) => {
      if (prevSlide === 1) return 4;
      return prevSlide - 1;
    });
  };

  return (
    <div>
      <div className="carousel my-0 w-full rounded-xl lg:h-[80vh] relative overflow-hidden">
        <div className="carousel-inner w-full h-full flex">
          <div id="slide1" className={`carousel-item w-full relative flex items-center justify-start ${currentSlide === 1 ? '' : 'hidden'}`}>
            <img src={banner1} className="w-full h-full" alt="Slide 1" />
            <div className="absolute flex justify-center gap-5 bottom-2 right-2 md:bottom-14 md:right-14 scale-90 z-20">
              <button className="btn btn-circle" onClick={prevSlide}>❮</button>
              <button className="btn btn-circle" onClick={nextSlide}>❯</button>
            </div>
            {/* slider texts */}
            <div className='absolute z-10  text-start p-10 h-full  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
              <div className='flex flex-col space-y-1 md:space-y-4 lg:space-y-8'>
                <h1 className='text-white text-xl md:text-[33px] lg:text-6xl font-bold md:w-2/3'>Experience Unmatched Comfort</h1>
                <p className='text-xs md:text-lg text-gray-200  w-2/3 lg:w-1/2'>Immerse yourself in a world of luxury and comfort with HotelHub. Our exquisite accommodations, top-notch amenities, and personalized services ensure an unforgettable stay</p>
                <div className='flex'>
                  <Link to={`/rooms`} className='px-2 py-1 border-orange-500 bg-orange-500 text-white rounded-lg md:btn md:border-orange-500 md:bg-orange-500 md:text-white'>Discover More</Link>
                </div>
              </div>
            </div>
          </div>
          <div id="slide2" className={`carousel-item w-full relative flex items-center justify-start ${currentSlide === 2 ? '' : 'hidden'}`}>
            <img src={banner2} className="w-full h-full" alt="Slide 2" />
            <div className="absolute flex justify-center gap-5 bottom-2 right-2 md:bottom-14 md:right-14 scale-90 z-20">
              <button className="btn btn-circle" onClick={prevSlide}>❮</button>
              <button className="btn btn-circle" onClick={nextSlide}>❯</button>
            </div>
            {/* slider texts */}
            <div className='absolute z-10  text-start p-10 h-full  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] '>
              <div className='flex flex-col space-y-1 md:space-y-4 lg:space-y-8'>
                <h1 className='text-white text-xl  md:text-[33px] lg:text-6xl  font-bold  md:w-2/3 '>Discover Your Dream Getaway</h1>
                <p className='text-xs md:text-lg text-gray-200  w-2/3 lg:w-1/2'> HotelHub welcomes you to your dream getaway. Whether you{`'`}re seeking adventure or relaxation, our premium facilities and prime locations cater to all your needs</p>
                <div className='flex'>
                <Link to={`/rooms`} className='px-2 py-1 border-orange-500 bg-orange-500 text-white rounded-lg md:btn md:border-orange-500 md:bg-orange-500 md:text-white'>Discover More</Link>
                </div>
              </div>
            </div>
          </div>
          <div id="slide3" className={`carousel-item w-full relative flex items-center justify-start ${currentSlide === 3 ? '' : 'hidden'}`}>
            <img src={banner3} className="w-full h-full" alt="Slide 3" />
            <div className="absolute flex justify-center gap-5 bottom-2 right-2 md:bottom-14 md:right-14 scale-90 z-20">
              <button className="btn btn-circle" onClick={prevSlide}>❮</button>
              <button className="btn btn-circle" onClick={nextSlide}>❯</button>
            </div>
            {/* slider texts */}
            <div className='absolute z-10  text-start p-10 h-full  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] '>
              <div className='flex flex-col space-y-1 md:space-y-4 lg:space-y-8'>
                <h1 className='text-white text-xl  md:text-[33px] lg:text-6xl font-bold  md:w-2/3 '>Your Home Away From Home</h1>
                <p className='text-xs md:text-lg text-gray-200  w-2/3 lg:w-1/2'>At HotelHub, we redefine hospitality. Feel at home with our warm ambiance, attentive staff, and cozy accommodations. Make lasting memories in a place that feels just like home</p>
                <div className='flex'>
                <Link to={`/rooms`} className='px-2 py-1 border-orange-500 bg-orange-500 text-white rounded-lg md:btn md:border-orange-500 md:bg-orange-500 md:text-white'>Discover More</Link>
                </div>
              </div>
            </div>
          </div>
          <div id="slide4" className={`carousel-item w-full relative flex items-center justify-start ${currentSlide === 4 ? '' : 'hidden'}`}>
            <img src={banner4} className="w-full h-full" alt="Slide 4" />
            <div className="absolute flex justify-center gap-5 bottom-2 right-2 md:bottom-14 md:right-14 scale-90 z-20">
              <button className="btn btn-circle" onClick={prevSlide}>❮</button>
              <button className="btn btn-circle" onClick={nextSlide}>❯</button>
            </div>
            {/* slider texts */}
            <div className='absolute z-10  text-start p-10 h-full  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] '>
              <div className='flex flex-col space-y-1 md:space-y-4 lg:space-y-8'>
                <h1 className='text-white text-xl  md:text-[33px] lg:text-6xl  font-bold  md:w-2/3 '>Luxury Redefined</h1>
                <p className='text-xs md:text-lg text-gray-200  w-2/3 lg:w-1/2'> Indulge in luxury like never before with HotelHub. From stunning views to elegant interiors, every aspect of your stay is carefully curated to provide an unparalleled experience</p>
                <div className='flex'>
                <Link to={`/rooms`} className='px-2 py-1 border-orange-500 bg-orange-500 text-white rounded-lg md:btn md:border-orange-500 md:bg-orange-500 md:text-white'>Discover More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
