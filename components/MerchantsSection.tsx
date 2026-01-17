import React from 'react';
import { MERCHANTS } from '../constants';
import MerchantCard from './MerchantCard';
import { Store } from 'lucide-react';

const MerchantsSection: React.FC = () => {
  return (
    <section id="merchants" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-4 text-primary">
            <Store size={32} />
          </div>
          <h2 className="text-4xl font-bold text-dark mb-4">Participating Merchants</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Redeem your community gift card at any of these wonderful local businesses. New merchants are added weekly!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {MERCHANTS.map((merchant) => (
            <MerchantCard key={merchant.id} merchant={merchant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchantsSection;