import banner1 from '../../assets/images/1.jpg'
import banner2 from '../../assets/images/2.jpg'
import banner3 from '../../assets/images/3.jpg'
import banner4 from '../../assets/images/4.jpg'
import banner5 from '../../assets/images/5.jpg'
import banner6 from '../../assets/images/6.jpg'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full rounded-xl">
                <div id="slide1" className="carousel-item w-full relative flex items-center justify-start">
                    <img src={banner1} className="w-full h-full" />
                    <div className="absolute flex justify-center gap-5 bottom-14 right-14">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    {/* slider texts */}
                    <div className='absolute z-10  text-start p-10 h-full  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='flex flex-col space-y-4'>
                            <h1 className='text-white text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn  border-orange-500 bg-orange-500 text-white'>Discover More</button>
                                <button className='btn  border-white bg-transparent text-white'> Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item w-full relative flex items-center justify-start">
                    <img src={banner2} className="w-full h-full" />
                    <div className="absolute flex justify-center gap-5 bottom-14 right-14">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    {/* slider texts */}
                    <div className='absolute z-10  text-start p-10 h-full  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='flex flex-col space-y-4'>
                            <h1 className='text-white text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn  border-orange-500 bg-orange-500 text-white'>Discover More</button>
                                <button className='btn  border-white bg-transparent text-white'> Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item w-full relative flex items-center justify-start">
                    <img src={banner3} className="w-full h-full" />
                    <div className="absolute flex justify-center gap-5 bottom-14 right-14">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    {/* slider texts */}
                    <div className='absolute z-10  text-start p-10 h-full  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='flex flex-col space-y-4'>
                            <h1 className='text-white text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn  border-orange-500 bg-orange-500 text-white'>Discover More</button>
                                <button className='btn  border-white bg-transparent text-white'> Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item w-full relative flex items-center justify-start">
                    <img src={banner4} className="w-full rounded-xl h-full" />
                    <div className="absolute flex justify-center gap-5 bottom-14 right-14">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                    {/* slider texts */}
                    <div className='absolute z-10  text-start p-10 h-full  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='flex flex-col space-y-4'>
                            <h1 className='text-white text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn  border-orange-500 bg-orange-500 text-white'>Discover More</button>
                                <button className='btn  border-white bg-transparent text-white'> Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide5" className="carousel-item w-full relative flex items-center justify-start">
                    <img src={banner5} className="w-full h-full" />
                    <div className="absolute flex justify-center gap-5 bottom-14 right-14">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                    {/* slider texts */}
                    <div className='absolute z-10  text-start p-10 h-full  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='flex flex-col space-y-4'>
                            <h1 className='text-white text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn  border-orange-500 bg-orange-500 text-white'>Discover More</button>
                                <button className='btn  border-white bg-transparent text-white'> Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide6" className="carousel-item w-full relative flex items-center justify-start">
                    <img src={banner6} className="w-full h-full" />
                    <div className="absolute flex justify-center gap-5 bottom-14 right-14">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    {/* slider texts */}
                    <div className='absolute z-10  text-start p-10 h-full  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                        <div className='flex flex-col space-y-4'>
                            <h1 className='text-white text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-lg text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn  border-orange-500 bg-orange-500 text-white'>Discover More</button>
                                <button className='btn  border-white bg-transparent text-white'> Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;