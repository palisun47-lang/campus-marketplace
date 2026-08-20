'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export const initialProducts = [
  {
    id: 1,
    title: 'iPad Air M1 สภาพนางฟ้า 99%',
    category: 'tech',
    price: 13500,
    tag: '#สภาพนางฟ้า',
    location: '📍 นัดรับ: ตึกวิศวะ / หอพัก A',
    seller: 'พี่เกรซ วิศวะ ปี 3',
    contact: 'https://line.me',
    image: '📱',
    description: 'เครื่องใช้น้อยมาก ติดฟิล์มกระดาษแล้ว แถมเคสและปากกาStylus สภาพไร้รอย นัดรับตรวจเช็กเครื่องใน ม. ได้เลยครับ',
  },
  {
    id: 2,
    title: 'หนังสือ Calculus 1 สภาพดี ไม่มีรอยเขียน',
    category: 'books',
    price: 120,
    tag: '#ส่งต่อถูกๆ',
    location: '📍 นัดรับ: หอสมุดกลาง',
    seller: 'น้องนัท บัญชี ปี 1',
    contact: 'https://line.me',
    image: '📚',
    description: 'หนังสือแคลคูลัส 1 สภาพดีมาก ไฮไลต์แค่นิดหน่อย ไม่ขาด ไม่เปียกน้ำ เหมาะกับน้องๆ ที่เตรียมสอบครับ',
  },
  {
    id: 3,
    title: 'ชุดนิสิตทรงบอย Size L ผ้าหนาไม่บาง',
    category: 'fashion',
    price: 150,
    tag: '#ส่งฟรีหอพัก',
    location: '📍 นัดรับ: โรงอาหารกลาง',
    seller: 'มายด์ มนุษยศาสตร์',
    contact: 'https://line.me',
    image: '👗',
    description: 'เสื้อทรงบอย อก 40 นิ้ว ผ้าทรงสวย ไม่ยับง่าย ใส่ไปเรียนแค่ 2 ครั้ง ส่งต่อเพราะไซส์ใหญ่ไปนิดนึงค่ะ',
  },
  {
    id: 4,
    title: 'ตู้เย็นจิ๋วสำหรับหอพัก ประหยัดไฟ',
    category: 'dorm',
    price: 890,
    tag: '#ส่งฟรีหอพัก',
    location: '📍 นัดรับ: หน้าหอพัก B',
    seller: 'พี่ต๊อบ สถาปัตย์ ปี 4',
    contact: 'https://line.me',
    image: '🧊',
    description: 'ตู้เย็นขนาดเล็กแช่เครื่องดื่ม/เครื่องสำอางได้ดี เย็นเร็ว เสียงเบา ประหยัดไฟมาก นัดรับหน้าหอพัก B ได้ครับ',
  },
];

function HomeContent() {
  const searchParams = useSearchParams();
  const selectedCat = searchParams.get('category') || 'all';
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('');

  const filteredProducts = initialProducts.filter((item) => {
    const matchesCategory = selectedCat === 'all' || item.category === selectedCat;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = activeTag === '' || item.tag === activeTag;
    return matchesCategory && matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-4 rounded-3xl border border-pink-100 dark:border-slate-800 shadow-sm space-y-3">
        <input
          type="text"
          placeholder="🔍 ค้นหาสินค้า..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-3 px-5 rounded-2xl bg-pink-50/50 dark:bg-slate-800/80 border border-pink-200/60 dark:border-slate-700 text-sm focus:outline-none"
        />
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-bold whitespace-nowrap">แท็ก:</span>
          {['#สภาพนางฟ้า', '#ส่งฟรีหอพัก', '#ส่งต่อถูกๆ'].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? '' : tag)}
              className={`px-3 py-1 rounded-full font-semibold whitespace-nowrap ${
                activeTag === tag ? 'bg-pink-500 text-white' : 'bg-pink-100/60 dark:bg-slate-800 text-pink-600 dark:text-pink-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/home/detail?id=${product.id}`}
            className="group bg-white/90 dark:bg-slate-900/90 rounded-3xl p-5 border border-pink-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3 cursor-pointer"
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="text-4xl p-2 bg-pink-50 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform">
                  {product.image}
                </span>
                <span className="text-xs font-bold text-pink-500 bg-pink-100/80 dark:bg-pink-950/60 px-2.5 py-1 rounded-full">
                  {product.tag}
                </span>
              </div>
              <h3 className="font-bold text-base mt-3 text-slate-800 dark:text-slate-100 group-hover:text-pink-500 transition-colors">
                {product.title}
              </h3>
              <p className="text-lg font-black text-pink-600 dark:text-pink-400 mt-1">
                ฿{product.price.toLocaleString()}
              </p>
              <div className="mt-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-2.5 py-1 rounded-lg inline-block">
                {product.location}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <span>👤 {product.seller}</span>
              <span className="text-pink-500 font-bold group-hover:underline">ดูรายละเอียด →</span>
            </div>
          </Link>
        ))}
      </div>
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
