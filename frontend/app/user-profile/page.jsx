'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { jwtDecode } from 'jwt-decode';


const Page = () => {
  const [user, setUser] = useState(null);
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
              Authorization: `Bearer ${token}` // Include the token in the request header
            }
          });
          setUser(response.data); // Set the user data
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
    return <div>No user data available</div>;
  }

  return (
    <>
      {/* component */}
      {/* This is an example component */}
      <div className='py-12 w-[12%] mx-auto mb-0 ml-[10%]'>
  <Link className='flex items-center bg-black text-white rounded-md px-4 py-2' href="/">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="11"   height="20" id="arrow" className='mr-2 hover:-translate-x-1'>
      <path fillRule="evenodd" d="M10.634.292a1.063 1.063 0 0 0-1.464 0L.607 8.556a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413"></path>
    </svg>
    back to home
  </Link>
</div>
      <div>
        
        <h1 className="pb-12 text-center text-5xl">Your Profile</h1>
      </div>
      <div className="mx-auto my-auto h-screen w-[80%]">
        <div className="block border-b-2 md:flex">
          <div
            className="w-full rounded-md bg-white p-4 shadow-md sm:p-6 md:w-2/5 lg:p-8"
            style={{ backgroundColor: '#BEBCBF' }}
          >
            <div className="bg flex justify-between">
              <span className="block text-xl font-semibold">Welcome To Kloset</span>
              <a
                href="#"
                className="text-md -mt-2 rounded-full bg-black px-5 py-2 font-bold text-white hover:bg-gray-800"
              >
                Edit
              </a>
            </div>
            <span className="pr-12 text-gray-600">
              To change your password, please contact info@kloset.com
            </span>
            <div className="flex w-full justify-center">
              <video muted loop src="/user-profile.mp4" autoPlay type="video/mp4"></video>
            </div>
          </div>
          <div className="w-full bg-white p-8 shadow-md md:w-3/5 lg:ml-4">
            <div className="rounded p-6 shadow">
              <div className="pb-6">
                <label htmlFor="name" className="block pb-1 font-semibold text-gray-700">
                  Username
                </label>
                <div className="flex">
                  <input
                    disabled
                    id="username"
                    className="border-1 w-full rounded-r px-4 py-2"
                    type="text"
                    defaultValue={user.name}
                  />
                </div>
              </div>
              <div className="pb-4">
                <label htmlFor="about" className="block pb-1 font-semibold text-gray-700">
                  Email
                </label>
                <input
                  disabled
                  id="email"
                  className="border-1 w-full rounded-r px-4 py-2"
                  type="email"
                  defaultValue={user.email}
                />
                <span className="block pt-4 text-gray-600 opacity-70">
                  Personal login information of your account
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Page;
