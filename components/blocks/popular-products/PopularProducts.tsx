import { fetchProducts } from '@/lib/fetchProducts';
import { Product } from '@/types/Product';
import ErrorPage from '../../../components/ErrorPage';
import Image from 'next/image';
import './PopularProducts.css';

const PopularProducts = async () => {
  let products: Product[] = [];

  try {
    const result = await fetchProducts();
    products = result.products;
  } catch (error) {
    return <ErrorPage message="Failed to connect to the database" />;
  }

  return (
    <div className="popular-products-container">
      <p className="popular-products-title">Popular Products</p>
      <div className="popular-products-grid">
        {products.map((product) => (
          <div key={product.id} className="popular-product-card">
            <Image
              src={product.image.url}
              alt={product.name}
              width={500}
              height={400}
              className="popular-product-image"
            />
            <div className="popular-product-info">
              <h3 className="popular-product-name">{product.name}</h3>
              <p className="popular-product-price">
                {product.price.regularPrice.amount.value} {product.price.regularPrice.amount.currency}
              </p>
            </div>
            <div className="popular-product-action">
              <a href={`/product/${product.url_key}`} className="popular-product-link">
                View Product
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
