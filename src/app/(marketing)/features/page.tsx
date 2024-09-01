import React from 'react';
import Typography from '@/components/ui/Typography';
import Navbar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import { FaPaintBrush, FaLink, FaChartBar, FaMobileAlt, FaBuilding, FaRobot } from 'react-icons/fa';

const highlightWord = (text: string, words: string[]): React.ReactNode[] => {
  const parts = text.split(new RegExp(`(${words.join('|')})`, 'gi'));
  return parts.map((part, index) => 
    words.includes(part.toLowerCase()) ? 
      <span key={index} className="text-secondary dark:text-secondary-light font-semibold">{part}</span> : part
  );
};

const features = [
  {
    title: 'Customizable Profiles',
    description: 'Create a unique digital presence with our fully customizable user profiles. Choose from a variety of themes, colors, and styles to match your brand.',
    icon: FaPaintBrush,
  },
  {
    title: 'Advanced Link Management',
    description: 'Easily add, edit, delete, and reorder your links. Our intuitive interface makes managing your digital presence a breeze.',
    icon: FaLink,
  },
  {
    title: 'Powerful Analytics',
    description: 'Gain valuable insights with our comprehensive analytics. Track link clicks, monitor performance, and optimize your online strategy.',
    icon: FaChartBar,
  },
  {
    title: 'Responsive Design',
    description: 'Your LinkHub profile looks great on any device. Our mobile-first approach ensures a seamless experience for your audience.',
    icon: FaMobileAlt,
  },
  {
    title: 'Enterprise Solutions',
    description: 'Scale your digital presence with our enterprise-grade features. Enjoy team collaboration, API access, and white-labeling options.',
    icon: FaBuilding,
  },
  {
    title: 'AI-Powered Optimization',
    description: 'Leverage the power of AI to optimize your link performance and get personalized recommendations for improvement.',
    icon: FaRobot,
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Typography variant="display-1" className="text-center mb-8 text-primary dark:text-primary-light font-display">
          Powerful Features to Amplify Your Online Presence
        </Typography>
        <Typography variant="body" className="text-center mb-20 max-w-3xl mx-auto text-text-light dark:text-text-dark">
          LinkHub offers a comprehensive suite of tools designed to streamline your digital presence and maximize your online impact. Discover how our features can help you connect with your audience more effectively.
        </Typography>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                <th className="p-8 text-left text-xl font-semibold">Feature</th>
                <th className="p-8 text-left text-xl font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="group transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-darkgray-700">
                  <td className="p-8 border-b border-gray-200 dark:border-darkgray-600">
                    <div className="flex items-center space-x-6">
                      <div className="p-4 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-200">
                        <feature.icon size={32} className="text-primary dark:text-primary-light" />
                      </div>
                      <Typography variant="h3" className="text-primary dark:text-primary-light font-bold">{feature.title}</Typography>
                    </div>
                  </td>
                  <td className="p-8 border-b border-gray-200 dark:border-darkgray-600">
                    <Typography variant="body" className="text-text-light dark:text-text-dark leading-relaxed">
                      {highlightWord(feature.description, ['customizable', 'analytics', 'responsive', 'enterprise', 'AI-powered'])}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
