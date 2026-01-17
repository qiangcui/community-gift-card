import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import MerchantsSection from '../components/MerchantsSection';

const HomePage: React.FC = () => {
  const location = useLocation();

  // Handle scrolling to sections if navigated from another page
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Small timeout to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear state to prevent scrolling on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <MerchantsSection />
    </>
  );
};

export default HomePage;