'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export const initialProducts = [
  // 💻 หมวดไอที & อุปกรณ์ (tech)
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
    id: 5,
    title: 'Magic Keyboard สำหรับ iPad 11 นิ้ว',
    category: 'tech',
    price: 4200,
    tag: '#สภาพนางฟ้า',
    location: '📍 นัดรับ: ตึกไอที / หอสมุด',
    seller: 'เบสท์ คอมพิวเตอร์ ปี 2',
    contact: 'https://line.me',
    image: '⌨️',
    description: 'คีย์บอร์ดแท้จาก Apple ปุ่มกดแน่น ไฟแป้นพิมพ์ติดครบทุกปุ่ม สภาพสวย 95% พร้อมกล่องครบครับ',
  },
  {
    id: 6,
    title: 'จอมอนิเตอร์ Dell 24 นิ้ว FHD 75Hz',
    category: 'tech',
    price: 2100,
    tag: '#ส่งฟรีหอพัก',
    location: '📍 นัดรับ: หน้าหอพัก B',
    seller: 'พี่ต๊อบ สถาปัตย์ ปี 4',
    contact: 'https://line.me',
    image: '🖥️',
    description: 'จอมอนิเตอร์สำหรับทำรายงาน หรือต่อเล่นเกม สีตรง ไม่ติดพิกเซลเสีย แถมสาย HDMI ให้ด้วย ยกส่งถึงหน้าห้องครับ',
  },
  {
    id: 7,
    title: 'หูฟังตัดเสียง Sony WH-1000XM4',
    category: 'tech',
    price: 5400,
    tag: '#ส่งต่อถูกๆ',
    location: '📍 นัดรับ: หอสมุดกลาง',
    seller: 'นิว นิเทศ ปี 3',
    contact: 'https://line.me',
    image: '🎧',
    description: 'แบตทนทานมาก ตัดเสียงรบกวนในหอสมุดได้เงียบสนิท ฟองน้ำยังนุ่ม สภาพดี มีกระเป๋าใส่ให้ครบชุดครับ',
  },

  // 📚 หมวดหนังสือเรียน (books)
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
    id: 8,
    title: 'สรุปชีท Physics 1 + แนวข้อสอบเก่า 5 ปีย้อนหลัง',
    category: 'books',
    price: 89,
    tag: '#สภาพนางฟ้า',
    location: '📍 นัดรับ: โรงอาหารวิศวะ',
    seller: 'พี่วิน วิศวะ ปี 2',
    contact: 'https://line.me',
    image: '📑',
    description: 'เล่มสรุปเข้าเข้าใจง่าย ลายมืออ่านง่ายมาก พร้อมแนวข้อสอบสอบกลางภาคและปลายภาคตรงประเด็นแน่นอน',
  },
  {
    id: 9,
    title: 'หนังสือ Principles of Marketing (การตลาด 101)',
    category: 'books',
    price: 180,
    tag: '#ส่งต่อถูกๆ',
    location: '📍 นัดรับ: ตึกบริหารธุรกิจ',
    seller: 'ชมพู่ บริหาร ปี 2',
    contact: 'https://line.me',
    image: '📖',
    description: 'ตำราเรียนหลักวิชาการตลาด สภาพดีเล่มหนา มีไฮไลต์เฉพาะจุดสำคัญ เอาไปใช้เรียนต่อได้สบายๆ เลยค่ะ',
  },
  {
    id: 10,
    title: 'หนังสือ English for Communication (ENG101)',
    category: 'books',
    price: 95,
    tag: '#ส่งต่อถูกๆ',
    location: '📍 นัดรับ: ตึกมนุษยศาสตร์',
    seller: 'ฟ้า ศิลปศาสตร์ ปี 1',
    contact: 'https://line.me',
    image: '📕',
    description: 'หนังสือภาษาอังกฤษพื้นฐาน สภาพ 90% แบบฝึกหัดทำด้วยดินสอ สามารถลบออกได้หมดจดครับ',
  },

  // 👗 หมวดแฟชั่น นศ. (fashion)
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
    id: 11,
    title: 'กระโปรงพลีทจีบรอบ ยาว 24 นิ้ว เอวยางยืด',
    category: 'fashion',
    price: 110,
    tag: '#สภาพนางฟ้า',
    location: '📍 นัดรับ: หอพักหญิง C',
    seller: 'แนน นิติ ปี 2',
    contact: 'https://line.me',
    image: '🥻',
    description: 'กระโปรงพลีทจีบแน่น ไม่แตก ไม่ต้องรีดบ่อย ผ้าพริ้วสวย ใส่สบายมาก นัดรับหน้าหอพักได้เลยค่ะ',
  },
  {
    id: 12,
    title: 'เสื้อช็อปคณะวิศวกรรมศาสตร์ ไซส์ M',
    category: 'fashion',
    price: 250,
    tag: '#ส่งต่อถูกๆ',
    location: '📍 นัดรับ: ลานเกียร์วิศวะ',
    seller: 'โบ๊ท วิศวะ ปี 4',
    contact: 'https://line.me',
    image: '👔',
    description: 'เสื้อช็อปสีส้มอิฐ ผ้าใส่สบาย ไม่ร้อน ซักสะอาดเรียบร้อยแล้ว พร้อมใช้งานทันทีครับ',
  },
  {
    id: 13,
    title: 'รองเท้าผ้าใบ Converse Jack Purcell สีขาว (EU 39)',
    category: 'fashion',
    price: 650,
    tag: '#สภาพนางฟ้า',
    location: '📍 นัดรับ: โรงอาหารกลาง',
    seller: 'อาร์ท สถาปัตย์ ปี 3',
    contact: 'https://line.me',
    image: '👟',
    description: 'รองเท้าผ้าใบเรียบหรูใส่ไปเรียนได้ ซักทำความสะอาดแล้ว ส้นยังไม่สึก สภาพสวย 88% ครับ',
  },

  // 🛵 หมวดของใช้หอพัก (dorm)
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
  {
    id: 14,
    title: 'พัดลมไอเย็น Hatari สภาพ 95% เย็นฉ่ำ',
    category: 'dorm',
    price: 750,
    tag: '#ส่งฟรีหอพัก',
    location: '📍 นัดรับ: หอพัก A',
    seller: 'เจมส์ วิทยาศาสตร์ ปี 3',
    contact: 'https://line.me',
    image: '🌬️',
    description: 'พัดลมไอเย็นช่วยประหยัดค่าแอร์หอพัก แถมเจลเย็นให้ 2 ก้อน พร้อมใช้งาน ยกส่งถึงหน้าห้องพักครับ',
  },
  {
    id: 15,
    title: 'หม้อชาบูไฟฟ้าจิ๋ว มัลติฟังก์ชัน 1.8 ลิตร',
    category: 'dorm',
    price: 220,
    tag: '#สภาพนางฟ้า',
    location: '📍 นัดรับ: โรงอาหารกลาง',
    seller: 'พลอย เภสัช ปี 2',
    contact: 'https://line.me',
    image: '🍲',
    description: 'หม้อต้มสุกี้/ชาบู/ต้มมาม่า เคลือบเทฟลอนไม่ติดหม้อ ร้อนเร็วมาก เหมาะกับเด็กหอสุดๆ ค่ะ',
  },
  {
    id: 16,
    title: 'โต๊ะญี่ปุ่นพับได้ พร้อมช่องวาง iPad และแก้วน้ำ',
    category: 'dorm',
    price: 130,
    tag: '#ส่งต่อถูกๆ',
    location: '📍 นัดรับ: หอพัก B',
    seller: 'กิ๊ฟ ครุศาสตร์ ปี 1',
    contact: 'https://line.me',
    image: '🛋️',
    description: 'โต๊ะทำการบ้านบนเตียง มีช่องเสียบ iPad และช่องใส่แก้วน้ำ พับเก็บง่าย น้ำหนักเบา สภาพใหม่มากค่ะ',
  },
];

const categoryNames: Record<string, string> = {
  all: 'ทั้งหมด 🛒',
  books: '📚 หนังสือเรียน',
  tech: '💻 ไอที & อุปกรณ์',
  fashion: '👗 แฟชั่น นศ.',
  dorm: '🛵 ของใช้หอพัก',
};

function HomeContent() {
  const searchParams = useSearchParams();
  const selectedCat = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(selectedCat);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('');

  const filteredProducts = initialProducts.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = activeTag === '' || item.tag === activeTag;
    return matchesCategory && matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* แท็บเลือกหมวดหมู่สินค้า */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {Object.entries(categoryNames).map(([key, name]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
              activeCategory === key
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white scale-105'
                : 'bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border border-pink-100 dark:border-slate-800 hover:bg-pink-50'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* กล่องค้นหา + เลือกแท็ก */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-4 rounded-3xl border border-pink-100 dark:border-slate-800 shadow-sm space-y-3">
        <input
          type="text"
          placeholder="🔍 ค้นหาสินค้า (เช่น iPad, หนังสือ, ตู้เย็น)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-3 px-5 rounded-2xl bg-pink-50/50 dark:bg-slate-800/80 border border-pink-200/60 dark:border-slate-700 text-sm focus:outline-none"
        />
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-bold whitespace-nowrap">กรองแท็ก:</span>
          {['#สภาพนางฟ้า', '#ส่งฟรีหอพัก', '#ส่งต่อถูกๆ'].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? '' : tag)}
              className={`px-3 py-1 rounded-full font-semibold whitespace-nowrap transition-all ${
                activeTag === tag ? 'bg-pink-500 text-white' : 'bg-pink-100/60 dark:bg-slate-800 text-pink-600 dark:text-pink-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* รายการสินค้า */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-white/50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-pink-200">
          <p className="text-4xl mb-2">🔍</p>
          <p className="text-sm font-bold text-slate-500">ไม่พบสินค้าที่คุณค้นหา</p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchTerm(''); setActiveTag(''); }}
            className="mt-3 text-xs text-pink-600 font-bold underline"
          >
            ดูสินค้าทั้งหมด
          </button>
        </div>
      ) : (
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
