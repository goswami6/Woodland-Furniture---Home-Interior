import React from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import PackageOffers from '../components/PackageOffers';
import WhatWeDo from '../components/WhatWeDo';
import ProjCompletion from '../components/ProjCompletion';
import FlxSection from '../components/FlxSection';
import CustomerSection from '../components/CustomerSection';
import VideoSection from '../components/VideoSection';
import FactorySection from '../components/FactorySection';
import BlogSection from '../components/BlogSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <PackageOffers />
      <WhatWeDo />
      <ProjCompletion />
      <FlxSection />
      <CustomerSection />
      <VideoSection />
      <FactorySection />
      <BlogSection />
    </>
  );
};

export default HomePage;
