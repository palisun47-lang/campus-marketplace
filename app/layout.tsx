import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
// 1. Import Provider
import { ThemeProvider } from "next-themes";

const prompt = Prompt({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'thai'],
});

export const metadata: Metadata = {
  title: "ตลาดนัดวิทยาลัย",
  description: "ระบบซื้อขายสินค้าในวิทยาลัย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${prompt.className} bg-slate-50 text-slate-900`}>
        {/* 2. ครอบ children ด้วย ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ตลาดนัดวิทยาลัย",
  description: "ระบบซื้อขายสินค้าในวิทยาลัย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}