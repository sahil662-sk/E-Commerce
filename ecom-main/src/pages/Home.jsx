import React from 'react';
import { useSelector } from 'react-redux';
import LatestProductItem from '../components/LatestProductItem';
import BestSellers from '../components/BestSellers';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const heroImg = useSelector((state) => state.icons.icons.hero_img);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row items-center justify-center mb-8 hero border border-gray-300 rounded-lg">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center space-y-4 transition-shadow duration-300 hover:shadow-glow p-4 md:p-6 lg:p-8">
          <p className="text-lg md:text-xl text-gray-700 mb-2">Our Bestsellers</p>
          <p className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">Latest Arrivals</p> 
          <p className="text-md md:text-lg text-blue-600 font-semibold cursor-pointer hover:underline" onClick={() => { navigate(`/Collection`) }}>Shop now</p>
        </div>
        <img
          className="w-full md:w-1/2 rounded-lg shadow-2xl transition-shadow duration-300 hover:shadow-glow"
          src={heroImg}
          alt="Hero"
        />
      </div>

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Latest Collection</h1>
        <p className="text-md md:text-lg text-gray-700 mb-6">
          Discover the newest additions to our store, handpicked to bring you the best in fashion, electronics, and home essentials. Shop our latest collection and stay ahead of the trends.
        </p>
        <div className="hover:shadow-lg transition-shadow duration-300">
          <LatestProductItem />
        </div>

        <div className="mt-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Best Sellers</h1>
          <p className="text-md md:text-lg text-gray-700 mb-6">
            Explore our most popular products that customers love. From timeless classics to trendy must-haves, find out what's hot right now and join the satisfied shoppers.
          </p>
          <div className="hover:shadow-lg transition-shadow duration-300">
            <BestSellers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
