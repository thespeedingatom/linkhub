import React from 'react';
import Typography from '@/components/ui/Typography';
import Navbar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

interface UserProfileProps {
  params: {
    username: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ params }) => {
  const { username } = params;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Typography variant="h1" className="mb-6 text-text-light dark:text-text-dark">
          {username}'s Public Profile
        </Typography>
        <Typography variant="body" className="text-text-light dark:text-text-dark">
          This is the public profile page for {username}. It displays their shared links and information.
        </Typography>
        {/* Add components to display user's public links and information */}
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;