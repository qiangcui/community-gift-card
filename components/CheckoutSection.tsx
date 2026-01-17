import React from 'react';
import { CHECKOUT_URL } from '../constants';
import { CreditCard } from 'lucide-react';

const CheckoutSection: React.FC = () => {
  return (
    <section id="checkout" className="py-24 bg-light relative">
       {/* Decorative Shapes */}
       <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-light"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-xl mb-4 text-secondary">
              <CreditCard size={32} />
            </div>
            <h2 className="text-4xl font-bold text-dark mb-4">Buy a Community Gift Card</h2>
            <p className="text-gray-500 text-lg">
              Give the perfect gift. Choose an amount, select a design, and send it instantly via email.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* 
              GiftUp handles its own resizing usually, but a min-height ensures 
              it doesn't collapse during load.
            */}
            <div className="w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[16/9] min-h-[600px]">
              <iframe
                src={CHECKOUT_URL}
                frameBorder="0"
                width="100%"
                height="100%"
                title="Buy a Gift Card"
                className="w-full h-full"
                allow="payment"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;