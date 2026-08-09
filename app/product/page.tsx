'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '../ThemeToggle';

export default function AddProductPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('หนังสือ / เอกสารเรียน');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !price.trim()) {
      alert('กรุณากรอกชื่อสินค้าและราคาให้เรียบร้อยครับ');
      return;
    }
    alert('ลงประกาศสินค้าสำเร็จ!');
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center pb-12">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 min-h-screen shadow-xl flex flex-col">
        {/* Header */}
        <header className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-10">
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4 flex-1">
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
              ชื่อสินค้า / หัวข้อประกาศ
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="เช่น หนังสือเรียน, เสื้อพละ"
              className="w-full px-3 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
              หมวดหมู่
            </label>
            {/* เพิ่ม value ชัดเจนใน option เพื่อให้มือถือและไอแพดเลือกได้แม่นยำ */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="หนังสือ / เอกสารเรียน">หนังสือ / เอกสารเรียน</option>
              <option value="เครื่องแต่งกาย">เครื่องแต่งกาย</option>
              <option value="ไอที / แกดเจ็ต">ไอที / แกดเจ็ต</option>
              <option value="อุปกรณ์การเรียน">อุปกรณ์การเรียน</option>
              <option value="พาหนะ">พาหนะ</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
              ราคา (บาท)
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              className="w-full px-3 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
              รายละเอียดสินค้า
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="ระบุสภาพสินค้า สถานที่นัดรับ หรือช่องทางติดต่อ..."
              className="w-full px-3 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            ลงประกาศสินค้า
          </button>
        </form>
      </div>
    </main>
  );
}