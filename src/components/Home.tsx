'use client';
import React, { use, useEffect } from 'react';
import { useGlobalContext } from '@/contexts';
import Image from 'next/image';

const Home = () => {
  const { user, setUser } = useGlobalContext();

  return (
    <>
      {/* {user ? (
            <>
            <AuthHome />
            <div></div>
            </>
            ) : <NoAuthHome />}  */}
      <div className="flex flex-col w-[60vw]">
        <div className="ml-10">
          <h1 className="font-extrabold mt-10 bg-gradient-to-r from-lime-400 via-green-300 to-cyan-400 inline-block text-transparent bg-clip-text text-9xl">
            Every bite counts.
          </h1>{' '}
          <br />
          <h2 className="mt-14 text-6xl text-zinc-50 font-extrabold">
            Order mindfully, feed the hungry.
          </h2>
          <h3 className="text-xl font-light mt-10">
            An approach to reduce food waste and feed the hungry, just by
            managing your portions and ordering only what you can eat. By being
            mindful of the amount of food you order, you not only enjoy fresh
            meals but also <span className="text-yellow-300">contribute</span>{' '}
            to a larger cause. Together, we can make a significant impact on
            hunger and food wastage.
          </h3>
        </div>
      </div>
      <div className="absolute right-10 top-[10%]">
        <Image
          src="/assets/lowpoly-earth.png"
          alt="food"
          width={600}
          height={600}
        />
      </div>
    </>
  );
};

export default Home;
