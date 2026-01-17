import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const scrollToMerchants = () => {
    document.getElementById('merchants')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-light">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8 animate-fade-in-up border border-gray-100">
            <span className="bg-secondary/20 text-secondary p-1 rounded-full">
              <MapPin size={14} />
            </span>
            <span className="text-sm font-semibold text-gray-600 tracking-wide uppercase">Support Local Business</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-dark leading-tight mb-6 tracking-tight">
            Support Local. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
              Give a Community Gift Card.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            One card. Endless local possibilities. Discover the best shops, eats, and services in your neighborhood.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/checkout')}
              className="group bg-primary hover:bg-teal-700 text-white text-lg px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Buy a Gift Card
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              onClick={scrollToMerchants}
              className="bg-white hover:bg-gray-50 text-dark border border-gray-200 text-lg px-8 py-4 rounded-full font-bold transition-colors w-full sm:w-auto"
            >
              View Merchants
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-white fill-current">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;