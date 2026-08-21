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

const mockProducts: Product[] = [
  {
    id: '1',
    title: 'iPad Air M1 สภาพนางฟ้า 99%',
    price: 13500,
    category: 'tech',
    tag: '#สภาพนางฟ้า',
    location: 'ตึกวิศวะ / หอพัก A',
    seller: 'พี่เกรซ วิศวะ ปี 3',
    contact: 'Line: grace_ku',
    description: 'แถมเคสกับสายชาร์จแท้ แบตอึด 98% ไร้รอยขีดข่วน นัดรับได้ทันที',
    emoji: '📱',
  },
  {
    id: '2',
    title: 'Magic Keyboard สำหรับ iPad 11 นิ้ว',
    price: 4200,
    category: 'tech',
    tag: '#สภาพนางฟ้า',
    location: 'ตึกไอที / หอสมุด',
    seller: 'เบสท์ คอมพิวเตอร์ ปี 2',
    contact: 'Line: best_com',
    description: 'คีย์บอร์ดไทย-อังกฤษ ไฟติดครบ พิมพ์ลื่นมากๆ สภาพเหมือนใหม่',
    emoji: '⌨️',
  },
  {
    id: '3',
    title: 'จอมอนิเตอร์ Dell 24 นิ้ว FHD 75Hz',
    price: 2100,
    category: 'tech',
    tag: '#ส่งฟรีหอพัก',
    location: 'หน้าหอพัก B',
    seller: 'พี่ต๊อบ สถาปัตย์ ปี 4',
    contact: 'Line: tob_arch',
    description: 'หน้าจอคมชัด ไม่มีเดดพิกเซล เหมาะเอาไว้ต่อแยกทำงานหรือเรียนออนไลน์',
    emoji: '🖥️',
  },
  {
    id: '4',
    title: 'หูฟังตัดเสียง Sony WH-1000XM4',
    price: 5400,
    category: 'tech',
    tag: '#ส่งต่อถูกๆ',
    location: 'หอสมุดกลาง',
    seller: 'นิว นิเทศ ปี 3',
    contact: 'Line: new_comm',
    description: 'ตัดเสียงรบกวนเงียบกริบ แบตยังอึดเหมือนเดิม มีกระเป๋าแถมให้ครบกล่อง',
    emoji: '🎧',
  },
  {
    id: '5',
    title: 'ตู้เย็นจิ๋วสำหรับหอพัก ประหยัดไฟ',
    price: 890,
    category: 'dorm',
    tag: '#ส่งฟรีหอพัก',
    location: 'หน้าหอพัก B',
    seller: 'พี่ต๊อบ สถาปัตย์ ปี 4',
    contact: 'Line: tob_arch',
    description: 'ความจุพอดีห้องหอ แช่น้ำแช่ขนมเย็นเจี๊ยบ เสียงเงียบไม่กวนเวลานอน',
    emoji: '🧊',
  },
  {
    id: '6',
    title: 'พัดลมไอเย็น Hatari สภาพ 95% เย็นฉ่ำ',
    price: 750,
    category: 'dorm',
    tag: '#ส่งฟรีหอพัก',
    location: 'หอพัก A',
    seller: 'เจมส์ วิทยาศาสตร์ ปี 3',
    contact: 'Line: james_sci',
    description: 'ใส่น้ำเย็นหรือเจลเย็น ลมออกมาเย็นชื่นใจมาก สภาพดี ล้างทำความสะอาดให้แล้ว',
    emoji: '🌬️',
  },
  {
    id: '7',
    title: 'หม้อชาบูไฟฟ้าจิ๋ว มัลติฟังก์ชัน 1.8 ลิตร',
    price: 220,
    category: 'dorm',
    tag: '#สภาพนางฟ้า',
    location: 'โรงอาหารกลาง',
    seller: 'พลอย เภสัช ปี 2',
    contact: 'Line: ploy_rx',
    description: 'ต้ม ผัด ทอด ได้หมดในหม้อเดียว ร้อนไวมาก เหมาะกับเด็กหอสุดๆ',
    emoji: '🍲',
  },
  {
    id: '8',
    title: 'โต๊ะญี่ปุ่นพับได้ พร้อมช่องวาง iPad และแก้วน้ำ',
    price: 130,
    category: 'dorm',
    tag: '#ส่งต่อถูกๆ',
    location: 'หอพัก B',
    seller: 'กิ๊ฟ ครุศาสตร์ ปี 1',
    contact: 'Line: gift_edu',
    description: 'โต๊ะแข็งแรง ไม่โยกมีช่องเสียบแท็บเล็ตกับช่องใส่แก้วน้ำ พกพาสะดวก',
    emoji: '🛋️',
  },
];

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) {
      const parsed = JSON.parse(saved);
      // รวมสินค้าที่ผู้ใช้กดลงขายเข้ากับสินค้า mockData
      const combined = [...parsed];
      mockProducts.forEach((mock) => {
        if (!combined.some((p) => p.id === mock.id)) {
          combined.push(mock);
        }
      });
      setProducts(combined);
      localStorage.setItem('products', JSON.stringify(combined));
    } else {
      localStorage.setItem('products', JSON.stringify(mockProducts));
      setProducts(mockProducts);
    }
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.seller.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchTag = selectedTag === 'all' || p.tag === selectedTag;

    return matchSearch && matchCategory && matchTag;
  });

  return (
    <main className="min-h-screen bg-pink-50/30 dark:bg-slate-950 p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-xs font-bold text-pink-600 hover:underline">
            ← กลับหน้าแรก
          </Link>
          <h1 className="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
            ตลาดสินค้า นศ. 🛍️
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

      {/* แถบหมวดหมู่หลัก */}
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-2 overflow-x-auto pb-1 text-xs font-bold no-scrollbar">
          {[
            { id: 'all', label: 'ทั้งหมด 🛒' },
            { id: 'books', label: '📚 หนังสือเรียน' },
            { id: 'tech', label: '💻 ไอที & อุปกรณ์' },
            { id: 'fashion', label: '👗 แฟชั่น นศ.' },
            { id: 'dorm', label: '🛵 ของใช้หอพัก' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-2xl transition-all whitespace-nowrap shadow-sm border ${
                selectedCategory === cat.id
                  ? 'bg-pink-500 border-pink-500 text-white'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-pink-100 dark:border-slate-800 hover:bg-pink-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ช่องค้นหา & ตัวกรองแท็ก */}
      <div className="max-w-5xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-4 rounded-3xl border border-pink-100 dark:border-slate-800 shadow-sm space-y-3">
        <div className="relative">
          <input
            type="text"
            placeholder="🔍 ค้นหาสินค้า (เช่น iPad, หนังสือ, ตู้เย็น)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3.5 pl-4 bg-pink-50/40 dark:bg-slate-800/50 rounded-2xl border border-pink-100 dark:border-slate-700 text-xs font-medium focus:outline-none focus:border-pink-400"
          />
        </div>

        {/* แท็กกรองด่วน */}
        <div className="flex items-center gap-2 text-xs font-bold overflow-x-auto no-scrollbar">
          <span className="text-slate-400 text-[11px] shrink-0">กรองแท็ก:</span>
          {[
            { tag: 'all', label: 'ทั้งหมด' },
            { tag: '#สภาพนางฟ้า', label: '#สภาพนางฟ้า' },
            { tag: '#ส่งฟรีหอพัก', label: '#ส่งฟรีหอพัก' },
            { tag: '#ส่งต่อถูกๆ', label: '#ส่งต่อถูกๆ' },
          ].map((t) => (
            <button
              key={t.tag}
              onClick={() => setSelectedTag(t.tag)}
              className={`px-3 py-1 rounded-full text-[11px] transition-all whitespace-nowrap ${
                selectedTag === t.tag
                  ? 'bg-pink-500 text-white font-black'
                  : 'bg-pink-50 text-pink-600 dark:bg-slate-800 dark:text-pink-400 hover:bg-pink-100'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* การ์ดรายการสินค้า */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <Link
              key={p.id}
              href={`/home/detail?id=${p.id}`}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-pink-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-pink-300 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="text-4xl p-3 bg-pink-50 dark:bg-slate-800 rounded-2xl group-hover:scale-105 transition-transform">
                    {p.emoji || '🛍️'}
                  </div>
                  <span className="text-xs font-bold text-pink-500 bg-pink-100/80 dark:bg-pink-950/60 dark:text-pink-300 px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-base text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-pink-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xl font-black text-pink-600 dark:text-pink-400">
                    ฿{Number(p.price).toLocaleString()}
                  </p>
                </div>

                <div className="text-[11px] font-medium text-slate-500 bg-slate-100/80 dark:bg-slate-800 px-2.5 py-1 rounded-lg inline-block">
                  📍 นัดรับ: {p.location}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400">
                <span className="flex items-center gap-1">👤 {p.seller}</span>
                <span className="text-pink-500 font-bold group-hover:translate-x-1 transition-transform">
                  ดูรายละเอียด →
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-slate-400 text-xs">
            😢 ไม่พบสินค้าที่คุณค้นหา ลองเปลี่ยนแท็กหรือคำค้นหาดูครับ
          </div>
        )}
      </div>
    </main>
  );
}
