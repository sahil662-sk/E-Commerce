import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const items = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const shopNowHandler = () => {
    navigate('/collection');
  };

  return (
    <div className="flex flex-col items-center py-8 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Cart</h1>
      <div className="w-4/5 lg:w-2/3">
        {items && items.length > 0 ? (
          items.map((itm) => (
            <div
              key={itm._id}
              className="border border-gray-200 rounded-lg p-4 mb-6 bg-white bg-opacity-90 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={itm.image[0]}
                alt={itm.name}
                className="w-32 h-32 mx-auto mb-4 rounded-lg"
              />
              <div>
                <h1 className="text-xl font-semibold mb-2">{itm.name}</h1>
                <p className="text-gray-700 font-bold mb-4">${itm.price}</p>
                <button
                  onClick={() => deleteHandler(itm._id)}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:from-red-700 hover:to-red-500 hover:shadow-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p className="text-gray-800 mb-4">Your cart is empty</p>
            <button
              onClick={shopNowHandler}
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md transition duration-300 hover:bg-blue-600"
            >
              Shop Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
