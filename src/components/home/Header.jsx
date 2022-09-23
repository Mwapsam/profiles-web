/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useLogoutUserMutation } from '../../redux/users/userSlice';

const Header = ({ profileFilter, search }) => {
  const [logout] = useLogoutUserMutation();
  const handleLogout = () => {
    Cookies.remove('user', { path: '' });
    logout();
  };
  return (
    <>
      <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div
          className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300"
        >
          <div className="flex justify-center flex-1 lg:mr-32">
            <div
              className="relative w-full max-w-xl mr-6 focus-within:text-purple-500"
            >
              <div className="absolute inset-y-0 flex items-center pl-2">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                className="w-full pl-8 py-3 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                type="text"
                placeholder="Search for projects"
                aria-label="Search"
                value={search}
                onChange={profileFilter}
              />
            </div>
          </div>
          <ul className="flex items-center flex-shrink-0 space-x-6">
            <li className="relative">
              <button
                type="button"
                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                aria-label="Account"
                aria-haspopup="true"
              >
                <Link to="/">Home</Link>
              </button>
            </li>
            <li className="relative">
              <button
                type="button"
                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                onClick={handleLogout}
              >
                <Link to="/login">Logout</Link>
              </button>
            </li>
            <li className="relative">
              <button
                type="button"
                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                aria-label="Account"
                aria-haspopup="true"
              >
                <Link to="/new">Profile</Link>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
