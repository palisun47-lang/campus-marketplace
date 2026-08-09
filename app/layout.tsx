import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
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
      <body className={`${prompt.className} antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}