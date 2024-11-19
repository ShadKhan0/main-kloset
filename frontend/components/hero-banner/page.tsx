"use client"
import React from 'react';
import Link from 'next/link';
const Page = () => {
  return (
    <>
      <>
        {/* Slider */}
        <div className="px-4 py-10 md:px-6 lg:px-8">
          <div
            data-hs-carousel='{
"loadingClasses": "opacity-0"
    }'
            className="relative"
          >
            <div className="hs-carousel relative h-[30rem] w-full overflow-hidden rounded-2xl bg-gray-100 md:h-[calc(100vh-106px)] dark:bg-neutral-800">
              <div className="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap opacity-0 transition-transform duration-700">
                <div className="hs-carousel-slide">
                  <div className="flex h-[30rem] flex-col bg-[url('/banner-2.svg')] bg-cover bg-right bg-no-repeat md:h-[calc(100vh-106px)]">
                    <div className="mt-auto w-2/3 pb-5 ps-5 md:max-w-lg md:pb-10 md:ps-10">
                      <span className="block text-white">Oversized-Tees</span>
                      <span className="block text-xl text-white md:text-3xl">
                        Get 50% off on Your Favourite Brands.
                      </span>
                      <div className="mt-5">
                        <Link
                          className="inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                          href="http://localhost:3000/search"
                        >
                          Shop Now!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}

                <div className="hs-carousel-slide">
                  <div className="flex h-[30rem] flex-col bg-[url('https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat md:h-[calc(100vh-106px)]">
                    <div className="mt-auto w-2/3 pb-5 ps-5 md:max-w-lg md:pb-10 md:ps-10">
                      <span className="block text-white">Foot Essentials</span>
                      <span className="block text-xl text-white md:text-3xl">
                        Flash Sale- Get 30% off on All Nike Shoes.
                      </span>
                      <div className="mt-5">
                        <Link
                          className="inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                          href="http://localhost:3000/search"
                        >
                          Buy Now!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="hs-carousel-slide">
                  <div className="flex h-[30rem] flex-col bg-[url('/banner-1.svg')] bg-cover bg-center bg-no-repeat md:h-[calc(100vh-106px)]">
                    <div className="mt-auto w-2/3 pb-5 ps-5 md:max-w-lg md:pb-10 md:ps-10">
                      <span className="block text-white">Winter Collection</span>
                      <span className="block text-xl text-white md:text-3xl">
                        600gsm Hoodies with Custom Print.
                      </span>
                      <div className="mt-5">
                        <Link
                          className="inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                          href="http://localhost:3000/search"
                        >
                          Shop Collection!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Item */}
                {/* Item */}

                {/* End Item */}
              </div>
            </div>
            {/* Arrows */}
            <button
              type="button"
              className="hs-carousel-prev absolute inset-y-0 start-0 inline-flex h-full w-12 items-center justify-center rounded-s-2xl text-black hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none hs-carousel-disabled:opacity-50"
            >
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="size-3.5 shrink-0 md:size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              type="button"
              className="hs-carousel-next absolute inset-y-0 end-0 inline-flex h-full w-12 items-center justify-center rounded-e-2xl text-black hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none hs-carousel-disabled:opacity-50"
            >
              <span className="sr-only">Next</span>
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="size-3.5 shrink-0 md:size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
            </button>
            {/* End Arrows */}
          </div>
        </div>
        {/* End Slider */}
      </>
    </>
  );
};

export default Page;
