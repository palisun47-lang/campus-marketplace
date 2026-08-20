'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 dark:from-slate-950 dark:via-purple-950/50 dark:to-slate-900 text-slate-800 dark:text-slate-100 flex flex-col items-center justify-center p-4 overflow-hidden selection:bg-pink-300">
      
      {/* 🔮 CSS Keyframes สำหรับแอนิเมชันเยลลี่ดึ๋งๆ และมิติ 3D */}
      <style>{`
        @keyframes jelly-bounce {
          0%, 100% { transform: scale(1, 1); }
          25% { transform: scale(0.92, 1.08) translateY(-4px); }
          50% { transform: scale(1.08, 0.92) translateY(2px); }
          75% { transform: scale(0.97, 1.03); }
        }
        @keyframes float-orb {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-18px) rotate(5deg) scale(1.05); }
        }
        .animate-jelly-loop {
          animation: jelly-bounce 2.5s infinite ease-in-out;
        }
        .animate-float {
          animation: float-orb 5s infinite ease-in-out;
        }
        .jelly-btn {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
        }
        .jelly-btn:hover {
          transform: scale(1.06, 0.94) translateY(-4px);
        }
        .jelly-btn:active {
          transform: scale(0.92, 1.08) translateY(2px);
        }
      `}</style>

      {/* 🌈 แสงไฟละมุนด้านหลัง (Ambient Glowing 3D Orbs) */}
      <div className="absolute top-1/4 -left-16 w-72 h-72 bg-pink-300/60 dark:bg-pink-600/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-16 w-80 h-80 bg-purple-300/60 dark:bg-purple-600/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '-2.5s' }} />
      <div className="absolute top-12 right-20 w-56 h-56 bg-sky-200/60 dark:bg-sky-600/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '-1.2s' }} />

      {/* 🍬 การ์ดหลักทรงเยลลี่ 3D (3D Clay/Gel Card) */}
      <div className="relative w-full max-w-md bg-white/75 dark:bg-slate-900/75 backdrop-blur-2xl rounded-[2.5rem] p-7 md:p-9 
        shadow-[0_20px_50px_rgba(244,114,182,0.25),0_10px_25px_rgba(168,85,247,0.15),inset_0_2px_4px_rgba(255,255,255,0.9)] 
        dark:shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.15)] 
        border border-white/80 dark:border-slate-800/80 flex flex-col items-center text-center space-y-6 z-10">

        {/* แถบด้านบน & ปุ่มสลับโหมด */}
        <div className="w-full flex justify-between items-center pb-4 border-b border-pink-100/80 dark:border-slate-800">
          <span className="text-[11px] font-extrabold text-pink-500 dark:text-pink-400 tracking-wider uppercase bg-pink-100/80 dark:bg-pink-950/60 px-3.5 py-1.5 rounded-full shadow-inner border border-pink-200/50 dark:border-pink-800/30">
            Campus Marketplace
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-400">โหมด:</span>
            <div className="jelly-btn inline-block">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* 🛍️ โลโก้อิโมจิเยลลี่ 3D ดึ๋งๆ */}
        <div className="relative group cursor-pointer jelly-btn">
          <div className="w-24 h-24 bg-gradient-to-tr from-pink-400 via-rose-300 to-purple-400 rounded-[2rem] flex items-center justify-center 
            shadow-[0_12px_28px_rgba(244,114,182,0.45),inset_0_4px_6px_rgba(255,255,255,0.7),inset_0_-4px_6px_rgba(0,0,0,0.15)] 
            border-2 border-white/70 animate-jelly-loop">
            <span className="text-4xl filter drop-shadow-md select-none">🛍️✨</span>
          </div>
          {/* เงาสะท้อนใต้อิโมจิ */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-pink-400/30 rounded-full blur-md" />
        </div>

        {/* ข้อความหัวเรื่อง */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-300 drop-shadow-sm">
            ตลาดยกวิทยเขตสุดน่ารัก
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium px-2">
            แหล่งรวมใจสายช็อป นักศึกษาขายง่าย รุ่นพี่อยากส่งต่อ ช็อปง่าย ปลอดภัย พิกัดโดนใจ! 💖
          </p>
        </div>

        {/* 🔘 ปุ่มกดเยลลี่นูน 3D (Jelly Buttons) */}
        <div className="w-full space-y-3.5 pt-2">
          {/* ปุ่มหลัก */}
          <Link
            href="/home"
            className="jelly-btn w-full flex items-center justify-center py-4 px-6 
              bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 
              text-white font-extrabold text-sm md:text-base rounded-2xl 
              shadow-[0_10px_22px_rgba(244,114,182,0.4),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_0_rgba(0,0,0,0.15)] 
              border border-white/50 tracking-wide"
          >
            เข้าสู่หน้าหลัก 🚀
          </Link>
          
          {/* ปุ่มรอง */}
          <Link
            href="/product"
            className="jelly-btn w-full flex items-center justify-center py-4 px-6 
              bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 
              text-slate-700 dark:text-slate-200 font-extrabold text-sm md:text-base rounded-2xl 
              shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-3px_0_rgba(0,0,0,0.06)] 
              dark:shadow-[0_8px_20px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)] 
              border border-pink-100 dark:border-slate-700 tracking-wide"
          >
            ดูสินค้าทั้งหมด 📦
          </Link>
        </div>

      </div>
    </main>
  );
}
