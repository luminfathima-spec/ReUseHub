import React from 'react';
import Hero from '../components/Hero';
import ConnectionStatus from '../components/ConnectionStatus';
import Categories from '../components/Categories';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';

export const LandingPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Connection Diagnostic Section */}
      <ConnectionStatus variant="banner" />

      {/* Categories Section */}
      <Categories />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Benefits Section */}
      <Benefits />
    </main>
  );
};

export default LandingPage;

