'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function LandingPage() {
  // 🏷️ รายการหมวดหมู่ยอดฮิต (จะพาส่งไปยังหน้าสินค้า /product พร้อมกรองหมวดหมู่)
  const categories = [
    { name: '📚 หนังสือเรียน', href: '/product?category=books' },
    { name: '💻 ไอที & อุปกรณ์', href: '/product?category=tech' },
    { name: '👗 แฟชั่น นศ.', href: '/product?category=fashion' },
    { name: '🛵 ของใช้หอพัก', href: '/product?category=dorm' },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 dark:from-slate-950 dark:via-purple-950/50 dark:to-slate-900 text-slate-800 dark:text-slate-100 flex flex-col items-center justify-center p-4 overflow-hidden selection:bg-pink-300">
      
      {/* 🔮 CSS Custom Animations & 3D Jelly Effects */}
      <style>{`
        @keyframes jelly-bounce {
          0%, 100% { transform: scale(1, 1); }
          25% { transform: scale(0.92, 1.08) translateY(-4px); }
          50% { transform: scale(1.08, 0.92) translateY(2px); }
          75% { transform: scale(0.97, 1.03); }
        }
        @keyframes float-orb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-16px) scale(1.05); }
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-jelly-loop { animation: jelly-bounce 2.5s infinite ease-in-out; }
        .animate-float { animation: float-orb 5s infinite ease-in-out; }
        .animate-marquee { display: inline-block; animation: marquee 14s linear infinite; }
        .jelly-btn {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
        }
        .jelly-btn:hover { transform: scale(1.05, 0.95) translateY(-3px); }
        .jelly-btn:active { transform: scale(0.92, 1.08) translateY(2px); }
      `}</style>

      {/* 📢 แถบข่าวสารเลื่อนสดด้านบนสุด (Marquee Ticker) */}
      <div className="absolute top-4 w-full max-w-sm bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/80 dark:border-slate-800 shadow-sm overflow-hidden whitespace-nowrap text-xs text-pink-600 dark:text-pink-300 font-medium z-20">
        <span className="animate-marquee">
          🔥 อัปเดตสด: มีเพื่อนลงขาย "iPad Air M1" • "หนังสือ Calc 1 ส่งต่อ 100.-" • "ตู้เย็นหอพักสภาพดี" 🛍️
        </span>
      </div>

      {/* 🌈 แสงไฟเรืองแสงด้านหลัง (Ambient Background) */}
      <div className="absolute top-1/4 -left-16 w-72 h-72 bg-pink-300/60 dark:bg-pink-600/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-16 w-80 h-80 bg-purple-300/60 dark:bg-purple-600/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '-2.5s' }} />

      {/* 🍬 การ์ดหลักทรงเยลลี่ 3D (Claymorphism Card) */}
      <div className="relative w-full max-w-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-8 
        shadow-[0_20px_50px_rgba(244,114,182,0.25),0_10px_25px_rgba(168,85,247,0.15),inset_0_2px_4px_rgba(255,255,255,0.9)] 
        dark:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.15)] 
        border border-white/80 dark:border-slate-800/80 flex flex-col items-center text-center space-y-5 z-10 mt-8">

        {/* แถบหัวข้อ & ปุ่มสลับโหมด Theme Toggle */}
        <div className="w-full flex justify-between items-center pb-3 border-b border-pink-100/80 dark:border-slate-800">
          <span className="text-[11px] font-extrabold text-pink-500 dark:text-pink-400 tracking-wider uppercase bg-pink-100/80 dark:bg-pink-950/60 px-3 py-1 rounded-full shadow-inner border border-pink-200/50">
            Campus Marketplace
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">โหมด:</span>
            <div className="jelly-btn inline-block">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* 🛍️ โลโก้เยลลี่ 3D + Badge ยืนยันตัวตน นศ. */}
        <div className="relative group cursor-pointer jelly-btn">
          <div className="w-20 h-20 bg-gradient-to-tr from-pink-400 via-rose-300 to-purple-400 rounded-[2rem] flex items-center justify-center 
            shadow-[0_12px_28px_rgba(244,114,182,0.45),inset_0_4px_6px_rgba(255,255,255,0.7),inset_0_-4px_6px_rgba(0,0,0,0.15)] 
            border-2 border-white/70 animate-jelly-loop">
            <span className="text-3xl filter drop-shadow-md select-none">🛍️✨</span>
          </div>
          <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm flex items-center gap-1">
            ✓ ยืนยัน นศ.
          </span>
        </div>

        {/* ข้อความหัวเรื่อง */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-300 dark:to-purple-300">
            ตลาดยกวิทยเขตสุดน่ารัก
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium px-2">
            แหล่งรวมใจสายช็อป นักศึกษาขายง่าย ส่งต่อไว ปลอดภัย พิกัดโดนใจ! 💖
          </p>
        </div>

        {/* 🏷️ ปุ่มหมวดหมู่ด่วนทรงเยลลี่ (Quick Categories) */}
        <div className="w-full pt-1">
          <p className="text-[11px] font-bold text-slate-400 mb-2 text-left">หมวดหมู่ยอดฮิต:</p>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="jelly-btn text-xs font-bold py-2 px-3 bg-pink-50/80 dark:bg-slate-800/80 hover:bg-pink-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl border border-pink-200/50 dark:border-slate-700 shadow-sm flex items-center justify-center"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* 🔘 ปุ่มดำเนินการหลัก (Main Buttons) */}
        <div className="w-full space-y-3 pt-2">
          <Link
            href="/home"
            className="jelly-btn w-full flex items-center justify-center py-3.5 px-6 
              bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 
              text-white font-extrabold text-sm rounded-2xl 
              shadow-[0_10px_22px_rgba(244,114,182,0.4),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_0_rgba(0,0,0,0.15)] 
              border border-white/50"
          >
            เข้าสู่หน้าหลัก 🚀
          </Link>
          
          <Link
            href="/product"
            className="jelly-btn w-full flex items-center justify-center py-3.5 px-6 
              bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 
              text-slate-700 dark:text-slate-200 font-extrabold text-sm rounded-2xl 
              shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-3px_0_rgba(0,0,0,0.06)] 
              dark:shadow-[0_8px_20px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)] 
              border border-pink-100 dark:border-slate-700"
          >
            ลงประกาศขายสินค้า 🏷️
          </Link>
        </div>

        {/* 👥 ตัวเลขสถิติออนไลน์ */}
        <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>มีนักศึกษาออนไลน์อยู่ <b>142 คน</b> ในขณะนี้</span>
        </div>

      </div>
    </main>
  );
}
