import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import HeroSection  from 'components/hero-banner/page';
import Countdown from 'components/countdown';
import CategorySection from 'components/category-section/page';
import Features from 'components/features/page';
import { Navbar } from 'components/layout/navbar';
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
   
  <>
  <Navbar/>
  <Countdown/>
    <HeroSection/>
    <CategorySection/>

    <Carousel/>
      <ThreeItemGrid />
      <Features/>
    
      <Footer />
    </>
  );
}
