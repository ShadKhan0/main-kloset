"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
const Page = () => {
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

  <div> <h1 className='text-5xl text-center py-12'>Your Profile</h1></div><div className="h-screen w-[80%] mx-auto my-auto">
    <div className="border-b-2 block md:flex">
      <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md rounded-md" style={{backgroundColor:"#BEBCBF"}}>
        <div className="flex justify-between bg">

          <span className="text-xl font-semibold block">Welcome To Kloset</span>
          <a
            href="#"
            className="-mt-2 text-md font-bold text-white bg-black rounded-full px-5 py-2 hover:bg-gray-800"
          >
            Edit
          </a>
        </div>
        <span className="text-gray-600 pr-12">
          To change your password, please contact info@kloset.com
        </span>
        <div className="w-full flex justify-center" >
        <video muted loop  src="/user-profile.mp4" autoPlay type='video/mp4'></video>

        </div>
      </div>
      <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
        <div className="rounded  shadow p-6">
          <div className="pb-6">
            <label
              htmlFor="name"
              className="font-semibold text-gray-700 block pb-1"
            >
            Username
            </label>
            <div className="flex">
              <input
               disabled
                id="username"
                className="border-1  rounded-r px-4 py-2 w-full"
                type="text"
                defaultValue={user.name}
              />
            </div>
          </div>
          <div className="pb-4">
            <label
              htmlFor="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Email
            </label>
            <input
              disabled
              id="email"
              className="border-1  rounded-r px-4 py-2 w-full"
              type="email"
              defaultValue={user.email}
            />
            <span className="text-gray-600 pt-4 block opacity-70">
              Personal login information of your account
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Page
