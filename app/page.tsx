'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-sky-50 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-900 text-slate-800 dark:text-slate-100 flex flex-col items-center justify-center p-4">
      {/* Container Card */}
      <div className="w-full max-w-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-pink-100 dark:border-purple-900/30 flex flex-col items-center text-center space-y-6">
        
        {/* Top Header & Dark Mode Toggle */}
        <div className="w-full flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
          <span className="text-xs font-semibold text-pink-500 dark:text-pink-400 tracking-wider uppercase">
            Campus Marketplace
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">โหมด:</span>
            <ThemeToggle />
          </div>
        </div>

        {/* Cute Icon Logo */}
        <div className="w-20 h-20 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-lg shadow-pink-500/30 animate-bounce">
          <span className="text-3xl">🛍️✨</span>
        </div>

        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">
            ตลาดยกวิทยเขตสุดน่ารัก
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            แหล่งรวมใจสายช็อป นักศึกษาขายง่าย รุ่นพี่อยากส่งต่อ ช็อปง่าย ปลอดภัย พิกัดโดนใจ! 💖
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3 pt-2">
          <Link
            href="/home"
            className="w-full flex items-center justify-center py-3.5 px-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/25 transition-all duration-200 active:scale-95"
          >
            เข้าสู่หน้าหลัก 🚀
          </Link>
          <Link
            href="/product"
            className="w-full flex items-center justify-center py-3.5 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-2xl transition-all duration-200 active:scale-95"
          >
            ดูสินค้าทั้งหมด 📦
          </Link>
        </div>

      </div>
    </main>
  );
}
