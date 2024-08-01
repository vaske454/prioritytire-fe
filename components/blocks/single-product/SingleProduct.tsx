import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/Product';
import './SingleProduct.css';

interface SingleProductProps {
  product: Product;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  const descriptionHtml = (product.short_description as unknown as { html: string }).html;

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
        <div className="single-product-description" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        <p className="single-product-price">
          {product.price.regularPrice.amount.value} {product.price.regularPrice.amount.currency}
        </p>
        <button className="single-product-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
