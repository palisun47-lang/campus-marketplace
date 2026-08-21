'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [isDark, setIsDark] = useState(false);

  // เช็กสภาพโหมดปัจจุบันเมื่อโหลดหน้าเว็บ
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  // ฟังก์ชันสลับ Light / Dark Mode
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <main className="min-h-screen bg-pink-50/30 dark:bg-slate-950 p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300">
      
      {/* 🌙/☀️ ปุ่มเปลี่ยน Dark/Light Mode เด่นๆ มุมขวาบน */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-800/90 border-2 border-pink-200 dark:border-slate-700 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all text-xs font-bold text-slate-700 dark:text-slate-200 cursor-pointer"
      >
        <span>{isDark ? '🌙 โหมดมืด' : '☀️ โหมดสว่าง'}</span>
      </button>

      <div className="max-w-md w-full space-y-8 text-center">
        
        {/* โลโก้ & หัวข้อหลัก */}
        <div className="space-y-4">
          <div className="inline-block p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full shadow-md border border-pink-100 dark:border-slate-800 animate-bounce">
            <span className="text-5xl">🏫🛍️</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
              ตลาดยกวิทยาเขต 🛍️
            </h1>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
              ศูนย์รวมซื้อ-ขาย แลกเปลี่ยนของใช้นักศึกษา นัดรับง่าย ปลอดภัย
            </p>
          </div>
        </div>

        {/* การ์ดทางลัดหมวดหมู่อยอดฮิต */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-5 rounded-3xl border border-pink-100 dark:border-slate-800 shadow-sm space-y-3">
          <h2 className="text-xs font-bold text-slate-600 dark:text-slate-300 text-left px-1">
            หมวดหมู่อยอดฮิต:
          </h2>
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <Link
              href="/home?category=books"
              className="p-3 bg-pink-50/60 dark:bg-slate-800/60 hover:bg-pink-100/80 dark:hover:bg-slate-800 rounded-2xl border border-pink-100/50 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all flex items-center justify-center gap-1.5"
            >
              📚 หนังสือเรียน
            </Link>
            <Link
              href="/home?category=tech"
              className="p-3 bg-pink-50/60 dark:bg-slate-800/60 hover:bg-pink-100/80 dark:hover:bg-slate-800 rounded-2xl border border-pink-100/50 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all flex items-center justify-center gap-1.5"
            >
              💻 ไอที & อุปกรณ์
            </Link>
            <Link
              href="/home?category=fashion"
              className="p-3 bg-pink-50/60 dark:bg-slate-800/60 hover:bg-pink-100/80 dark:hover:bg-slate-800 rounded-2xl border border-pink-100/50 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all flex items-center justify-center gap-1.5"
            >
              👗 แฟชั่น นศ.
            </Link>
            <Link
              href="/home?category=dorm"
              className="p-3 bg-pink-50/60 dark:bg-slate-800/60 hover:bg-pink-100/80 dark:hover:bg-slate-800 rounded-2xl border border-pink-100/50 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all flex items-center justify-center gap-1.5"
            >
              🛵 ของใช้หอพัก
            </Link>
          </div>
        </div>

        {/* ปุ่มไปหน้าต่าง ๆ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <Link
            href="/home"
            className="py-3.5 px-6 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white font-extrabold text-sm rounded-2xl shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            เข้าสู่หน้าตลาด 🛒
          </Link>
          <Link
            href="/product"
            className="py-3.5 px-6 bg-white dark:bg-slate-900 border-2 border-pink-300 dark:border-slate-700 text-pink-600 dark:text-pink-400 font-extrabold text-sm rounded-2xl hover:bg-pink-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
          >
            ลงประกาศขาย 🏷️
          </Link>
        </div>

      </div>
    </main>
  );
}
