import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Promotions.css';

const Promotions = () => {
  return (
    <div className="promotions-container">
      <p className="promotions-title">Save Now With Our Promotions</p>
      <div className="promotions-grid">
        {/* First Coupon */}
        <div className="coupon-card coupon-card-first-time">
          <Image
            src="https://prioritytire.com/media/wysiwyg/tire_yellow_1.png"
            alt="First Time Buyer"
            width={540}
            height={284}
            className="coupon-image"
          />
          <div className="coupon-info">
            <p className="coupon-name">First Time Buyer</p>
            <p className="coupon-discount">$5 OFF</p>
            <p className="coupon-code">
              Copy Coupon Code: <a href="/" className="coupon-link">FIRST5</a>
            </p>
          </div>
        </div>

        {/* Military Discount */}
        <div className="coupon-card coupon-card-military">
          <a href="https://prioritytire.com/special-discounts" target="_blank" rel="noopener noreferrer" className="coupon-link-overlay">
            <Image
              src="https://prioritytire.com/media/.renditions/wysiwyg/military_01-2_1_1_-min.png"
              alt="Special Discounts"
              layout="fill"
              objectFit="cover"
              className="coupon-overlay-image"
            />
          </a>
          <div className="coupon-overlay-info">
            <p className="coupon-overlay-title">5% DISCOUNT FOR</p>
            <ul className="coupon-overlay-list">
              <li>Military</li>
              <li>Teachers</li>
              <li>First responders</li>
              <li>Medical staff</li>
            </ul>
          </div>
        </div>

        {/* Pay Later */}
        <div className="coupon-card coupon-card-pay-later">
          <h2 className="coupon-title">Buy Tires Now, Pay Later</h2>
          <ul className="coupon-list">
            <li>Get approved in seconds</li>
            <li>Finance & low monthly payments</li>
          </ul>
          <p className="coupon-description">
            You can purchase the tires you need today and make payments over time. Simply select the tires you want to purchase and add them to your cart. When you check out, choose the buy now - pay later option and follow the prompts to complete your application.
          </p>
          <Link href="/" className="coupon-link-button">All About Financing</Link>
        </div>
      </div>

      <div className="promotions-footer">
        <Link href="/" className="promotions-footer-link">View All Promotions</Link>
      </div>
    </div>
  );
};

export default Promotions;
