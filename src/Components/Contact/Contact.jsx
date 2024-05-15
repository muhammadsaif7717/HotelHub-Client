import { Helmet } from "react-helmet-async";


const Contact = () => {
  return (
    <div className="min-h-[85vh] my-14 bg-gray-200 flex flex-col justify-center items-center rounded-xl">
      <Helmet>
        <title>HotelHub | Contact Us</title>
      </Helmet>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
            <textarea id="message" name="message" rows="5" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Send</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
