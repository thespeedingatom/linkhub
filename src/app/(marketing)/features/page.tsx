import React from 'react';
import Typography from '@/components/ui/Typography';
import Image from 'next/image';
import Navbar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import Head from 'next/head';

const features = [
  {
    title: 'Customizable Profiles',
    description: 'Create a unique digital presence with our fully customizable user profiles. Choose from a variety of themes, colors, and styles to match your brand.',
    icon: '/icons/customize.svg',
  },
  {
    title: 'Advanced Link Management',
    description: 'Easily add, edit, delete, and reorder your links. Our intuitive interface makes managing your digital presence a breeze.',
    icon: '/icons/link-management.svg',
  },
  {
    title: 'Powerful Analytics',
    description: 'Gain valuable insights with our comprehensive analytics. Track link clicks, monitor performance, and optimize your online strategy.',
    icon: '/icons/analytics.svg',
  },
  {
    title: 'Responsive Design',
    description: 'Your LinkHub profile looks great on any device. Our mobile-first approach ensures a seamless experience for your audience.',
    icon: '/icons/responsive.svg',
  },
  {
    title: 'Enterprise Solutions',
    description: 'Scale your digital presence with our enterprise-grade features. Enjoy team collaboration, API access, and white-labeling options.',
    icon: '/icons/enterprise.svg',
  },
  {
    title: 'AI-Powered Optimization',
    description: 'Leverage the power of AI to optimize your link performance and get personalized recommendations for improvement.',
    icon: '/icons/ai.svg',
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>LinkHub Features - Amplify Your Online Presence</title>
        <meta name="description" content="Discover LinkHub's powerful features designed to streamline your digital presence and maximize your online impact. From customizable profiles to AI-powered optimization." />
        <meta name="keywords" content="LinkHub, features, digital presence, link management, analytics, responsive design, enterprise solutions, AI optimization" />
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Typography variant="h1" className="text-center mb-12">
            Powerful Features to Amplify Your Online Presence
          </Typography>
          <Typography variant="body" className="text-center mb-16 max-w-3xl mx-auto">
            LinkHub offers a comprehensive suite of tools designed to streamline your digital presence and maximize your online impact. Discover how our features can help you connect with your audience more effectively.
          </Typography>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <Image src={feature.icon} alt={feature.title} width={64} height={64} className="mb-4" priority={index < 3} />
                <Typography variant="h3" className="mb-2">{feature.title}</Typography>
                <Typography variant="body">{feature.description}</Typography>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FeaturesPage;
