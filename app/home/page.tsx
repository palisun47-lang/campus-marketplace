'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { initialProducts } from '../page';

function DetailContent() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get('id')) || 1;
  const product = initialProducts.find((p) => p.id === id) || initialProducts[0];

  // 1. สุ่มจำนวนคนกำลังดูสินค้าอยู่ตอนนี้
  const [viewers, setViewers] = useState(3);
  useEffect(() => {
    const randomViewers = Math.floor(Math.random() * 6) + 2;
    setViewers(randomViewers);
  }, [id]);

  // 2. ตัวเลือกข้อความทักแชทด่วน
  const [selectedMsg, setSelectedMsg] = useState(
    `สวัสดีครับ สนใจ "${product.title}" นัดรับ ${product.location} สะดวกไหมครับ?`
  );

  return (
    <div className="max-w-lg mx-auto bg-white/90 dark:bg-slate-900/90 rounded-3xl p-6 border border-pink-100 dark:border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
      
      {/* 🔥 Live Viewer Badge */}
      <div className="flex items-center justify-between text-xs bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-300 px-3.5 py-2 rounded-2xl border border-rose-100 dark:border-rose-900/40">
        <span className="flex items-center gap-1.5 font-bold animate-pulse">
          <span className="w-2 h-2 rounded-full bg-rose-500 inline-block animate-ping" />
          🔥 มีคนกำลังดูสินค้านี้อยู่ {viewers} คน
        </span>
        <span className="text-[10px] text-rose-400">อัปเดตเรียลไทม์</span>
      </div>

      {/* รูปสินค้า */}
      <div className="relative w-full h-48 bg-gradient-to-tr from-pink-100 via-purple-50 to-pink-50 dark:from-slate-800 dark:to-purple-950 rounded-2xl flex items-center justify-center text-7xl shadow-inner">
        {product.image}
        <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {product.tag}
        </span>
      </div>

      {/* ชื่อและราคา */}
      <div className="space-y-1">
        <div className="flex justify-between items-baseline">
          <span className="text-2xl md:text-3xl font-black text-pink-600 dark:text-pink-400">
            ฿{product.price.toLocaleString()}
          </span>
          <span className="text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 font-bold px-2.5 py-1 rounded-full">
            ⚡ นัดรับได้ทันที
          </span>
        </div>
        <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">{product.title}</h1>
      </div>

      {/* ข้อมูลผู้ขาย + ติ๊กถูกยืนยันตัวตน */}
      <div className="bg-pink-50/60 dark:bg-slate-800/60 p-4 rounded-2xl space-y-2 border border-pink-100/50 dark:border-slate-700">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400 font-semibold">ผู้ลงประกาศ:</span>
          <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1">
            👤 {product.seller}
            <span className="text-blue-500 text-xs" title="ยืนยันตัวตนด้วยอีเมลมหาวิทยาลัยแล้ว">
              ✓🎓
            </span>
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400 font-semibold">สถานที่นัดรับ:</span>
          <span className="font-bold text-pink-600 dark:text-pink-400">{product.location}</span>
        </div>
      </div>

      {/* รายละเอียด */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">รายละเอียดสินค้า</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
          {product.description}
        </p>
      </div>

      {/* 💬 ตัวเลือกข้อความทักแชทด่วน */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-500 flex items-center gap-1">
          💬 เลือกแม่แบบข้อความส่งถึงผู้ขาย:
        </label>
        <div className="flex flex-col gap-1.5 text-xs">
          {[
            `สวัสดีครับ สนใจ "${product.title}" นัดรับ ${product.location} สะดวกไหมครับ?`,
            `สวัสดีค่ะ สินค้านี้ยังอยู่ไหมคะ? ลดได้นิดหน่อยไหมคะ`,
            `สวัสดีครับ ขอนัดดูของจริงที่หอพัก/ตึกเรียน ได้ช่วงไหนบ้างครับ?`
          ].map((msg, i) => (
            <button
              key={i}
              onClick={() => setSelectedMsg(msg)}
              className={`p-2.5 rounded-xl text-left transition-all border ${
                selectedMsg === msg
                  ? 'bg-pink-100/80 border-pink-400 text-pink-800 font-semibold dark:bg-slate-700 dark:text-pink-300'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-pink-50/50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              • {msg}
            </button>
          ))}
        </div>
      </div>

      {/* ปุ่มทักแชทพร้อมส่งข้อความที่เลือก */}
      <a
        href={`${product.contact}?text=${encodeURIComponent(selectedMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 hover:opacity-95 text-white font-extrabold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
      >
        💬 ทักแชทผู้ขายด้วยข้อความนี้
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
