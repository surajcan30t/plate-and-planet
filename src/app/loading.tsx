import Image from 'next/image';
import React from 'react';

const loading = () => {
  return (
    <div className="flex flex-col h-[90vh] justify-center items-center">
      <Image
        src="/cfd-logo.png"
        alt="logo"
        width={300}
        height={300}
        className="invert animate-pulse opacity-100"
      />
    </div>
  );
};

export default loading;
