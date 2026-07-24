import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const aboutImg = useSelector((state) => state.icons.icons.about_img);

  return (
    <div className="p-18 m-18">
      <h1 className="text-5xl font-bold text-gray-600 text-center mb-8">About Us</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-8">
        <img className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg" src={aboutImg} alt="About Us" />

        <div className="text-gray-700 max-w-2xl">
          <p className="mb-6 text-lg leading-relaxed">
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online.
            Our journey began with a simple idea: to provide a platform where customers can easily discover, explore,
            and purchase a wide range of products from the comfort of their homes.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that
            cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an
            extensive collection sourced from trusted brands and suppliers.
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to
            providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery
            and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
