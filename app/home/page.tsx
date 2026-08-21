'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

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

const initialProducts: Product[] = [
  {
    id: '1',
    title: 'หนังสือ Calculus 1 สภาพดีมาก',
    price: 150,
    category: 'books',
    tag: '#สภาพนางฟ้า',
    location: 'หอสมุดกลาง',
    seller: 'พี่เกรซ ปี 3',
    contact: 'Line: grace_ku',
    description: 'จดละเอียดทุกบท มีแนวข้อสอบปีเก่าแถมให้ด้วยครับ นัดรับได้ที่หอสมุดกลาง',
    emoji: '📚',
  },
  {
    id: '2',
    title: 'iPad Air M1 (64GB) WiFi',
    price: 13500,
    category: 'tech',
    tag: '#ส่งฟรีหอพัก',
    location: 'ตึกวิศวะ',
    seller: 'นนท์ วิศวะ',
    contact: 'Line: non_eng',
    description: 'แถมเคสกับปากกา Stylus สภาพ 95% แบตอึดๆ ไม่เคยตกหล่น',
    emoji: '💻',
  },
  {
    id: '3',
    title: 'ชุดนิสิตพีทยาว 36 นิ้ว',
    price: 120,
    category: 'fashion',
    tag: '#ส่งต่อถูกๆ',
    location: 'หน้าหอพัก A/B',
    seller: 'มายด์ บัญชี',
    contact: 'Line: mind_acc',
    description: 'ใส่ไปเรียน 2 ครั้งจ้า สภาพใหม่มาก ผ้าไม่บาง จีบแน่นสวยงาม',
    emoji: '👗',
  },
];

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ดึงข้อมูลสินค้าจาก localStorage
  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      // ถ้าไม่มี ให้ใส่ข้อมูลตั้งต้นไว้ก่อน
      localStorage.setItem('products', JSON.stringify(initialProducts));
      setProducts(initialProducts);
    }
  }, []);

  // กรองสินค้าตามการค้นหาและหมวดหมู่
  const filteredProducts = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.seller.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <main className="min-h-screen bg-pink-50/30 dark:bg-slate-950 p-4 md:p-8 space-y-6">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-xs font-bold text-pink-600 hover:underline">
            ← หน้าแรก
          </Link>
          <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
            🛒 ตลาดนัดวิทยาเขต
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/product"
            className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-extrabold text-xs rounded-2xl shadow-sm transition-all"
          >
            + ลงขายสินค้า
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* ค้นหา & กรองหมวดหมู่ */}
      <div className="max-w-5xl mx-auto space-y-3">
        <input
          type="text"
          placeholder="🔍 ค้นหาสินค้า หรือชื่อผู้ขาย..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-pink-100 dark:border-slate-800 shadow-sm text-xs font-medium focus:outline-none focus:border-pink-400"
        />

        <div className="flex gap-2 overflow-x-auto pb-1 text-xs font-bold no-scrollbar">
          {[
            { id: 'all', label: '✨ ทั้งหมด' },
            { id: 'books', label: '📚 หนังสือเรียน' },
            { id: 'tech', label: '💻 ไอที & อุปกรณ์' },
            { id: 'fashion', label: '👗 แฟชั่น นศ.' },
            { id: 'dorm', label: '🛵 ของใช้หอพัก' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-pink-500 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-pink-100 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* รายการสินค้า */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <Link
              key={p.id}
              href={`/home/detail?id=${p.id}`}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-pink-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-pink-300 transition-all space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-4xl p-2.5 bg-pink-50 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform">
                    {p.emoji || '🛍️'}
                  </span>
                  <span className="text-[11px] font-bold text-pink-500 bg-pink-100/80 px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-pink-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-lg font-black text-pink-600 dark:text-pink-400">
                    ฿{Number(p.price).toLocaleString()}
                  </p>
                </div>

                <p className="text-xs text-slate-500 line-clamp-2">{p.description}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
                <span>📍 {p.location}</span>
                <span className="text-pink-500 font-bold group-hover:translate-x-1 transition-transform">
                  ดูรายละเอียด →
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-slate-400 text-xs">
            😢 ไม่พบสินค้าที่คุณค้นหา
          </div>
        )}
      </div>

    </main>
  );
}
