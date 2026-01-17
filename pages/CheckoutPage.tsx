import React from 'react';
import { CHECKOUT_URL } from '../constants';

const CheckoutPage: React.FC = () => {
  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // pt-20 accounts for the fixed header height. 
    // We use h-full to fill the flex container from App.tsx.
    <div className="pt-20 h-full w-full bg-white flex flex-col">
      <div className="flex-grow w-full h-full relative">
        <iframe
          src={CHECKOUT_URL}
          frameBorder="0"
          width="100%"
          height="100%"
          title="Buy a Gift Card"
          className="absolute inset-0 w-full h-full"
          allow="payment; fullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default CheckoutPage;