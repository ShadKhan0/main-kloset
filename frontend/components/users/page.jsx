"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
const Page = () => { 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser ] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchUserDetails = async () => {
      const token = localStorage.getItem('token'); // Get the token from local storage
      if (token) {
          try {
              // Decode the token to get the user ID
              const decodedToken = jwtDecode(token); // Decode the token
              const userId = decodedToken.id; // Get the user ID from the decoded token

              // Fetch user details using the user ID
              const response = await axios.get(`http://localhost:5000/user/getbyid/${userId}`, {
                  headers: {
                      'Authorization': `Bearer ${token}` // Include the token in the request header
                  }
              });
              setUser (response.data); // Set the user data
               // Set the user name
          } catch (error) {
              console.error('Error fetching user details:', error);
          } finally {
              setLoading(false); // Set loading to false
          }
      } else {
          setLoading(false); // If no token, set loading to false
      }
  };

  fetchUserDetails(); // Call the function to fetch user details
}, []);
if (loading) {
      return <div>Loading...</div>;
  }

  if (!user) {
    <div className=" relative font-[sans-serif] w-max mr-3">
    <button
      type="button"
      
      className="px-4 py-3 bg-white flex items-center rounded-full text-[#333] text-sm border border-gray-300 outline-none hover:bg-gray-100"
    >
      <img
        src="/dummy-user.jpg"
        className="w-7 h-7 mr-3 rounded-full shrink-0"
        alt="Profile"
      />
      Login
     
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
   
  </div>
  }
 

  const handleToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleLogout = () => {
  
    setIsDropdownOpen(false);
    // Redirect or perform other logout actions if needed
  };
  const handleLogin = async (newToken) => {
    localStorage.setItem('token', newToken); // Store the new token
    await fetchUserDetails(); // Fetch user details to update the name
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
        {user.name}
       
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
           <Link href="/user-profile"> View profile </Link>
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
            <button onClick={handleLogout}> <Link href="http://localhost:3000/login-page">Logout</Link></button>
           
          </li>
        </ul>
      )}
    </div>
  );
};

export default Page;
