"use client";
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background-light dark:bg-background-dark shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="font-bold text-xl text-primary">
              LinkHub
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/features" className="text-text-light dark:text-text-dark hover:text-primary">
                Features
              </Link>
              <Link href="/pricing" className="text-text-light dark:text-text-dark hover:text-primary">
                Pricing
              </Link>
              <Link href="/about" className="text-text-light dark:text-text-dark hover:text-primary">
                About
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {session ? (
              <>
                <Button as={Link} href="/dashboard" variant="secondary" size="sm">
                  Dashboard
                </Button>
                <Button onClick={() => signOut()} size="sm">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button as={Link} href="/login" variant="secondary" size="sm">
                  Login
                </Button>
                <Button as={Link} href="/register" size="sm">
                  Sign Up
                </Button>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/features" className="block px-3 py-2 text-text-light dark:text-text-dark hover:text-primary">
              Features
            </Link>
            <Link href="/pricing" className="block px-3 py-2 text-text-light dark:text-text-dark hover:text-primary">
              Pricing
            </Link>
            <Link href="/about" className="block px-3 py-2 text-text-light dark:text-text-dark hover:text-primary">
              About
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-text-light dark:border-text-dark">
            <div className="px-2 space-y-1">
              {session ? (
                <>
                  <Button as={Link} href="/dashboard" variant="secondary" size="sm" className="w-full">
                    Dashboard
                  </Button>
                  <Button onClick={() => signOut()} size="sm" className="w-full">
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button as={Link} href="/login" variant="secondary" size="sm" className="w-full">
                    Login
                  </Button>
                  <Button as={Link} href="/register" size="sm" className="w-full">
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;