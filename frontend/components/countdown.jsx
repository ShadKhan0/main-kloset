'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Countdown() {
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) return prev - 1;
        setMinutes((min) => {
          if (min > 0) return min - 1;
          setHours((hr) => (hr > 0 ? hr - 1 : 0));
          return 59;
        });
        return 59;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <div className='flex flex-col text-center'><p>New Styles On Sale: Up To 40% Off</p>
      </div>
    <div className="flex justify-center space-x-4 text-center">
     
      <div className="flex flex-col rounded-box bg-black px-2 py-1 text-neutral-content">
        <span className="countdown font-mono text-2xl">
          <span style={{ '--value': hours }}></span>
        </span>
        hrs
      </div>
      <div className="flex flex-col rounded-box bg-black px-2 py-1 text-neutral-content">
        <span className="countdown font-mono text-2xl">
          <span style={{ '--value': minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col rounded-box bg-black px-2 py-1 text-neutral-content">
        <span className="countdown font-mono text-2xl">
          <span style={{ '--value': seconds }}></span>
        </span>
        sec
      </div>
    

    </div>
    <div className="flex justify-center mt-4">
        <button className='text-white text-xs underline'>
          <Link href="http://localhost:3000/search" className='bg-black py-2 px-3 rounded-full'>
            Shop Now
          </Link>
        </button>
        </div>

    </div>
  );
}
