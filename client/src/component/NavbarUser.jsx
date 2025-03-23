import React, { useState } from "react";

function NavbarUser() {
  const [isLocation, setIsLocation] = useState(false);
  const [isTourGuide, setIsTourGuide] = useState(false);
  const [isAddTransport, setIsAddTransport] = useState(false);
  const [isAddLodge, setIsAddLodge] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Left Side - Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-2xl font-semibold dark:text-white">
            WonderGuide
          </span>
        </a>

        {/* Right Side - Sections and Logout */}
        <div className="flex items-center space-x-8">
          {/* Sections */}
          <ul className="flex space-x-8 font-medium">
            {/* Location Dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsLocation(!isLocation)}
                className="flex items-center text-gray-900 hover:text-blue-700 dark:text-white"
              >
                Location
                <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isLocation && (
                <div className="absolute z-50 bg-white shadow-md rounded-lg w-44 mt-2 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a href="/add-location" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        Add Location
                      </a>
                    </li>
                    <li>
                      <a href="/view-location" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        View Locations
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Tour Guide Dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsTourGuide(!isTourGuide)}
                className="flex items-center text-gray-900 hover:text-blue-700 dark:text-white"
              >
                Tour Guide
                <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isTourGuide && (
                <div className="absolute z-50 bg-white shadow-md rounded-lg w-44 mt-2 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a href="/add-tour-guide" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        Add Tour Guide
                      </a>
                    </li>
                    <li>
                      <a href="/view-tour-guide" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        View Tour Guide
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Transport Dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsAddTransport(!isAddTransport)}
                className="flex items-center text-gray-900 hover:text-blue-700 dark:text-white"
              >
                Transport
                <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isAddTransport && (
                <div className="absolute z-50 bg-white shadow-md rounded-lg w-44 mt-2 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a href="/add-transport" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        Add Transport
                      </a>
                    </li>
                    <li>
                      <a href="/view-transport" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        View Transports
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Lodge Dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsAddLodge(!isAddLodge)}
                className="flex items-center text-gray-900 hover:text-blue-700 dark:text-white"
              >
                Lodge
                <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isAddLodge && (
                <div className="absolute z-50 bg-white shadow-md rounded-lg w-44 mt-2 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a href="/add-lodge" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        Add Lodge
                      </a>
                    </li>
                    <li>
                      <a href="/view-lodge" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        View Lodges
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Tour Bookings */}
            <li>
              <a href="#" className="text-gray-900 hover:text-blue-700 dark:text-white">
                Tour Bookings
              </a>
            </li>
          </ul>

          {/* Logout Button */}
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarUser;
