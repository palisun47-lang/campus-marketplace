'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-sky-50 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md md:max-w-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col items-center p-8 md:p-12 text-center border border-pink-100 dark:border-purple-900/50">
        
        {/* Cute Logo with bouncing effect */}
        <div className="w-28 h-28 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center text-6xl mb-6 shadow-lg shadow-pink-500/30 animate-bounce">
          🛍️✨
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 mb-3">
          ตลาดนัดวิทยาลัยสุดน่ารัก
        </h1>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-sm">
          แหล่งรวมใจสายช้อป นักศึกษาอยากขาย รุ่นพี่อยากส่งต่อ ช้อปง่าย ปลอดภัย ฟีลกู้ด! 💖
        </p>

        {/* Enter Button */}
        <Link
          href="/home"
          className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-sm font-bold rounded-2xl shadow-xl shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>🚀✨</span> เริ่มต้นช้อปสินค้ากันเลย
        </Link>

      </div>
    </main>
  );
}