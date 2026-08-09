'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-xl flex flex-col items-center p-8 text-center border border-slate-200 dark:border-slate-800">
        
        {/* Logo / Icon */}
        <div className="w-24 h-24 bg-blue-50 dark:bg-blue-950/60 rounded-3xl flex items-center justify-center text-5xl mb-6 shadow-inner">
          🛒
        </div>

        {/* Title */}
        <h1 className="text-xl font-extrabold text-slate-800 dark:text-slate-100 mb-2">
          ตลาดนัดวิทยาลัย
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          แหล่งรวมซื้อขายสินค้ามือสอง หนังสือ อุปกรณ์การเรียน และของใช้ภายในมหาวิทยาลัย สำหรับชาวเรา
        </p>

        {/* Enter Button */}
        <Link
          href="/home"
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>🚀</span> เข้าสู่ตลาดนัด
        </Link>

      </div>
    </main>
  );
}