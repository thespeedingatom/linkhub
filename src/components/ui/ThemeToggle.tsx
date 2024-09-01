"use client";
import React from 'react';
import { useTheme } from 'next-themes';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <IoSunnySharp size={20} /> : <IoMoonSharp size={20} />}
    </button>
  );
};

export default ThemeToggle;
