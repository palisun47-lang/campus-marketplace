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
    alert('ลงประกาศสินค้าสำเร็จ!');
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 min-h-screen shadow-xl flex flex-col">
        {/* Header */}
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
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
              หมวดหมู่
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>หนังสือ / เอกสารเรียน</option>
              <option>เครื่องแต่งกาย</option>
              <option>ไอที / แกดเจ็ต</option>
              <option>อุปกรณ์การเรียน</option>
              <option>พาหนะ</option>
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
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-auto w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg transition-colors"
          >
            ลงประกาศสินค้า
          </button>
        </form>
      </div>
    </main>
  );
}