import React from 'react';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const DashboardPage: React.FC = () => {
  // Mock data for demonstration purposes
  const totalLinks = 15;
  const totalClicks = 1250;
  const recentLinks = [
    { id: 1, title: 'My Portfolio', url: 'https://myportfolio.com', clicks: 350 },
    { id: 2, title: 'Latest Blog Post', url: 'https://myblog.com/latest', clicks: 120 },
    { id: 3, title: 'GitHub Profile', url: 'https://github.com/username', clicks: 80 },
  ];

  return (
    <div className="p-6">
      <Typography variant="h1" className="mb-6">Dashboard</Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <Typography variant="h3" className="mb-2">Total Links</Typography>
          <Typography variant="display-2">{totalLinks}</Typography>
        </Card>
        <Card>
          <Typography variant="h3" className="mb-2">Total Clicks</Typography>
          <Typography variant="display-2">{totalClicks}</Typography>
        </Card>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h2">Recent Links</Typography>
          <Button as={Link} href="/dashboard/links" variant="secondary" size="small">
            View All Links
          </Button>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {recentLinks.map((link) => (
              <li key={link.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <Typography variant="h3" className="text-blue-600 hover:underline">
                      <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                    </Typography>
                    <Typography variant="body" className="text-gray-500">{link.clicks} clicks</Typography>
                  </div>
                  <Typography variant="body" className="mt-2 text-gray-600">{link.url}</Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <Typography variant="h3" className="mb-4">Quick Actions</Typography>
          <div className="space-y-2">
            <Button as={Link} href="/dashboard/links/new" className="w-full">
              Create New Link
            </Button>
            <Button as={Link} href="/dashboard/analytics" variant="secondary" className="w-full">
              View Analytics
            </Button>
          </div>
        </Card>
        <Card>
          <Typography variant="h3" className="mb-4">Account Overview</Typography>
          <Typography variant="body" className="mb-2">Current Plan: Pro</Typography>
          <Typography variant="body" className="mb-4">Next Billing Date: May 1, 2024</Typography>
          <Button as={Link} href="/dashboard/settings" variant="secondary" size="small">
            Manage Account
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
