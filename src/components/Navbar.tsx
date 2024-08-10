'use client';
import Image from 'next/image';
import React from 'react';
import { useGlobalContext } from '@/contexts';
import { Button } from './ui/button';

const Navbar = () => {
  const admin = useGlobalContext().admin;
  const user = useGlobalContext().user;
  return (
    <nav className="top-0 z-[100] border-b  sticky h-16 backdrop-blur-[6px]">
      <div className="container mx-auto h-full flex justify-between items-center">
        <div className="text-white text-md flex flex-row justify-center items-center">
          <div className="w-14">
            <Image
              className="relative"
              src="/cfd-logo.png"
              width={70}
              height={10}
              alt="logo"
            />
          </div>
          <div className="hidden md:block md:text-xl lg:text-2xl">
            Plate & Planet
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {admin && (
            <Button variant={'outline'} size={'lg'}>
              Dashboard
            </Button>
          )}
          {user ? (
            <Button
              className="hover:font-extrabold"
              variant={'destructive'}
              size={'lg'}
            >
              Logout
            </Button>
          ) : (
            <Button className="bg-green-500 text-white hover:text-black">
              Sign In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
