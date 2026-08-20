'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { initialProducts } from '../page';

function DetailContent() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get('id')) || 1;

  const product = initialProducts.find((p) => p.id === id) || initialProducts[0];

  return (
    <div className="max-w-lg mx-auto bg-white/90 dark:bg-slate-900/90 rounded-3xl p-6 border border-pink-100 dark:border-slate-800 shadow-xl space-y-6">
      <div className="relative w-full h-48 bg-gradient-to-tr from-pink-100 to-purple-100 dark:from-slate-800 dark:to-purple-950 rounded-2xl flex items-center justify-center text-7xl shadow-inner">
        {product.image}
        <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {product.tag}
        </span>
      </div>

      <div className="space-y-2">
        <span className="text-2xl md:text-3xl font-black text-pink-600 dark:text-pink-400">
          ฿{product.price.toLocaleString()}
        </span>
        <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">{product.title}</h1>
      </div>

      <div className="bg-pink-50/60 dark:bg-slate-800/60 p-4 rounded-2xl space-y-2 border border-pink-100/50 dark:border-slate-700">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400 font-semibold">ผู้ลงประกาศ:</span>
          <span className="font-bold text-slate-700 dark:text-slate-200">👤 {product.seller}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400 font-semibold">สถานที่นัดรับ:</span>
          <span className="font-bold text-pink-600 dark:text-pink-400">{product.location}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">รายละเอียดสินค้า</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
          {product.description}
        </p>
      </div>

      <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200/50 text-[11px] text-amber-700 dark:text-amber-300 flex items-center gap-2">
        <span>🛡️</span>
        <span><b>ข้อแนะนำ:</b> แนะนำให้นัดรับและตรวจเช็กสินค้าจริงภายในพื้นที่มหาวิทยาลัยก่อนโอนเงินครับ</span>
      </div>

      <a
        href={`${product.contact}?text=${encodeURIComponent(`สนใจ "${product.title}" ในราคา ฿${product.price} ครับ`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 hover:opacity-95 text-white font-extrabold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
      >
        💬 ทักแชทติดต่อผู้ขาย
      </a>
    </div>
  );
}

export default function DetailPage() {
  return (
    <main className="min-h-screen bg-pink-50/30 dark:bg-slate-950 p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-lg mb-4">
        <Link href="/home" className="text-xs font-bold text-pink-600 hover:underline flex items-center gap-1">
          ← ย้อนกลับไปหน้าตลาด
        </Link>
      </div>
      <Suspense fallback={<div className="text-xs text-slate-400 py-8">กำลังโหลดรายละเอียด...</div>}>
        <DetailContent />
      </Suspense>
    </main>
  );
}
