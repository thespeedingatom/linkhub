import React from 'react';
import Link from 'next/link';
import Typography from '@/components/ui/Typography';
import { FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaStar } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Typography variant="h3" className="font-bold text-text-light dark:text-text-dark mb-2">LinkHub</Typography>
            <Typography variant="body" className="text-text-light dark:text-text-dark">One link, endless connections</Typography>
          </div>
          <div>
            <Typography variant="h3" className="font-bold text-text-light dark:text-text-dark mb-4">Quick Links</Typography>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-text-light dark:text-text-dark hover:text-primary">Features</Link></li>
              <li><Link href="/pricing" className="text-text-light dark:text-text-dark hover:text-primary">Pricing</Link></li>
              <li><Link href="/about" className="text-text-light dark:text-text-dark hover:text-primary">About</Link></li>
            </ul>
          </div>
          <div>
            <Typography variant="h3" className="font-bold text-text-light dark:text-text-dark mb-4">Contact</Typography>
            <Typography variant="body" className="text-text-light dark:text-text-dark">support@linkhub.com</Typography>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <Typography variant="body" className="text-text-light dark:text-text-dark">
              © {new Date().getFullYear()} LinkHub. All rights reserved.
            </Typography>
            <div className="flex space-x-4">
              <FaTwitter size={24} className="text-text-light dark:text-text-dark hover:text-primary cursor-pointer" />
              <FaInstagram size={24} className="text-text-light dark:text-text-dark hover:text-primary cursor-pointer" />
              <FaYoutube size={24} className="text-text-light dark:text-text-dark hover:text-primary cursor-pointer" />
              <FaTiktok size={24} className="text-text-light dark:text-text-dark hover:text-primary cursor-pointer" />
              <FaStar size={24} className="text-text-light dark:text-text-dark hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;