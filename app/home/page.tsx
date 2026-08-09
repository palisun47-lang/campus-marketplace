'use client';

export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from '../../ThemeToggle';

export default function ProductDetailPage() {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('currentProduct');
    if (saved) {
      setProduct(JSON.parse(saved));
    }
  }, []);

  if (!product) {
    return (
      <main className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center">
        <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-col items-center gap-3">
          <p>กำลังโหลดข้อมูลสินค้า...</p>
          <Link href="/home" className="text-blue-600 dark:text-blue-400 underline">
            ← กลับหน้าหลัก
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col items-center">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 min-h-screen shadow-xl flex flex-col pb-20">
        
        {/* Header */}
        <header className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <Link href="/home" className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium">
              ← กลับหน้าหลัก
            </Link>
          </div>
          <ThemeToggle />
        </header>

        {/* Detail Content */}
        <div className="p-5 flex flex-col gap-5 flex-1">
          <div className="flex flex-col items-center text-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/60">
            <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center text-4xl mb-3 border border-slate-200 dark:border-slate-700">
              {product.icon}
            </div>
            <span className="px-2.5 py-1 text-[11px] font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-full mb-2">
              {product.category}
            </span>
            <h1 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">
              {product.title}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              ผู้ขาย: <span className="font-semibold text-slate-700 dark:text-slate-300">{product.seller}</span>
            </p>
            <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400 mt-3">
              ฿{product.price}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              รายละเอียดสินค้า
            </h2>
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {product.description}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="p-3.5 bg-blue-50/50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-900/40 flex items-start gap-3">
              <span className="text-base">📍</span>
              <div>
                <p className="text-[11px] font-bold text-blue-900 dark:text-blue-300">สถานที่นัดรับ</p>
                <p className="text-xs text-blue-700 dark:text-blue-400 mt-0.5">{product.location}</p>
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50/50 dark:bg-emerald-950/30 rounded-xl border border-emerald-100 dark:border-emerald-900/40 flex items-start gap-3">
              <span className="text-base">📞</span>
              <div>
                <p className="text-[11px] font-bold text-emerald-900 dark:text-emerald-300">ช่องทางติดต่อผู้ขาย</p>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">{product.contact}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky bottom-0">
          <button
            onClick={() => alert('ส่งข้อความหาผู้ขายเรียบร้อยแล้ว!')}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
          >
            💬 สนใจติดต่อผู้ขาย
          </button>
        </div>

      </div>
    </main>
  );
}