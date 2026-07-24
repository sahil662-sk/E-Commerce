import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const ProductDetail = () => {
  const dispatch = useDispatch();

  const cartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const { _id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((item) => item._id === _id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-8">
      <img className="w-full lg:w-1/3 rounded-lg shadow-lg" src={product.image[0]} alt={product.name} />
      <div className="max-w-full lg:max-w-[30vw] flex flex-col space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800">{product.name}</h1>
        <p className="text-xl sm:text-2xl font-semibold text-gray-700">${product.price}</p>
        <p className="text-lg text-gray-600">{product.description}</p>
        <p className="text-lg font-semibold text-gray-800">Size</p>
        <div className="flex flex-wrap gap-3">
          {product.sizes.map((element, index) => (
            <div key={index} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800">
              <p>{element}</p>
            </div>
          ))}
        </div>
        <button
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 hover:bg-blue-600 cursor-pointer"
          onClick={() => cartHandler(product)}
        >
          Add to Cart
        </button>
        <p className="text-gray-600 font-semibold">100% Original product.</p>
        <p className="text-gray-600 font-semibold">Cash on delivery is available on this product.</p>
        <p className="text-gray-600 font-semibold">Easy return and exchange policy within 7 days.</p>
      </div>
    </div>
  );
};

export default ProductDetail;
