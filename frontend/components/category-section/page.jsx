"use client"
import React from 'react';
import Link from 'next/link';
const Page = () => {
  return (
    <>
      {/* Card Blog */}
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <h1 className='text-5xl text-center mb-[1.2em]' >SHOP BY CATEGORY</h1>
        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card */}
          <Link className="group relative block rounded-xl focus:outline-none" href="http://localhost:3000/search/shoes">
            <div className="before:from-gray-200/ relative h-[350px] w-full shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t">
              <img
                className="absolute start-0 top-0 size-full object-cover"
                src="/category/shoes.png"
                alt="Category Image"
              />
            </div>
            <div className="absolute inset-x-0 top-0 z-10"></div>
            <div className="absolute inset-x-0 bottom-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-white/80 group-focus:text-white/80 sm:text-3xl">
                  Shoes
                </h3>
              </div>
            </div>
          </Link>
          {/* End Card */}
          {/* Card */}
          <Link className="group relative block rounded-xl focus:outline-none" href="http://localhost:3000/search/hoodie">
            <div className="before:from-gray-200/ relative h-[350px] w-full shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t">
              <img
                className="absolute start-0 top-0 size-full object-cover"
src='/category/hoodie.png'                alt="Category Image"
              />
            </div>
            <div className="absolute inset-x-0 top-0 z-10"></div>
            <div className="absolute inset-x-0 bottom-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-white/80 group-focus:text-white/80 sm:text-3xl">
                 Hoodies
                </h3>
              </div>
            </div>
          </Link>
          {/* End Card */}
          {/* Card */}
          <Link className="group relative block rounded-xl focus:outline-none" href="http://localhost:3000/search/BottomWear">
            <div className="before:from-gray-200/ relative h-[350px] w-full shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t">
              <img
                className="absolute start-0 top-0 size-full object-cover"
src='/category/trackpant.png'                alt="Category Image"
              />
            </div>
            <div className="absolute inset-x-0 top-0 z-10"></div>
            <div className="absolute inset-x-0 bottom-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-white/80 group-focus:text-white/80 sm:text-3xl">
                 Parachute Pants
                </h3>
              </div>
            </div>
          </Link>
          {/* End Card */}
          {/* Card */}
          <Link className="group relative block rounded-xl focus:outline-none" href="http://localhost:3000/search/t-shirts">
            <div className="before:from-gray-200/ relative h-[350px] w-full shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t">
              <img
                className="absolute start-0 top-0 size-full object-cover"
src='/category/tshirt.png'          
      alt="Category Image"
              />
            </div>
            <div className="absolute inset-x-0 top-0 z-10"></div>
            <div className="absolute inset-x-0 bottom-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <h3 className="  text-lg font-semibold text-white group-hover:text-white/80 group-focus:text-white/80 sm:text-3xl">
Oversized Tees                </h3>
              </div>
            </div>
          </Link>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </>
  );
};

export default Page;
