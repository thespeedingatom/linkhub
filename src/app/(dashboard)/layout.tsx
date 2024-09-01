import Navbar from '@/components/ui/NavBar';
import SideNavbar from '@/components/ui/SideNavbar';
import Footer from '@/components/ui/Footer';
import { ReactNode } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-grow min-h-screen bg-background-light dark:bg-background-dark">
        <SideNavbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}