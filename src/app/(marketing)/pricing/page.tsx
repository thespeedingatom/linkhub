import React from 'react';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Navbar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

const PricingPage: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      features: [
        'Up to 5 links',
        'Basic analytics',
        'Standard themes',
        'Mobile-responsive profiles',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$9.99',
      features: [
        'Unlimited links',
        'Advanced analytics',
        'Custom themes',
        'Priority support',
        'Custom domains',
      ],
      cta: 'Upgrade to Pro',
      highlighted: true,
    },
    {
      name: 'Business',
      price: '$29.99',
      features: [
        'All Pro features',
        'Team collaboration',
        'API access',
        'White-labeling',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Typography variant="h1" className="text-center mb-12">
          Choose the Perfect Plan for Your Needs
        </Typography>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col ${
                tier.highlighted ? 'ring-2 ring-primary' : ''
              }`}
            >
              <Typography variant="h2" className="text-center mb-4">
                {tier.name}
              </Typography>
              <Typography variant="h1" className="text-center mb-6">
                {tier.price}
                <span className="text-base font-normal">/month</span>
              </Typography>
              <ul className="mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <Typography variant="body">{feature}</Typography>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  tier.highlighted
                    ? 'bg-primary hover:bg-primary-dark text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
