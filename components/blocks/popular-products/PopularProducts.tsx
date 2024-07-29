import client from '../../../lib/apolloClient';
import { GET_PRODUCTS_QUERY } from '@/graphql/GetProducts';
import { Product } from '@/types/Product';
import ErrorPage from '../../../components/ErrorPage';

async function fetchProducts() {
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS_QUERY,
      fetchPolicy: 'no-cache',
    });
    return {
      products: [
        ...data.category1.products.items,
        ...data.category2.products.items,
        ...data.category3.products.items,
      ],
    };
  } catch (error) {
    throw new Error("Failed to connect to the database");
  }
}

const PopularProducts = async () => {
  let products: Product[] = [];

  try {
    const result = await fetchProducts();
    products = result.products;
  } catch (error) {
    return <ErrorPage message="Failed to connect to the database" />;
  }

  return (
    <div className="carousel">
      <p>Popular Products</p>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image.url} alt={product.name} />
          <h3>{product.name}</h3>
          <p>
            {product.price.regularPrice.amount.value} {product.price.regularPrice.amount.currency}
          </p>
          <a href={`/product/${product.url_key}`}>View Product</a>
        </div>
      ))}
    </div>
  );
};

export default PopularProducts;
