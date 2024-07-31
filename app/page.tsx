import Header from '@/components/header/Header';
import Navigation from '@/components/blocks/navigation/Navigation';
import HeroBanner from '@/components/blocks/hero-banner/HeroBanner';
import RebatesSlider from '@/components/blocks/rebates-slider/RebatesSlider';
import Promotions from '@/components/blocks/promotions/Promotions';
import PopularProducts from '@/components/blocks/popular-products/PopularProducts';
import client from '@/lib/hygraphClient';
import { GET_HYGRAPH_COLLECTIONS_QUERY } from '@/graphql/GetHygraphCollections';
import {Collection} from '@/types/Collection';

export default async function Home() {
  const { data } = await client.query({
    query: GET_HYGRAPH_COLLECTIONS_QUERY,
    fetchPolicy: 'no-cache',
  });

  const collections: Collection[] = data.collections;

  return (
    <main className="flex min-h-[100vh] flex-col relative">
      <Header />
      <Navigation />
      <HeroBanner />
      <RebatesSlider collections={collections} />
      <Promotions />
      <PopularProducts />
    </main>
  );
}
