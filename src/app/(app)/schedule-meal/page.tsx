import OrderForm from '@/components/OrderForm';
import Link from 'next/link';
import React from 'react';

const page = async () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="felx flex-col space-y-1 lg:space-y-5 lg:w-1/3">
        <div className="flex flex-row mr-5 mt-1 lg:m-5 float-right border rounded w-[90vw] lg:w-[30vw]">
          <h1 className="w-full p-10 text-xl font-medium text-zinc-400">
            Schedule Meal For :{' '}
            <span className="text-white font-semibold">
              {date.toDateString()}
            </span>
          </h1>
        </div>
        <Link
          href="#"
          className="flex flex-row mr-5 mt-1 lg:m-5 float-right border rounded w-[90vw] lg:w-[30vw]"
        >
          <h1 className="p-5">Your Order</h1>
        </Link>
      </div>
      <div className="w-[90vw] lg:w-[40vw] border rounded m-5">
        <div className="p-5">
          <OrderForm />
        </div>
      </div>
    </div>
  );
};

export default page;
