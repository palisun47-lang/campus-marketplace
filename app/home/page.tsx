'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Mockup ข้อมูลสินค้าตัวอย่าง
const initialProducts = [
  {
    id: 1,
    title: 'iPad Air M1 สภาพนางฟ้า 99%',
    category: 'tech',
    price: 13500,
    tag: '#สภาพนางฟ้า',
    location: '📍 นัดรับ: ตึกวิศวะ / หอพัก A',
    contact: 'https://line.me',
    image: '📱',
  },
  {
    id: 2,
    title: 'หนังสือ Calculus 1 สภาพดี ไม่มีรอยเขียน',
    category: 'books',
    price: 120,
    tag: '#ส่งต่อถูกๆ',
    location: '📍 นัดรับ: หอสมุดกลาง',
    contact: 'https://line.me',
    image: '📚',
  },
  {
    id: 3,
    title: 'ชุดนิสิตทรงบอย Size L ผ้าหนาไม่บาง',
    category: 'fashion',
    price: 150,
    tag: '#ส่งฟรีหอพัก',
    location: '📍 นัดรับ: โรงอาหารกลาง',
    contact: 'https://line.me',
    image: '👗',
  },
  {
    id: 4,
    title: 'ตู้เย็นจิ๋วสำหรับหอพัก ประหยัดไฟ',
    category: 'dorm',
    price: 890,
    tag: '#ส่งฟรีหอพัก',
    location: '📍 นัดรับ: หน้าหอพัก B',
    contact: 'https://line.me',
    image: '🧊',
  },
];

function HomeContent() {
  const searchParams = useSearchParams();
  const selectedCat = searchParams.get('category') || 'all';

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('');

  // ฟังก์ชันกรองสินค้าตามคำค้นหา หมวดหมู่ และแท็ก
  const filteredProducts = initialProducts.filter((item) => {
    const matchesCategory = selectedCat === 'all' || item.category === selectedCat;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = activeTag === '' || item.tag === activeTag;
    return matchesCategory && matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* 🔍 1. ช่องค้นหา & แท็กด่วน */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-4 rounded-3xl border border-pink-100 dark:border-slate-800 shadow-sm space-y-3">
        <div className="relative">
          <input
            type="text"
            placeholder="🔍 ค้นหาสินค้า เช่น iPad, หนังสือ, เสื้อผ้า..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 px-5 pr-10 rounded-2xl bg-pink-50/50 dark:bg-slate-800/80 border border-pink-200/60 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕ ล้าง
            </button>
          )}
        </div>

        {/* แท็กยอดฮิต */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-bold whitespace-nowrap">แท็กยอดฮิต:</span>
          {['#สภาพนางฟ้า', '#ส่งฟรีหอพัก', '#ส่งต่อถูกๆ'].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? '' : tag)}
              className={`px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap ${
                activeTag === tag
                  ? 'bg-pink-500 text-white shadow-sm'
                  : 'bg-pink-100/60 dark:bg-slate-800 text-pink-600 dark:text-pink-300 hover:bg-pink-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 🛍️ รายการสินค้า */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white/90 dark:bg-slate-900/90 rounded-3xl p-5 border border-pink-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="text-4xl p-2 bg-pink-50 dark:bg-slate-800 rounded-2xl">{product.image}</span>
                <span className="text-xs font-bold text-pink-500 bg-pink-100/80 dark:bg-pink-950/60 px-2.5 py-1 rounded-full">
                  {product.tag}
                </span>
              </div>
              <h3 className="font-bold text-base mt-3 text-slate-800 dark:text-slate-100">{product.title}</h3>
              <p className="text-lg font-black text-pink-600 dark:text-pink-400 mt-1">
                ฿{product.price.toLocaleString()}
              </p>
              
              {/* 📍 2. Badge จุดนัดรับภายใน ม. */}
              <div className="mt-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-2.5 py-1 rounded-lg inline-block">
                {product.location}
              </div>
            </div>

            {/* 💬 3. ปุ่มติดต่อผู้ขายด่วน */}
            <a
              href={`${product.contact}?text=${encodeURIComponent(`สนใจสินค้า "${product.title}" ครับ ยังอยู่มั้ยครับ?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95"
            >
              💬 ทักแชทผู้ขาย
            </a>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 text-slate-400 text-sm">
          ไม่พบสินค้าที่คุณกำลังค้นหา 🐱
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-pink-50/30 dark:bg-slate-950 p-4 md:p-8">
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center">
        <Link href="/" className="text-xs font-bold text-pink-600 hover:underline">
          ← กลับหน้าแรก
        </Link>
        <h1 className="text-lg font-black text-slate-800 dark:text-slate-100">ตลาดสินค้า นศ. 🛍️</h1>
      </div>
      <Suspense fallback={<div className="text-center py-8 text-xs text-slate-400">กำลังโหลด...</div>}>
        <HomeContent />
      </Suspense>
    </main>
  );
}
