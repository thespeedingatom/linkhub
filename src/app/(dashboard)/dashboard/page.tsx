'use client';
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Link from 'next/link';
import { FaLink, FaChartBar, FaPaintBrush } from 'react-icons/fa';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <Typography variant="display-2" className="text-primary dark:text-primary-light font-display mb-8">Welcome to the Dashboard</Typography>
      <Typography variant="body" className="text-text-light dark:text-text-dark mb-12">You are logged in as {session?.user?.email}</Typography>
      <div className="space-y-12">
        <Typography variant="h1" className="text-text-light dark:text-text-dark font-display">Your LinkHub</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-darkgray-800 shadow-lg transition-transform hover:scale-105">
            <FaLink size={64} className="mb-6 text-primary dark:text-primary-light" />
            <Typography variant="h3" className="text-primary dark:text-primary-light mb-4">Links</Typography>
            <Typography variant="body" className="text-text-light dark:text-text-dark mb-6">Manage your links and customize your profile.</Typography>
            <Link href="/dashboard/links" passHref>
              <Button className="w-full bg-secondary hover:bg-secondary-dark text-white transition-colors">Manage Links</Button>
            </Link>
          </Card>
          {/* Repeat similar structure for Analytics and Settings cards */}
        </div>
      </div>
    </div>
  );
}