import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function SplashPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center p-6 bg-gradient-to-b from-blue-500/10 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-center">
      {/* ปุ่มเปลี่ยนธีม มุมขวาบน */}
      <div className="w-full flex justify-end">
        <ThemeToggle />
      </div>

      {/* โลโก้และข้อความต้อนรับ */}
      <div className="my-auto max-w-sm w-full flex flex-col items-center gap-6">
        <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/30 animate-bounce">
          <span className="text-4xl">🛍️</span>
        </div>
        
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Campus Marketplace
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
            ตลาดซื้อขายสินค้าสำหรับนักเรียน นักศึกษา เข้าถึงง่าย สะดวก ปลอดภัย
          </p>
        </div>

        <Link 
          href="/home" 
          className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg shadow-blue-600/30 active:scale-95 transition-all duration-200 block"
        >
          เข้าสู่หน้าหลัก
        </Link>
      </div>

      <div className="text-xs text-slate-400 dark:text-slate-600">
        © 2026 Campus Marketplace Mobile App
      </div>
    </main>
  );
}