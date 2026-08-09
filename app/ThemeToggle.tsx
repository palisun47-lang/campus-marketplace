'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 text-xs font-semibold border border-slate-300 dark:border-slate-700 shadow-sm active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}