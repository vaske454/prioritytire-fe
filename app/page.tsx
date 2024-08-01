import Header from '@/components/header/Header';
import Navigation from '@/components/blocks/navigation/Navigation';
import HeroBanner from '@/components/blocks/hero-banner/HeroBanner';
import RebatesSlider from '@/components/blocks/rebates-slider/RebatesSlider';
import Promotions from '@/components/blocks/promotions/Promotions';
import PopularProducts from '@/components/blocks/popular-products/PopularProducts';
import { fetchCollections } from '@/lib/fetchCollections';
import { fetchCategories } from '@/lib/fetchCategories';
import { Collection } from '@/types/Collection';
import { MenuItem } from '@/types/MenuItem';

export default async function Home() {
  let collections: Collection[] = [];
  let menuItems: MenuItem[] = [];

  try {
    collections = await fetchCollections();
    menuItems = await fetchCategories();
  } catch (error) {
    console.error('Error fetching data: ', error);
  }

  return (
    <main className="main-container">
      <Header />
      <Navigation menuItems={menuItems} />
      <HeroBanner />
      <RebatesSlider collections={collections} />
      <Promotions />
      <PopularProducts />
    </main>
  );
}
