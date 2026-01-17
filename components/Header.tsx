import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    
    if (target === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (target === 'merchants') {
      if (location.pathname === '/') {
        document.getElementById('merchants')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: 'merchants' } });
      }
    } else if (target === 'checkout') {
      navigate('/checkout');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="bg-primary text-white p-2 rounded-lg">
            <ShoppingBag size={24} />
          </div>
          <span className={`text-xl font-bold tracking-tight text-dark`}>
            Community<span className="text-primary">Card</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavClick('merchants')} className="text-dark hover:text-primary font-medium transition-colors">
            Participating Merchants
          </button>
          <button 
            onClick={() => handleNavClick('checkout')}
            className="bg-primary hover:bg-teal-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Buy a Gift Card
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-6 flex flex-col gap-4 animate-fade-in-down">
          <button 
            onClick={() => handleNavClick('merchants')} 
            className="text-lg font-medium text-dark py-2 border-b border-gray-100 text-left"
          >
            Participating Merchants
          </button>
          <button 
            onClick={() => handleNavClick('checkout')}
            className="bg-primary text-white text-lg font-semibold py-3 rounded-lg text-center mt-2 shadow-md"
          >
            Buy a Gift Card
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;