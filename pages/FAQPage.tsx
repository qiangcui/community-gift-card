import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { question: "Where can I use my Community Gift Card?", answer: "You can use your card at any participating merchant listed on our website. We are constantly adding new businesses to the program!" },
  { question: "Does the gift card expire?", answer: "No, the funds on your Community Gift Card do not expire." },
  { question: "How do I check my balance?", answer: "You can check your balance by scanning the QR code on your digital gift card or by visiting the link provided in your gift email." },
  { question: "Can I use the card at multiple locations?", answer: "Yes! You don't have to spend the full value at one place. You can split the balance across multiple transactions and different merchants." },
  { question: "Is it a physical or digital card?", answer: "Currently, we offer digital gift cards that are sent immediately via email. You can print them out or present them on your phone." },
  { question: "Can I reload the card?", answer: "At this time, cards cannot be reloaded. However, you can always purchase a new card to support your local businesses." }
];

const FAQPage: React.FC = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20 bg-light min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-dark mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-center text-gray-500 mb-12 text-lg">Everything you need to know about the Community Gift Card.</p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-dark text-lg pr-4">{faq.question}</span>
                <div className={`p-1 rounded-full ${openIndex === index ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              <div 
                className={`px-6 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
              >
                <div className="pt-2 border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;