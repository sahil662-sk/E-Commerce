import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Collection = () => {
  const navigate = useNavigate();
  const collection = useSelector((state) => state.products.products);

  const ClickProduct = (_id) => {
    console.log('Product Clicked', _id);
    navigate(`/product/${_id}`);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">All Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {collection.map((item) => (
          <div
            key={item._id}
            className="p-4 text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => ClickProduct(item._id)}
          >
            <img src={item.image[0]} alt={item.name} className="w-full h-auto mb-4 rounded-lg" />
            <div>
              <h1 className="text-lg font-semibold mb-2">{item.name}</h1>
              <p className="text-gray-600 font-bold mb-4">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
