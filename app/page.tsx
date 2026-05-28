"use client"
import Link from "next/link";
import Redacted from "@/component/Redacted"; // 確保路徑與你的專案結構一致

export default function Home() {
  // 階段名稱      路由規劃
  // 1. 歡迎畫面   /
  // 2. 注意事項   /warning
  // 3. 答題      /question
  // 4. 準備看結果 /prepare
  // 5. 看結果    /result

  return (
    <>
      {/* 主要外層容器：加入 font-mono 強化科技冰冷感 */}
      <div className="max-w-2xl mx-auto p-2 flex flex-col gap-4 text-left font-mono text-zinc-300">
        
        {/* 最上方：文字與圖片同高的區塊 */}
        <div className="flex justify-between items-center w-full border-b border-zinc-800 pb-2">
          
          {/* 1. 最上面的小字：加上 blinking 效果暗示連線不穩 */}
          <span className="text-xs tracking-wider text-zinc-500 animate-pulse">
            正在與基金會連線... [ERROR_0x8842]
          </span>

          {/* 2. 放置圖片的位置 */}
          <div className="w-6 h-6 shrink-0 bg-transparent overflow-hidden">
            <img 
              src="/SCP_Logo.png"
              alt="SCP 基金會符號" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* 3. 標題大字：利用雙重陰影做出類似螢幕壞掉、文字重疊錯位的 Glitch 恐怖視覺 */}
        <div className="my-2 relative">
          <h1 
            className="text-3xl font-black tracking-tighter text-zinc-100 uppercase"
            style={{
              textShadow: "2px 0 #991b1b, -1px -1px #1e3a8a"
            }}
          >
            SCP 收容等級評估測驗
          </h1>
          <span className="text-[9px] text-zinc-600 block mt-0.5 tracking-widest">
            SECURITY LEVEL: O5-AUTHORIZED ONLY
          </span>
        </div>

        {/* 4. 小警告標語：做成嚴肅的機密紅框，並加入被強行抹除的痕跡 */}
        <div className="border border-red-900/60 bg-red-950/20 p-3 text-[11px] text-red-400 leading-relaxed rounded-sm relative">
          <span className="font-bold block mb-1 text-red-500">
            警告：本測試受基金會資訊安全協定保護
          </span>
          <div>
            任何未授權意圖目視本頁面之人員，將被判定為
            <Redacted text="認知危害定點污染" />
            並立即啟動
            <Redacted text="反梗模制裁" />。
          </div>
          {/* 刻意弄髒、壞掉的文件飾條 */}
          <div className="absolute right-2 bottom-1 text-[8px] text-zinc-700 select-none">
            [DATA_EXPUNGED]
          </div>
        </div>

        {/* 5. 解釋小標題：將原本的 bg-gray-100 改為老舊公文的斑駁感 */}
        <div className="mt-2 p-4 bg-zinc-950/40 border-l-2 border-red-900 text-zinc-400 text-xs leading-relaxed space-y-3">
          <p>
            我們檢測到您所在的區域有
            <span className="text-zinc-100 font-bold underline decoration-red-700 decoration-wavy underline-offset-4 mx-1">
              未授權的心智波動
            </span>
            。
          </p>
          <p className="italic text-zinc-500 border-t border-zinc-800/60 pt-2 font-serif">
            「本測試將評估您的異常心理特質與現實錨定，以分類您的收容等級。為了您的安全，請不要
            <span className="blur-[1px] text-zinc-400 hover:blur-none transition-all duration-300 cursor-help">
              掙扎
            </span>
            。」
          </p>
        </div>

        {/* 6. 開始問卷的位置 */}
        <div className="flex flex-col gap-3 mt-6 border-t border-zinc-800 pt-4">
          <div className="flex items-center gap-4">
            <Link 
              className="flex-1 text-center bg-zinc-100 text-zinc-950 hover:bg-red-900 hover:text-zinc-100 px-6 py-3 text-xs font-bold tracking-widest transition-all duration-200 border border-zinc-100 hover:border-red-900 shadow-[3px_3px_0px_0px_rgba(153,27,27,0.4)] active:translate-x-0.5 active:translate-y-0.5" 
              href="/warning"
            >
              [ 接受評估 / START ]
            </Link>

          </div>
          
          {/* 底部壞掉的系統盲碼裝飾 */}
          <div className="text-[9px] text-zinc-700 text-center tracking-widest select-none mt-2">
            🎚️ ⎔ ⎔ 01100100 01101001 01100101 ⎔ ⎔ OVERRIDE_
          </div>
        </div>

      </div>
    </>
  );
}