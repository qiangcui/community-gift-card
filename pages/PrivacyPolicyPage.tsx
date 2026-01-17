import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-32 pb-20 bg-light min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-16 border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">Privacy Policy</h1>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-4 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-6">At Community Gift Card, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website.</p>
            
            <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Information We Collect</h2>
            <p className="mb-4">We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.</p>
            
            <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Use of Your Information</h2>
            <p className="mb-4">We may use information collected about you via the Site to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Process your gift card purchases and transactions.</li>
              <li>Send you an email confirmation of your order.</li>
              <li>Respond to customer service requests.</li>
              <li>Send you a newsletter (if opted in).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Third-Party Service Providers</h2>
            <p className="mb-4">We may share information with third parties that perform services for us or on our behalf, including payment processing (GiftUp), data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
            
            <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">If you have questions or comments about this policy, you may email us at privacy@communitycard.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;