import React from 'react';

const TermsOfServicePage: React.FC = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-32 pb-20 bg-light min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-16 border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">Terms of Service</h1>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-6">Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Community Gift Card website operated by us.</p>
            
            <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
            
            <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">2. Purchases</h2>
            <p className="mb-4">If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>

            <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">3. Gift Cards</h2>
            <p className="mb-4">Gift cards issued by us are subject to the following terms:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Cards are redeemable only at participating merchants listed on our website.</li>
              <li>Cards are not redeemable for cash unless required by law.</li>
              <li>We are not responsible for lost or stolen cards.</li>
              <li>Cards must be treated like cash.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">4. Changes</h2>
            <p className="mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
            
            <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">5. Governing Law</h2>
            <p className="mb-4">These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;