'use client';

import { useState } from 'react';
import Link from 'next/link';

const emojiList = ['📱', '💻', '📚', '👗', '🛵', '🎧', '🍲', '🖥️', '⌨️', '🥻', '🛋️', '🧊', '👟', '📖', '👔'];
const locationPresets = ['โรงอาหารกลาง', 'หอสมุดกลาง', 'ตึกวิศวะ', 'ตึกบริหารธุรกิจ', 'หน้าหอพัก A/B'];
const tagPresets = ['#สภาพนางฟ้า', '#ส่งฟรีหอพัก', '#ส่งต่อถูกๆ'];

export default function AddProductPage() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('books');
  const [tag, setTag] = useState('#สภาพนางฟ้า');
  const [location, setLocation] = useState('โรงอาหารกลาง');
  const [seller, setSeller] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('📱');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-pink-50/40 dark:bg-slate-950 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* หัวข้อหน้า */}
        <div className="flex justify-between items-center">
          <Link href="/home" className="text-xs font-bold text-pink-600 hover:underline">
            ← ย้อนกลับไปหน้าตลาด
          </Link>
          <span className="text-xs font-extrabold text-pink-500 bg-pink-100/80 px-3 py-1 rounded-full">
            ✨ เพิ่มสินค้าใหม่
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* 📝 ฟอร์มกรอกข้อมูล (ฝั่งซ้าย) */}
          <div className="md:col-span-7 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-pink-100 dark:border-slate-800 shadow-sm space-y-5">
            <h1 className="text-xl font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
              🏷️ ลงประกาศขายสินค้า
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* เลือกไอคอนสินค้า */}
              <div className="space-y-2">
                <label className="font-bold text-slate-600 dark:text-slate-300">
                  1. เลือกไอคอนแทนรูปสินค้า:
                </label>
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                  {emojiList.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`text-2xl p-2.5 rounded-2xl border transition-all ${
                        selectedEmoji === emoji
                          ? 'bg-pink-100 border-pink-400 scale-110 shadow-sm'
                          : 'bg-slate-50 border-slate-100 hover:bg-pink-50'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* ชื่อสินค้า */}
              <div className="space-y-1">
                <label className="font-bold text-slate-600 dark:text-slate-300">2. ชื่อสินค้าที่ต้องการขาย *</label>
                <input
                  type="text"
                  required
                  placeholder="เช่น iPad Air M1, หนังสือ Calculus, ตู้เย็นจิ๋ว..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 rounded-2xl bg-pink-50/40 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 focus:outline-none focus:border-pink-400"
                />
              </div>

              {/* ราคา & หมวดหมู่ */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-600 dark:text-slate-300">3. ราคา (บาท) *</label>
                  <input
                    type="number"
                    required
                    placeholder="เช่น 150, 1200"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-3 rounded-2xl bg-pink-50/40 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 focus:outline-none focus:border-pink-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-600 dark:text-slate-300">4. หมวดหมู่ *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 rounded-2xl bg-pink-50/40 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 focus:outline-none focus:border-pink-400 font-bold text-slate-700 dark:text-slate-200"
                  >
                    <option value="books">📚 หนังสือเรียน</option>
                    <option value="tech">💻 ไอที & อุปกรณ์</option>
                    <option value="fashion">👗 แฟชั่น นศ.</option>
                    <option value="dorm">🛵 ของใช้หอพัก</option>
                  </select>
                </div>
              </div>

              {/* เลือกแท็กสินค้า */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-600 dark:text-slate-300">5. แท็กสินค้า:</label>
                <div className="flex gap-2">
                  {tagPresets.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTag(t)}
                      className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                        tag === t ? 'bg-pink-500 text-white' : 'bg-slate-100 text-slate-500 hover:bg-pink-50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* สถานที่นัดรับด่วน */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-600 dark:text-slate-300">6. จุดนัดรับใน ม.:</label>
                <div className="flex flex-wrap gap-1.5">
                  {locationPresets.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setLocation(loc)}
                      className={`px-2.5 py-1 rounded-lg border text-[11px] transition-all ${
                        location === loc
                          ? 'bg-pink-100 border-pink-400 text-pink-700 font-bold'
                          : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      📍 {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* ข้อมูลผู้ขาย & ช่องทางติดต่อ */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-600 dark:text-slate-300">7. ชื่อผู้ขาย / สาขา *</label>
                  <input
                    type="text"
                    required
                    placeholder="เช่น พี่เกรซ วิศวะ ปี 3"
                    value={seller}
                    onChange={(e) => setSeller(e.target.value)}
                    className="w-full p-3 rounded-2xl bg-pink-50/40 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 focus:outline-none focus:border-pink-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-600 dark:text-slate-300">8. ลิงก์ติดต่อ / Line ID *</label>
                  <input
                    type="text"
                    required
                    placeholder="เช่น Line: grace_ku"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full p-3 rounded-2xl bg-pink-50/40 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 focus:outline-none focus:border-pink-400"
                  />
                </div>
              </div>

              {/* รายละเอียดเพิ่มเติม */}
              <div className="space-y-1">
                <label className="font-bold text-slate-600 dark:text-slate-300">9. รายละเอียดสินค้า</label>
                <textarea
                  rows={3}
                  placeholder="บอกสภาพสินค้า สภาพการใช้งาน เหตุผลที่ส่งต่อ..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 rounded-2xl bg-pink-50/40 dark:bg-slate-800 border border-pink-100 dark:border-slate-700 focus:outline-none focus:border-pink-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 hover:opacity-95 text-white font-extrabold text-sm rounded-2xl shadow-lg transition-transform active:scale-95"
              >
                ✨ ยืนยันลงประกาศขาย
              </button>
            </form>
          </div>

          {/* 👁️ Live Preview การ์ดแสดงผลสด (ฝั่งขวา) */}
          <div className="md:col-span-5 space-y-3 sticky top-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
              <span>👁️ ตัวอย่างประกาศที่จะแสดงบนหน้าเว็บ:</span>
              <span className="text-pink-500 animate-pulse">• เรียลไทม์</span>
            </div>

            <div className="bg-white/90 dark:bg-slate-900/90 rounded-3xl p-5 border-2 border-pink-300 dark:border-slate-700 shadow-md space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-5xl p-3 bg-pink-50 dark:bg-slate-800 rounded-2xl animate-bounce">
                  {selectedEmoji}
                </span>
                <span className="text-xs font-bold text-pink-500 bg-pink-100/80 px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-base text-slate-800 dark:text-slate-100">
                  {title || 'ชื่อสินค้าของคุณจะแสดงตรงนี้...'}
                </h3>
                <p className="text-xl font-black text-pink-600 dark:text-pink-400">
                  ฿{price ? Number(price).toLocaleString() : '0'}
                </p>
              </div>

              <div className="text-[11px] font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg inline-block">
                📍 นัดรับ: {location}
              </div>

              <p className="text-xs text-slate-500 line-clamp-2 bg-pink-50/50 p-2.5 rounded-xl">
                {description || 'รายละเอียดสินค้าแบบย่อ...'}
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400">
                <span>👤 {seller || 'ชื่อผู้ลงขาย'}</span>
                <span className="text-pink-500 font-bold">ดูรายละเอียด →</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 🎉 Modal แจ้งเตือนเมื่อลงประกาศสำเร็จ */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl border border-pink-200 animate-in fade-in zoom-in">
            <div className="text-6xl animate-bounce">🎉</div>
            <h2 className="text-xl font-black text-slate-800 dark:text-slate-100">ลงประกาศสำเร็จแล้ว!</h2>
            <p className="text-xs text-slate-500">
              สินค้าของคุณถูกลงประกาศในตลาดวิทยเขตเรียบร้อยแล้ว เพื่อนๆ ใน ม. สามารถทักแชตหานัดรับได้ทันที
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/home"
                className="block w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-extrabold text-xs rounded-xl shadow-md"
              >
                🛒 ไปดูสินค้าที่หน้าตลาด
              </Link>
              <button
                onClick={() => setIsSubmitted(false)}
                className="block w-full py-2.5 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                ➕ ลงขายสินค้าเพิ่มอีกชิ้น
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
