"use client"
import React, { useState } from 'react';
import Link from 'next/link';
const Page = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className=" relative font-[sans-serif] w-max mr-3">
      <button
        type="button"
        onClick={handleToggle}
        className="px-4 py-3 bg-white flex items-center rounded-full text-[#333] text-sm border border-gray-300 outline-none hover:bg-gray-100"
      >
        <img
          src="/dummy-user.jpg"
          className="w-7 h-7 mr-3 rounded-full shrink-0"
          alt="Profile"
        />
        Sanjay K
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 fill-gray-400 inline ml-3"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <ul
          className="absolute shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto"
        >
          <li className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-4 h-4 mr-3"
              viewBox="0 0 512 512"
            >
              <path d="M... (SVG Path)" />
            </svg>
            View profile
          </li>
          <li className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-4 h-4 mr-3"
              viewBox="0 0 512 512"
            >
              <path d="M... (SVG Path)" />
            </svg>
            Dashboard
          </li>
          <li className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-4 h-4 mr-3"
              viewBox="0 0 6.35 6.35"
            >
              <path d="M... (SVG Path)" />
            </svg>
            <Link href="http://localhost:3000/login-page">Logout</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Page;
