import React from 'react';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target: string) => {
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
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-700 pb-12">
          
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Community<span className="text-primary">Card</span></h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Supporting local businesses, one gift card at a time. Join us in strengthening our community economy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:ml-auto">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors text-left">About the Program</button></li>
              <li><button onClick={() => handleNavClick('merchants')} className="hover:text-white transition-colors text-left">Participating Merchants</button></li>
              <li><button onClick={() => handleNavClick('checkout')} className="hover:text-white transition-colors text-left">Buy Gift Card</button></li>
            </ul>
          </div>

          {/* Legal/Contact */}
          <div className="col-span-1 md:ml-auto">
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Community Gift Card Program. All rights reserved.</p>
            <span className="hidden md:inline text-gray-700">|</span>
            <p>
              Supported By{' '}
              <a 
                href="https://tekmaxllc.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
              >
                TekMax LLC
              </a>
            </p>
          </div>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={14} className="text-red-500 fill-current" /> for our locals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;