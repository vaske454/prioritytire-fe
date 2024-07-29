import { fetchProducts } from '@/lib/fetchProducts';
import { Product } from '@/types/Product';
import ErrorPage from '../../../components/ErrorPage';
import Image from 'next/image';

const PopularProducts = async () => {
  let products: Product[] = [];

  try {
    const result = await fetchProducts();
    products = result.products;
  } catch (error) {
    return <ErrorPage message="Failed to connect to the database" />;
  }

  return (
    <div className="p-4">
      <p className="text-2xl font-bold mb-6 text-center">Popular Products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 border rounded-lg shadow-md">
            <Image
              src={product.image.url}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {product.price.regularPrice.amount.value} {product.price.regularPrice.amount.currency}
            </p>
            <a href={`/product/${product.url_key}`} className="text-blue-500 hover:underline">View Product</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
