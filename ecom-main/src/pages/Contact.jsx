import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {
  const contact_img = useSelector((state) => state.icons.icons.contact_img);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
        <div className="text-center mb-8">
          <img src={contact_img} alt="Contact" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
          <p className="text-gray-700">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, please don't hesitate to reach out. Fill out the form below, and we'll get back to you as soon as possible.</p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
