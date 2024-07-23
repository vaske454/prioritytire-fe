import client from '../lib/apolloClient';
import {GET_PRODUCTS_QUERY} from "@/graphql/GetProducts";
import {Product} from "@/types/Product";

export default async function Home() {
  const { data } = await client.query({
    query: GET_PRODUCTS_QUERY,
  });

  const products = data.products.items;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product: Product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <div dangerouslySetInnerHTML={{ __html: product.short_description.html }} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
