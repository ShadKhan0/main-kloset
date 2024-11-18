import React from 'react';
import Link from 'next/link';
const Page = () => {
  return (
    <>
      <>
        {/* Features */}
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="aspect-w-16 aspect-h-7 flex w-[100%] items-center">
            <img
              className="mx-auto h-[600px] w-[90%] rounded-xl object-cover"
              src="/nike/nike.png"
              alt="Features Image"
            />
          </div>
          {/* Grid */}
          <div className="flex flex-col py-6 text-center">
            <h5 className=''>Tatum-3</h5>
            <h1 className='text-5xl pb-3'>ZERO PRESSURE</h1>
            <p className=' mx-auto w-[70%] text-center'>It's cool for others to crash out but Jayson Tatum keeps that energy reserved for continuing to master the game. With its smooth grey color blocking and out-the-box, ready-to-play feel, the 'Zen' is inspired by Jayson's blend of cool demeanor and ferocious on-court abilities</p>
         <button className='mt-[1.3rem]'><Link className='px-6 py-2 rounded-full bg-black text-white ' href="http://localhost:3000/search">BUY NOW</Link></button> </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </>
    </>
  );
};

export default Page;
