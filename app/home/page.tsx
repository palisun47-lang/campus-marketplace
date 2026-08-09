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
            <Link
              key={item.id}
              href={`/home/detail?title=${encodeURIComponent(item.title)}&category=${encodeURIComponent(item.category)}&price=${item.price}&seller=${encodeURIComponent(item.seller)}&icon=${encodeURIComponent(item.icon)}&desc=${encodeURIComponent(item.description)}&loc=${encodeURIComponent(item.location)}&contact=${encodeURIComponent(item.contact)}`}
              className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm flex items-center gap-3 hover:border-blue-500 dark:hover:border-blue-400 transition-all cursor-pointer active:scale-98"
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
              <div className="text-slate-400 text-sm">›</div>
            </Link>
          ))}
        </div>

        {/* Floating Action Button */}
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