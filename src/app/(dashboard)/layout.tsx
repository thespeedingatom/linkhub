import React from 'react';
import Link from 'next/link';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import Typography from '@/components/ui/Typography';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <div className="flex flex-grow">
          <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
            <nav className="p-4">
              <Typography variant="h3" className="mb-4">Dashboard</Typography>
              <ul className="space-y-2">
                <li>
                  <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/links" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Links
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/analytics" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/settings" className="block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-grow p-8">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}