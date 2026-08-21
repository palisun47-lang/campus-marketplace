'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  tag: string;
  location: string;
  seller: string;
  contact: string;
  description: string;
  emoji: string;
}

function ProductDetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [product, setProduct] = useState<Product | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (id) {
      const saved = localStorage.getItem('products');
      if (saved) {
        const list: Product[] = JSON.parse(saved);
        const found = list.find((item) => item.id === id);
        if (found) setProduct(found);
      }
    }
  }, [id]);

  const handleCopyContact = () => {
    if (product?.contact) {
      navigator.clipboard.writeText(product.contact);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!product) {
    return (
      <div className="text-center py-20 text-slate-400 text-xs">
        ⏳ กำลังโหลดข้อมูลสินค้า...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link href="/home" className="text-xs font-bold text-pink-600 hover:underline inline-block">
        ← ย้อนกลับไปหน้าตลาด
      </Link>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-pink-100 dark:border-slate-800 shadow-md space-y-6">
        
        {/* รูปไอคอน + ราคา + แท็ก */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="text-7xl p-6 bg-pink-50 dark:bg-slate-800 rounded-3xl">
            {product.emoji || '🛍️'}
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold text-pink-500 bg-pink-100/80 px-3 py-1 rounded-full">
              {product.tag}
            </span>
            <h1 className="text-xl font-black text-slate-800 dark:text-slate-100">
              {product.title}
            </h1>
            <p className="text-2xl font-black text-pink-600 dark:text-pink-400">
              ฿{Number(product.price).toLocaleString()}
            </p>
          </div>
        </div>

        {/* ข้อมูลการนัดรับ & ผู้ขาย */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-pink-50/50 dark:bg-slate-800/50 rounded-2xl border border-pink-100/50 dark:border-slate-700">
            <span className="text-slate-400 block font-medium">📍 จุดนัดรับใน ม.</span>
            <span className="font-bold text-slate-700 dark:text-slate-200">{product.location}</span>
          </div>
          <div className="p-3 bg-pink-50/50 dark:bg-slate-800/50 rounded-2xl border border-pink-100/50 dark:border-slate-700">
            <span className="text-slate-400 block font-medium">👤 ผู้ลงขาย</span>
            <span className="font-bold text-slate-700 dark:text-slate-200">{product.seller}</span>
          </div>
        </div>

        {/* รายละเอียดสินค้า */}
        <div className="space-y-2 text-xs">
          <h3 className="font-bold text-slate-700 dark:text-slate-300">📝 รายละเอียดสินค้า:</h3>
          <p className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
            {product.description || 'ไม่มีรายละเอียดเพิ่มเติม'}
          </p>
        </div>

        {/* ช่องทางติดต่อผู้ขาย (1-Click Action) */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <button
            onClick={handleCopyContact}
            className="w-full py-3.5 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-95 text-white font-extrabold text-xs rounded-2xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span>💬 {copied ? 'คัดลอกช่องทางติดต่อแล้ว! 🎉' : `ติดต่อผู้ขาย (${product.contact})`}</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default function DetailPage() {
  return (
    <main className="min-h-screen bg-pink-50/30 dark:bg-slate-950 p-4 md:p-8">
      <Suspense fallback={<div className="text-center text-xs py-20">⏳ กำลังโหลด...</div>}>
        <ProductDetailContent />
      </Suspense>
    </main>
  );
}
