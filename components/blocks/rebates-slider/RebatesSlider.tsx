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
    <div className="rebates-slider-container">
      <p className="rebates-slider-title">Save with Rebates</p>
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
            <div className="rebate-card">
              <Image
                src={collection.image.url}
                alt={collection.name}
                width={540}
                height={284}
                className="rebate-image"
              />
              <div className="rebate-info">
                <h4 className="rebate-title">{collection.name}</h4>
                <p className="rebate-description">{collection.description}</p>
                <Link href="/" className="rebate-link">
                  View Offer
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}

export default RebatesSlider;
