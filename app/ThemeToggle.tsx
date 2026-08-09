'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="px-3 py-1.5 text-xs rounded-full border border-slate-300 bg-slate-100 text-slate-800">
        Loading...
      </button>
    );
  }

  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1.5 text-xs rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
    >
      {isDarkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}