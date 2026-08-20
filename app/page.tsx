import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-pink-50/40 dark:bg-slate-950 p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-2xl w-full space-y-8 text-center relative z-10">
        
        {/* 🍮 หัวข้อหลัก + ไอคอนเยลลี่ดุ๊กดิ๊ก */}
        <div className="space-y-3">
          <div className="inline-block text-6xl animate-bounce hover:scale-125 transition-transform cursor-pointer select-none">
            🍮
          </div>
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
