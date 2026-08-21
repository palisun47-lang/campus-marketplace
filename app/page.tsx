'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-pink-50/30 dark:bg-slate-950 p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300">
      
      {/* 🌙/☀️ ปุ่มเปลี่ยน Dark/Light Mode มุมขวาบน */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
        <ThemeToggle />
      </div>

      <div className="max-w-md w-full space-y-8 text-center">
        
        {/* โลโก้ & หัวข้อหลัก */}
        <div className="space-y-4">
          <div className="inline-block p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full shadow-md border border-pink-100 dark:border-slate-800 animate-bounce">
            <span className="text-5xl">🏫🛍️</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
              ตลาดยกวิทยาเขต 🛍️
            </h1>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
              ศูนย์รวมซื้อ-ขาย แลกเปลี่ยนของใช้นักศึกษา นัดรับง่าย ปลอดภัย
            </p>
          </div>
        </div>

        {/* การ์ดทางลัดหมวดหมู่อยอดฮิต */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-5 rounded-3xl border border-pink-100 dark:border-slate-800 shadow-sm space-y-3">
          <h2 className="text-xs font-bold text-slate-600 dark:text-slate-300 text-left px-1">
            หมวดหมู่อยอดฮิต:
          </h2>
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <Link
              href="/home?category=books"
              className="p-3 bg-pink-50/60 dark:bg-slate-800/60 hover:bg-pink-100/80 dark:hover:bg-slate-800 rounded-2xl border border-pink-100/50 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all flex items-center justify-center gap-1.5"
            >
              📚 หนังสือเรียน
            </Link>
            <Link
              href="/home?category=tech"
              className="p-3 bg-pink-50/60 dark:bg-slate-800/60 hover:bg-pink-100/80 dark:hover:bg-slate-800 rounded-2xl border border-pink-100/50 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all flex items-center justify-center gap-1.5"
            >
              💻 ไอที & อุปกรณ์
            </Link>
            <Link
              href="/home?category=fashion"
              className="p-3 bg-pink-50/60 dark:bg-slate-800/60 hover:bg-pink-100/80 dark:hover:bg-slate-800 rounded-2xl border border-pink-100/50 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all flex items-center justify-center gap-1.5"
            >
              👗 แฟชั่น นศ.
            </Link>
            <Link
              href="/home?category=dorm"
              className="p-3 bg-pink-50/60 dark:bg-slate-800/60 hover:bg-pink-100/80 dark:hover:bg-slate-800 rounded-2xl border border-pink-100/50 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all flex items-center justify-center gap-1.5"
            >
              🛵 ของใช้หอพัก
            </Link>
          </div>
        </div>

        {/* ปุ่มไปหน้าต่าง ๆ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <Link
            href="/home"
            className="py-3.5 px-6 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white font-extrabold text-sm rounded-2xl shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            เข้าสู่หน้าตลาด 🛒
          </Link>
          <Link
            href="/product"
            className="py-3.5 px-6 bg-white dark:bg-slate-900 border-2 border-pink-300 dark:border-slate-700 text-pink-600 dark:text-pink-400 font-extrabold text-sm rounded-2xl hover:bg-pink-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
          >
            ลงประกาศขาย 🏷️
          </Link>
        </div>

      </div>
    </main>
  );
}
              {/* 3. เงาใต้เยลลี่ด้านล่าง */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-pink-500/25 rounded-full blur-sm" />
            </div>

          </div>

          {/* หัวข้อหลัก */}
          <h1 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-slate-100 flex items-center justify-center gap-2">
            ตลาดยกวิทยเขต 🛍️
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            ศูนย์รวมซื้อ-ขาย แลกเปลี่ยนของใช้นักศึกษา นัดรับง่าย ปลอดภัย
          </p>
        </div>

        {/* หมวดหมู่อยอดฮิต */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-pink-100 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-left font-bold text-slate-700 dark:text-slate-200 text-sm">
            หมวดหมู่อยอดฮิต:
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/home?category=books"
              className="p-4 rounded-2xl bg-pink-50/60 dark:bg-slate-800/60 border border-pink-100 dark:border-slate-700 hover:bg-pink-100/60 transition-all flex items-center justify-center gap-2 font-bold text-xs text-slate-700 dark:text-slate-200"
            >
              📚 หนังสือเรียน
            </Link>
            <Link
              href="/home?category=tech"
              className="p-4 rounded-2xl bg-pink-50/60 dark:bg-slate-800/60 border border-pink-100 dark:border-slate-700 hover:bg-pink-100/60 transition-all flex items-center justify-center gap-2 font-bold text-xs text-slate-700 dark:text-slate-200"
            >
              💻 ไอที & อุปกรณ์
            </Link>
            <Link
              href="/home?category=fashion"
              className="p-4 rounded-2xl bg-pink-50/60 dark:bg-slate-800/60 border border-pink-100 dark:border-slate-700 hover:bg-pink-100/60 transition-all flex items-center justify-center gap-2 font-bold text-xs text-slate-700 dark:text-slate-200"
            >
              👗 แฟชั่น นศ.
            </Link>
            <Link
              href="/home?category=dorm"
              className="p-4 rounded-2xl bg-pink-50/60 dark:bg-slate-800/60 border border-pink-100 dark:border-slate-700 hover:bg-pink-100/60 transition-all flex items-center justify-center gap-2 font-bold text-xs text-slate-700 dark:text-slate-200"
            >
              🛵 ของใช้หอพัก
            </Link>
          </div>
        </div>

        {/* ปุ่มเมนูหลัก */}
        <div className="flex gap-3">
          <Link
            href="/home"
            className="flex-1 py-3.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-extrabold text-sm rounded-2xl shadow-md hover:opacity-95 transition-all text-center"
          >
            เข้าสู่หน้าตลาด 🛒
          </Link>
          <Link
            href="/product"
            className="flex-1 py-3.5 bg-white dark:bg-slate-900 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-slate-700 font-extrabold text-sm rounded-2xl shadow-sm hover:bg-pink-50 transition-all text-center"
          >
            ลงประกาศขาย 🏷️
          </Link>
        </div>

      </div>
    </main>
  );
}
