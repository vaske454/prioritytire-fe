import client from '../lib/apolloClient';
import { GET_PRODUCTS_QUERY } from '@/graphql/GetProducts';
import { Product } from '@/types/Product';
import ErrorPage from '../components/ErrorPage';
import Header from '@/components/header/Header';
import Navigation from '@/components/blocks/navigation/Navigation';
import HeroBanner from '@/components/blocks/hero-banner/HeroBanner';
import RebatesSlider from '@/components/blocks/rebates-slider/RebatesSlider';
import Promotions from '@/components/blocks/promotions/Promotions';

async function fetchProducts() {
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS_QUERY,
      fetchPolicy: 'no-cache',
    });
    return { products: data.products.items };
  } catch (error) {
    throw new Error("Failed to connect to the database");
  }
}

export default async function Home() {
  let products: Product[] = [];

  try {
    const result = await fetchProducts();
    products = result.products;
  } catch (error) {
    return <ErrorPage message="Failed to connect to the database" />;
  }

  return (
    <main className="flex min-h-[100vh] flex-col relative">
      <Header />
      <Navigation />
      <HeroBanner />
      <RebatesSlider />
      <Promotions />
      {/*<div>*/}
      {/*  <h1>Products</h1>*/}
      {/*  <ul>*/}
      {/*    {products.map((product: Product) => (*/}
      {/*      <li key={product.id}>*/}
      {/*        <h2>{product.name}</h2>*/}
      {/*        <div dangerouslySetInnerHTML={{ __html: product.short_description.html }} />*/}
      {/*      </li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </main>
  );
}
