import React from 'react';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import Navbar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Typography variant="display-1" className="text-primary dark:text-primary-light text-center mb-12">
          About LinkHub
        </Typography>
        
        <div className="grid gap-8">
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <Typography variant="h2" className="text-primary dark:text-primary-light mb-4">Our Mission</Typography>
            <Typography variant="body" className="text-gray-700 dark:text-gray-300">
              LinkHub is dedicated to revolutionizing the way individuals and businesses manage and share their online presence. We provide a comprehensive platform for creating, organizing, and analyzing custom short links, empowering our users to streamline their digital communication and maximize their online impact.
            </Typography>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <Typography variant="h2" className="text-primary dark:text-primary-light mb-4">What We Offer</Typography>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <Typography variant="body">
                  Custom short link creation with branded domains
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  Advanced analytics to track link performance and audience engagement
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  Team collaboration features for seamless workflow integration
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  API access for developers to integrate LinkHub into their applications
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  Enterprise-grade security and compliance measures
                </Typography>
              </li>
            </ul>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <Typography variant="h2" className="text-primary dark:text-primary-light mb-4">Our Commitment</Typography>
            <Typography variant="body" className="text-gray-700 dark:text-gray-300">
              At LinkHub, we are committed to continuous innovation and improvement. We strive to provide a user-friendly, reliable, and secure platform that meets the evolving needs of our diverse user base. Our team is dedicated to delivering exceptional customer support and staying at the forefront of link management technology.
            </Typography>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
