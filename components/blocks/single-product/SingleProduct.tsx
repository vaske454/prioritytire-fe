import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/Product';

interface SingleProductProps {
  product: Product;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  const descriptionHtml = (product.short_description as unknown as { html: string }).html;

  return (
    <div className="p-4 flex flex-col lg:flex-row lg:items-start">
      <div className="flex-shrink-0 lg:w-1/2 lg:mr-6">
        <Image
          src={product.image.url}
          alt={product.name}
          width={436}
          height={436}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="lg:w-1/2 flex flex-col justify-between">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <div className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        <p className="text-xl font-semibold mb-4">
          {product.price.regularPrice.amount.value} {product.price.regularPrice.amount.currency}
        </p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:underline">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
