import  { useState } from 'react';
import newsletterImage from '../../assets/images/b3.jpg';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission
        console.log('Email submitted:', email);
        // You can also add a fetch request to send the email to your server or an API
    }

    return (
  
            <div className=" bg-white shadow-xl rounded-lg lg:flex gap-10 space-y-5 p-10 items-center justify-center border">
                {/* Image Section */}
                <div className='lg:w-1/2 mx-auto '>
                    <img className=" object-cover rounded-xl " src={newsletterImage} alt="Newsletter" />
                </div>
                {/* Form Section */}
                <div className='lg:w-1/2 mx-auto'>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Sign up for our newsletter</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className='space-y-5'>
                                <input 
                                    id="name" 
                                    name="name" 
                                    type="text" 
                                    autoComplete="name" 
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Your Name" />
                                <input 
                                    id="email-address" 
                                    name="email" 
                                    type="email" 
                                    autoComplete="email" 
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500  focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                    placeholder="Your Email" />
                            </div>
                        </div>

                        <div>
                            <button 
                                type="submit" 
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#F97316] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-white group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 2.5a9.5 9.5 0 019.5 9.5c0 1.936-.575 3.73-1.562 5.238a1 1 0 01-1.828-.812c.94-1.456 1.39-3.142 1.39-4.426a7.5 7.5 0 10-15 0c0 1.284.45 2.97 1.39 4.426a1 1 0 01-1.828.812A9.503 9.503 0 019.5 12a1 1 0 012 0 7.5 7.5 0 0014 0 1 1 0 012 0 9.5 9.5 0 01-9.5 9.5 9.5 9.5 0 01-9.5-9.5c0-1.284.45-2.97 1.39-4.426a1 1 0 011.828.812C1.575 10.73 1 8.936 1 7.5a9.5 9.5 0 019.5-9.5zm1 8a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>

    );
};

export default Newsletter;
