import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-32 pb-20 bg-light min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-dark mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-dark">Get in Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions about the Community Gift Card program? We're here to help! Reach out to us using any of the methods below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-dark">Email</h3>
                  <p className="text-gray-500">support@communitycard.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-dark">Phone</h3>
                  <p className="text-gray-500">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-dark">Office</h3>
                  <p className="text-gray-500">123 Main Street, Suite 100<br/>Anytown, USA 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;