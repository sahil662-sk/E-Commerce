import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const logo = useSelector((state) => state.icons.icons.logo);
  console.log('Logo URL:', logo);

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink to="/collection">
          <img src={logo} alt="Logo" className="h-10" />
        </NavLink>
        <ul className="flex justify-between space-x-8">
          <li>
            <NavLink
              exact
              to="/"
              className="text-gray-800 text-lg font-semibold hover:text-blue-800 transition duration-300"
              activeClassName="text-blue-600"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              className="text-gray-800 text-lg font-semibold hover:text-blue-800 transition duration-300"
              activeClassName="text-blue-600"
            >
              Collection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-gray-800 text-lg font-semibold hover:text-blue-800 transition duration-300"
              activeClassName="text-blue-600"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-gray-800 text-lg font-semibold hover:text-blue-800 transition duration-300"
              activeClassName="text-blue-600"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="text-gray-800 text-lg font-semibold hover:text-blue-800 transition duration-300"
              activeClassName="text-blue-600"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
