import Typography from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import { FaPaintBrush, FaLink, FaChartBar } from 'react-icons/fa';

export default function Home() {
  const features = [
    {
      title: 'Customizable Profiles',
      description: 'Create a unique digital presence with our fully customizable user profiles.',
      icon: FaPaintBrush,
      bgColor: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
    },
    {
      title: 'Advanced Link Management',
      description: 'Easily add, edit, delete, and reorder your links with our intuitive interface.',
      icon: FaLink,
      bgColor: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500',
    },
    {
      title: 'Powerful Analytics',
      description: 'Gain valuable insights with our comprehensive analytics and tracking tools.',
      icon: FaChartBar,
      bgColor: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Typography variant="display-1" className="text-primary dark:text-primary-light font-display mb-6">
              Streamline Your Online Presence
            </Typography>
            <Typography variant="body" className="text-text-light dark:text-text-dark mb-8">
              LinkHub is your all-in-one solution for managing and sharing your digital identity. Create custom short links, design beautiful profile pages, and gain valuable insights with our powerful analytics.
            </Typography>
            <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-white transition-colors">Get Started</Button>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/hero-image.png"
              alt="LinkHub Dashboard Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <Typography variant="h2" className="text-center mb-12 text-primary dark:text-primary-light font-display">
          Key Features
        </Typography>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {features.map((feature, index) => (
              <Link href="/features" key={index} className="block min-w-[300px]">
                <div className={`rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 ${feature.bgColor}`}>
                  <feature.icon size={64} className="mb-4 text-white" />
                  <Typography variant="h3" className="mb-2 text-white">{feature.title}</Typography>
                  <Typography variant="body" className="text-white">{feature.description}</Typography>
                </div>
              </Link>
            ))}
            {/* Repeat features for continuous scroll effect */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}