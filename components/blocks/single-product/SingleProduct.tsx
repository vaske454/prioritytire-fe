'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/Product';
import './SingleProduct.css';

interface SingleProductProps {
  product: Product;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const descriptionHtml = (product.short_description as unknown as { html: string }).html;

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value >= 1 ? value : 1);
  };

  return (
    <div className="single-product-container">
      <div className="single-product-image">
        <Image
          src={product.image.url}
          alt={product.name}
          width={436}
          height={436}
          className="single-product-image-img"
        />
      </div>

      <div className="single-product-info">
        <h1 className="single-product-title">{product.name}</h1>
        <div className="single-product-description" dangerouslySetInnerHTML={{__html: descriptionHtml}}/>
        <p className="single-product-price">
          {product.price.regularPrice.amount.value} {product.price.regularPrice.amount.currency}
        </p>
        <div className="w-full flex flex-col items-start mb-4">
          <label htmlFor="quantity" className="mb-1 text-lg font-medium">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="border border-gray-300 rounded-lg px-3 py-2 text-center w-24"
          />
        </div>
        <button className="single-product-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
