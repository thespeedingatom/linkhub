import React from 'react';
import Link from 'next/link';
import Typography from '@/components/ui/Typography';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Typography variant="h3" className="mb-4">LinkHub</Typography>
            <Typography variant="body">One link, endless connections</Typography>
          </div>
          <div>
            <Typography variant="h3" className="mb-4">Quick Links</Typography>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-primary">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary">Pricing</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary">About</Link></li>
            </ul>
          </div>
          <div>
            <Typography variant="h3" className="mb-4">Contact</Typography>
            <Typography variant="body">support@linkhub.com</Typography>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <Typography variant="body">&copy; {new Date().getFullYear()} LinkHub. All rights reserved.</Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;