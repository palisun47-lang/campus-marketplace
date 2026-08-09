import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

const sampleProducts = [
  { id: 1, title: 'หนังสือเรียน Next.js สภาพดี 99%', price: '250', category: 'หนังสือ', image: '📚', seller: 'รุ่นพี่ปี 3' },
  { id: 2, title: 'เสื้อกาวน์ปฏิบัติการ ไซส์ L', price: '180', category: 'เครื่องแต่งกาย', image: '🥼', seller: 'เด็กเคมี' },
  { id: 3, title: 'หูฟังไร้สายพร้อมกล่องชาร์จ', price: '590', category: 'ไอที', image: '🎧', seller: 'น้องปี 1' },
  { id: 4, title: 'เครื่องคิดเลขวิทยาศาสตร์ FX-991', price: '450', category: 'อุปกรณ์การเรียน', image: '🔢', seller: 'วิศวะปี 2' },
  { id: 5, title: 'จักรยานปั่นในมหาลัย สภาพพร้อมใช้งาน', price: '1,200', category: 'พาหนะ', image: '🚲', seller: 'พี่หอพัก' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen pb-24 max-w-md mx-auto border-x border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100">🛒 ตลาดนัดวิทยาลัย</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">สินค้าแนะนำ 5 รายการล่าสุด</p>
        </div>
        <ThemeToggle />
      </header>

      <main className="p-4 space-y-4">
        {sampleProducts.map((product) => (
          <div key={product.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 flex gap-4 items-center hover:border-blue-500 transition-all shadow-sm">
            <div className="w-16 h-16 rounded-xl bg-blue-100 dark:bg-slate-700 flex items-center justify-center text-3xl shrink-0">
              {product.image}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 font-semibold px-2 py-0.5 rounded-full">
                {product.category}
              </span>
              <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate mt-1">
                {product.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">ผู้ขาย: {product.seller}</p>
              <p className="text-base font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                ฿{product.price}
              </p>
            </div>
          </div>
        ))}
      </main>

      <div className="fixed bottom-6 right-6 max-w-md mx-auto">
        <Link 
          href="/product"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg shadow-blue-600/40 hover:bg-blue-700 font-medium text-sm transition-transform active:scale-95"
        >
          <span className="text-lg">+</span> เพิ่มสินค้า
        </Link>
      </div>
    </div>
  );
}