'use client';

import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

export default function HomePage() {
  const products = [
    {
      id: 1,
      title: 'หนังสือเรียน Next.js สภาพดี 99%',
      category: 'หนังสือ',
      price: '250',
      seller: 'รุ่นพี่ปี 3',
      icon: '📚',
      description: 'หนังสือมือหนึ่งอ่านเอง อ่านคนเดียว สภาพสะอาด ไม่มีรอยขีดเขียน ห่อปกใสเรียบร้อยครับ',
      location: 'นัดรับตึกคณะ IT หรือโรงอาหารกลาง',
      contact: 'Line: varisara_book',
    },
    {
      id: 2,
      title: 'เสื้อกาวน์ปฏิบัติการ ไซส์ L',
      category: 'เครื่องแต่งกาย',
      price: '180',
      seller: 'เด็กเคมี',
      icon: '🥼',
      description: 'ใส่ไปแล็บแค่ 2 ครั้ง ซักรีดสะอาดเรียบร้อย ไซส์ L รอบอก 42 นิ้ว กระดุมครบทุกเม็ด',
      location: 'นัดรับหน้าตึกวิทยาศาสตร์',
      contact: 'IG: chem_store',
    },
    {
      id: 3,
      title: 'หูฟังไร้สายพร้อมกล่องชาร์จ',
      category: 'ไอที',
      price: '590',
      seller: 'น้องปี 1',
      icon: '🎧',
      description: 'ใช้งานปกติ เสียงดี เบสแน่น แบตอึด อุปกรณ์ครบกล่องพร้อมสายชาร์จเดิม',
      location: 'นัดรับหอพักนักศึกษาชาย',
      contact: 'Tel: 089-123-4567',
    },
    {
      id: 4,
      title: 'เครื่องคิดเลขวิทยาศาสตร์ FX-991',
      category: 'อุปกรณ์การเรียน',
      price: '450',
      seller: 'วิศวะปี 2',
      icon: '🔢',
      description: 'รุ่นยอดฮิตผ่านเกณฑ์สอบทุกสนาม หน้าจอชัดเจน ปุ่มกดนิ่ม ใช้งานได้เต็มระบบ',
      location: 'นัดรับลานเกียร์ วิศวะ',
      contact: 'Line: en_calc',
    },
    {
      id: 5,
      title: 'จักรยานปั่นในมหาลัย สภาพพร้อมใช้งาน',
      category: 'พาหนะ',
      price: '1,200',
      seller: 'พี่หอพัก',
      icon: '🚲',
      description: 'ปั่นนิ่ม ยางไม่รั่ว มีตะกร้าหน้าใส่ของได้ เหมาะกับการขับขี่ภายในมหาลัยมากๆ ครับ',
      location: 'นัดรับหอพักใน',
      contact: 'Line: dormitory_bike',
    },
  ];

  const handleSelectProduct = (item: any) => {
    localStorage.setItem('currentProduct', JSON.stringify(item));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-sky-50/50 dark:from-slate-950 dark:via-purple-950/10 dark:to-slate-900 flex flex-col items-center">
      <div className="w-full max-w-md md:max-w-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl min-h-screen shadow-2xl flex flex-col pb-28 border-x border-pink-100/50 dark:border-purple-900/20 relative">
        
        {/* Header */}
        <header className="p-4 md:p-6 border-b border-pink-100 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-3 py-1.5 bg-pink-100 dark:bg-slate-800 hover:bg-pink-200 dark:hover:bg-slate-700 text-pink-600 dark:text-pink-400 text-xs font-bold rounded-xl transition-all flex items-center gap-1 shadow-sm shrink-0"
            >
              <span>🏠</span> หน้าแรก
            </Link>
            <div>
              <h1 className="text-base md:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 flex items-center gap-2">
                🛒✨ ตลาดนัดวิทยาลัยฟีลกู้ด
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">สินค้าคัดพิเศษ น่ารัก น่าใช้ 5 รายการ</p>
            </div>
          </div>
          <ThemeToggle />
        </header>

        {/* Product List - Responsive Grid for Phone & iPad */}
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {products.map((item) => (
            <Link
              key={item.id}
              href="/home/detail"
              onClick={() => handleSelectProduct(item)}
              className="p-4 bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-slate-700/80 rounded-3xl shadow-sm hover:shadow-md hover:border-pink-300 dark:hover:border-purple-500 transition-all cursor-pointer flex items-center gap-4 group active:scale-98"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 rounded-full mb-1">
                  {item.category}
                </span>
                <h2 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                  {item.title}
                </h2>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  ผู้ขาย: {item.seller}
                </p>
                <p className="text-sm md:text-base font-extrabold text-pink-600 dark:text-pink-400 mt-1">
                  ฿{item.price}
                </p>
              </div>
              <div className="text-pink-400 text-lg group-hover:translate-x-1 transition-transform">›</div>
            </Link>
          ))}
        </div>

        {/* Floating Action Button - Fixed properly for mobile touch */}
        <div className="fixed bottom-6 left-0 right-0 z-30 flex justify-center px-4">
          <Link
            href="/product"
            className="px-6 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xs md:text-sm font-bold rounded-full shadow-xl shadow-purple-500/30 flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
          >
            <span>➕✨</span> ลงประกาศขายสินค้า
          </Link>
        </div>

      </div>
    </main>
  );
}