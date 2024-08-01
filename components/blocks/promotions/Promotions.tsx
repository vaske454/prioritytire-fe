import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Promotions = () => {
  return (
    <div className="home-save relative py-8 px-4">
      <p className="block-title text-4xl font-bold text-center mb-8">Save Now With Our Promotions</p>
      <div className="flex flex-wrap justify-between">
        {/* First Coupon */}
        <div className="flex flex-col bg-[#ffb634] p-4 rounded-lg shadow-lg w-full md:w-1/3 mb-4">
          <Image
            src="https://prioritytire.com/media/wysiwyg/tire_yellow_1.png"
            alt="First Time Buyer"
            width={540}
            height={284}
            className="w-full h-auto"
          />
          <div className="mt-4">
            <p className="text-xl font-semibold">First Time Buyer</p>
            <p className="text-3xl font-bold">$5 OFF</p>
            <p className="mt-2 text-lg">
              Copy Coupon Code: <a href="/" className="text-blue-600 font-semibold">FIRST5</a>
            </p>
          </div>
        </div>

        {/* Military Discount */}
        <div className="relative flex flex-col items-center p-4 rounded-lg shadow-lg w-full md:w-1/3 mb-4">
          <a href="https://prioritytire.com/special-discounts" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0">
            <Image
              src="https://prioritytire.com/media/.renditions/wysiwyg/military_01-2_1_1_-min.png"
              alt="Special Discounts"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </a>
          <div className="relative z-10 bg-[#ffb634] p-4 self-start mt-auto">
            <p className="text-xl font-semibold">5% DISCOUNT FOR</p>
            <ul className="list-disc list-inside text-lg">
              <li>Military</li>
              <li>Teachers</li>
              <li>First responders</li>
              <li>Medical staff</li>
            </ul>
          </div>
        </div>

        {/* Pay Later */}
        <div className="flex flex-col items-center bg-[#f5f5f5] rounded-lg shadow-lg w-full md:w-1/3 mb-4">
          <h2 className="text-2xl font-bold mb-4">Buy Tires Now, Pay Later</h2>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>Get approved in seconds</li>
            <li>Finance & low monthly payments</li>
          </ul>
          <p className="mb-4">
            You can purchase the tires you need today and make payments over time. Simply select the tires you want to purchase and add them to your cart. When you check out, choose the buy now - pay later option and follow the prompts to complete your application.
          </p>
          <Link href="/" className="bg-orange-500 text-white py-2 px-4 rounded">All About Financing</Link>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link href="/" className="bg-orange-500 text-white py-2 px-4 rounded">View All Promotions</Link>
      </div>
    </div>
  );
};

export default Promotions;
