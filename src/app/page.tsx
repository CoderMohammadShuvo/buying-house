'use client';

import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';
import BannerHeader from '@/components/BannerHeader';
import Collection from '@/components/Collection';
import MoodiWeek from '@/components/MoodiWeek';
import Sustainability from '@/components/Sustainability';

export default function Home() {
  return (
    <>
      <BannerHeader />
      <NavBar />
      <HeroSection />
      <BestSellers />
      <Collection />
      <MoodiWeek />
      <Sustainability />
    </>
  );
}
