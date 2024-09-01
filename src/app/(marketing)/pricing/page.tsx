import React from 'react';
import Typography from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
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
      title: 'Basic',
      profile: 'For Individuals',
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
      title: 'Most Popular',
      profile: 'For Creators',
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
      title: 'Advanced',
      profile: 'For Teams',
    },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Typography variant="h1" className="text-center mb-12 text-primary dark:text-primary-light">
          Choose the Perfect Plan for Your Needs
        </Typography>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white dark:bg-darkgray-700 rounded-lg shadow-lg p-8 flex flex-col ${
                tier.highlighted ? 'ring-2 ring-primary dark:ring-primary-light' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary dark:bg-primary-light text-white dark:text-darkgray-900 px-4 py-1 rounded-full text-sm font-bold">
                  {tier.title}
                </div>
              )}
              <Typography variant="h2" className="text-center mb-2 text-primary dark:text-primary-light">
                {tier.name}
              </Typography>
              <Typography variant="body" className="text-center mb-4 text-gray-600 dark:text-gray-400">
                {tier.profile}
              </Typography>
              <Typography variant="h1" className="text-center mb-6 text-text-light dark:text-text-dark">
                {tier.price}
                <span className="text-base font-normal">/month</span>
              </Typography>
              <ul className="mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500 dark:text-green-400"
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
                    <Typography variant="body" className="text-text-light dark:text-text-dark">{feature}</Typography>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  tier.highlighted
                    ? 'bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white dark:text-darkgray-900'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-darkgray-600 dark:hover:bg-darkgray-500 dark:text-text-dark'
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
