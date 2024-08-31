import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/ui/NavBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <Typography variant="display-1" className="text-primary dark:text-primary-light mb-6">
            Streamline Your Online Presence
          </Typography>
          <Typography variant="body" className="mb-8 text-gray-700 dark:text-gray-300">
            Join thousands of professionals using LinkHub to consolidate their digital footprint. Create a single, powerful link to showcase your portfolio, services, and content from various platforms.
          </Typography>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="yourname"
                className="w-full px-4 py-2 pl-24 rounded-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 dark:text-gray-400">
                linkhub.com/
              </span>
            </div>
            <Button as={Link} href="/register" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white">
              Create Your LinkHub
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/linkhub-preview.png"
            alt="LinkHub Preview"
            width={400}
            height={600}
            className="rounded-lg shadow-xl"
          />
        </div>
      </main>
    </div>
  );
}
