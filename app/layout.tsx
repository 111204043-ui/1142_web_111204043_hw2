import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCP Foundation - Terminal 入口",
  description: "SECURE. CONTAIN. PROTECT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* 1. body 背景改為極深色（zinc-950），模擬機房或黑夜。
        2. 自訂滑鼠選取顏色（selection:bg-red-900 selection:text-white），選取文字時會呈現血紅色。
      */}
      <body className="min-h-full flex justify-center w-full bg-zinc-950 p-4 font-mono selection:bg-red-900 selection:text-white">

        {/* 【主要文件容器】
          - bg-zinc-900: 卡片由原本的純白改為暗黑色調的終端機灰。
          - text-zinc-100: 文字預設為冷白。
          - border-2 border-red-900/50: 加上暗紅色的損壞警示邊框。
          - relative & overflow-hidden: 用來填入底層的壞掉文件雜訊。
        */}
        <div className="bg-zinc-900 text-zinc-100 max-w-[480px] w-full min-h-full rounded-xl p-6 border-2 border-red-900/50 relative overflow-hidden shadow-[0_0_20px_rgba(153,27,27,0.2)]">
          
          {/* 【壞掉的文件風格線條】
            純 CSS 產生的橫向掃描線（Scanlines），讓整個畫面的內容看起來像舊螢幕或壞掉的紙張。
          */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,23,0)_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] pointer-events-none z-50 opacity-40" />

          <div className="relative z-10 h-full flex flex-col">
            {children}
          </div>

        </div>

      </body>
    </html>
  );
}