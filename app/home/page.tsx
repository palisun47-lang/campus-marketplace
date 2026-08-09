'use client';

import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

export default function HomePage() {
  // ข้อมูลสินค้าตัวอย่าง 5 รายการ
  const products = [
    {
      id: 1,
      title: 'หนังสือเรียน Next.js สภาพดี 99%',
      category: 'หนังสือ',
      price: '250',
      seller: 'รุ่นพี่ปี 3',
      icon: '📚',
    },
    {
      id: 2,
      title: 'เสื้อกาวน์ปฏิบัติการ ไซส์ L',
      category: 'เครื่องแต่งกาย',
      price: '180',
      seller: 'เด็กเคมี',
      icon: '🥼',
    },
    {
      id: 3,
      title: 'หูฟังไร้สายพร้อมกล่องชาร์จ',
      category: 'ไอที',
      price: '590',
      seller: 'น้องปี 1',
      icon: '🎧',
    },
    {
      id: 4,
      title: 'เครื่องคิดเลขวิทยาศาสตร์ FX-991',
      category: 'อุปกรณ์การเรียน',
      price: '450',
      seller: 'วิศวะปี 2',
      icon: '🔢',
    },
    {
      id: 5,
      title: 'จักรยานปั่นในมหาลัย สภาพพร้อมใช้งาน',
      category: 'พาหนะ',
      price: '1,200',
      seller: 'พี่หอพัก',
      icon: '🚲',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col items-center">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 min-h-screen shadow-xl flex flex-col pb-20">
        
        {/* Header */}
        <header className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10">
          <div>
            <h1 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
              🛒 ตลาดนัดวิทยาลัย
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">สินค้าแนะนำ 5 รายการล่าสุด</p>
          </div>
          <ThemeToggle />
        </header>

        {/* Product List */}
        <div className="p-4 flex flex-col gap-3 flex-1">
          {products.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm flex items-center gap-3 hover:border-blue-500 transition-colors"
            >
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-2xl shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-full mb-1">
                  {item.category}
                </span>
                <h2 className="text-xs font-semibold text-slate-800 dark:text-slate-100 truncate">
                  {item.title}
                </h2>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  ผู้ขาย: {item.seller}
                </p>
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                  ฿{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Button สำหรับไปหน้าเพิ่มสินค้า */}
        <div className="fixed bottom-6 w-full max-w-md px-4 flex justify-center pointer-events-none">
          <Link
            href="/product"
            className="pointer-events-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-2 transition-transform active:scale-95"
          >
            <span>➕</span> ลงประกาศขายสินค้า
          </Link>
        </div>

      </div>
    </main>
  );
}