import client from './apolloClient';
import { GET_PRODUCTS_QUERY } from '@/graphql/GetProducts';
import { Product } from '@/types/Product';

export async function fetchProducts(): Promise<{ products: Product[] }> {
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
