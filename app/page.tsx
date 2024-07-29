import Header from '@/components/header/Header';
import Navigation from '@/components/blocks/navigation/Navigation';
import HeroBanner from '@/components/blocks/hero-banner/HeroBanner';
import RebatesSlider from '@/components/blocks/rebates-slider/RebatesSlider';
import Promotions from '@/components/blocks/promotions/Promotions';
import PopularProducts from '@/components/blocks/popular-products/PopularProducts';

export default function Home() {
  return (
      <main className="flex min-h-[100vh] flex-col relative">
        <Header />
        <Navigation />
        <HeroBanner />
        <RebatesSlider />
        <Promotions />
        <PopularProducts />
      </main>
  );
}
