import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;