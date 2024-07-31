"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './RebatesSlider.css';
import Image from 'next/image';
import React from 'react';
import { RebatesSliderProps } from '@/types/RebatesSliderProps';
import { Collection } from '@/types/Collection';
import Link from 'next/link';

// Import Swiper modules
SwiperCore.use([Navigation]);

const RebatesSlider: React.FC<RebatesSliderProps> = ({ collections }) => {

  // Return null if there are no collections
  if (collections.length === 0) {
    return null;
  }

  return (
    <div className="relative py-8 px-4">
      <p className="block-title font-bold leading-relaxed text-4xl mt-5 mb-8 text-center">Save with Rebates</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="rebates-slider"
      >
        {collections.map((collection: Collection) => (
          <SwiperSlide key={collection.id}>
            <div className="rebate bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={collection.image.url}
                alt={collection.name}
                width={540}
                height={284}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{collection.name}</h4>
                <p className="text-gray-700 mb-4">{collection.description}</p>
                <Link href="/" className="inline-block bg-orange-500 text-white py-2 px-4 rounded">
                  View Offer
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2"
           style={{
             backgroundImage: "url('https://prioritytire.com/static/version1722065952/frontend/TorqueDigital/prioritytire/en_US/images/icons/icon-slider-arrow.svg')",
             backgroundSize: 'contain',
             backgroundRepeat: 'no-repeat',
             backgroundPosition: 'center',
             height: '40px',
             width: '40px',
             fontSize: '0',
             transform: 'rotate(180deg)'
           }}
      >
      </div>
      <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2"
           style={{
             backgroundImage: "url('https://prioritytire.com/static/version1722065952/frontend/TorqueDigital/prioritytire/en_US/images/icons/icon-slider-arrow.svg')",
             backgroundSize: 'contain',
             backgroundRepeat: 'no-repeat',
             backgroundPosition: 'center',
             height: '40px',
             width: '40px',
             fontSize: '0'
           }}
      >
      </div>
    </div>
  );
}

export default RebatesSlider;
