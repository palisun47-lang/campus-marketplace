'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ThemeToggle from '../ThemeToggle';

export default function AddProductPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('ลงประกาศขายสินค้าเรียบร้อยแล้ว!');
    router.push('/home');
  };

  return (
    <div className="min-h-screen max-w-md mx-auto border-x border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
      <header className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <Link href="/home" className="text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 font-medium">
          ← ย้อนกลับ
        </Link>
        <h1 className="text-base font-bold text-slate-800 dark:text-slate-100">ลงประกาศขายสินค้า</h1>
        <ThemeToggle />
      <header className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
  <div className="flex items-center gap-3">
    <Link href="/home" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
      ← ย้อนกลับ
    </Link>
    <h1 className="text-base font-bold text-slate-800 dark:text-slate-100">
      ลงประกาศขายสินค้า
    </h1>
  </div>
  <ThemeToggle />
</header>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
            ชื่อสินค้า / หัวข้อประกาศ
          </label>
          <input 
            type="text" 
            required 
            placeholder="เช่น หนังสือเรียน, เสื้อพละ" 
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
            หมวดหมู่
          </label>
          <select className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white">
            <option>หนังสือ / เอกสารเรียน</option>
            <option>เครื่องแต่งกาย / ยูนิฟอร์ม</option>
            <option>อุปกรณ์การเรียน / เครื่องเขียน</option>
            <option>อุปกรณ์ไอที / อิเล็กทรอนิกส์</option>
            <option>อื่นๆ</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
            ราคา (บาท)
          </label>
          <input 
            type="number" 
            required 
            placeholder="0.00" 
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
            รายละเอียดสินค้า
          </label>
          <textarea 
            rows={3} 
            placeholder="ระบุสภาพสินค้า สถานที่นัดรับ หรือช่องทางติดต่อ..." 
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 active:scale-95 transition-all mt-4 cursor-pointer"
        >
          ลงประกาศสินค้า
        </button>
      </form>
    </div>
  );
}