import React from 'react';
import { Merchant } from '../types';
import { MapPin, Phone } from 'lucide-react';

interface MerchantCardProps {
  merchant: Merchant;
}

const MerchantCard: React.FC<MerchantCardProps> = ({ merchant }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm z-10 uppercase tracking-wide">
          {merchant.category}
        </div>
        <img 
          src={merchant.imageUrl} 
          alt={merchant.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
          {merchant.name}
        </h3>
        <p className="text-gray-500 text-base leading-relaxed mb-6 flex-grow">
          {merchant.description}
        </p>

        <div className="space-y-3 pt-4 border-t border-gray-100 mt-auto">
          {merchant.address && (
            <div className="flex items-start gap-3 text-base text-gray-600">
              <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span>{merchant.address}</span>
            </div>
          )}
          
          {merchant.phone && (
            <div className="flex items-center gap-3 text-base text-gray-600">
              <Phone size={18} className="text-primary flex-shrink-0" />
              <a href={`tel:${merchant.phone}`} className="hover:text-primary transition-colors">
                {merchant.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MerchantCard;