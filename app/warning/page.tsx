"use client"
import Link from "next/link";

export default function Warning() {
  return (
    <>
      {/* 主要外層容器 */}
      <div className="max-w-2xl mx-auto p-2 flex flex-col gap-4 text-left font-mono text-zinc-300 relative overflow-hidden">
        
        {/* =================【優化後的響應式純紅字效果】================= */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50 text-center select-none p-4">
          {/* text-2xl md:text-4xl -> 手機版變小，電腦版恢復大字
              leading-8 md:leading-10 -> 隨字體調整行高，防止字重疊
              max-w-xs md:max-w-none -> 限制手機版寬度，強迫它在安全範圍內折行 */}
          <h2 className="text-red-600 font-extrabold text-4xl tracking-tight leading-10 [text-shadow:0_0_10px_rgba(220,38,38,0.5)] max-w-xs md:max-w-none">
            測驗途中周圍有任何動靜都請勿查看
          </h2>
        </div>
        {/* ================================================= */}

        {/* 1. 最上方小字區：加上 break-all 確保黑塊自動折行 */}
        <div className="flex justify-between items-center w-full border-b border-zinc-800 pb-2 gap-2">
          <span className="text-xs tracking-wider text-zinc-500 break-all">
            █████████████████████████
          </span>

          <div className="w-6 h-6 shrink-0 bg-transparent overflow-hidden">
            <img 
              src="/SCP_Logo.png"
              alt="SCP 基金會符號" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 2. 標題大字區 */}
        <div className="my-2 relative break-all">
          <h1 
            className="text-3xl font-black tracking-tighter text-zinc-100 uppercase"
            style={{
              textShadow: "2px 0 #991b1b, -1px -1px #1e3a8a"
            }}
          >
            ███ ████████
          </h1>
          <span className="text-[9px] text-zinc-600 block mt-0.5 tracking-widest break-all">
            ████████ ██████ █████████████ ████
          </span>
        </div>

        {/* 3. 小警告標語區：加上 break-all 防止長黑條撐破紅框 */}
        <div className="border border-red-900/60 bg-red-950/20 p-3 text-[11px] text-red-400 leading-relaxed rounded-sm relative break-all">
          <span className="font-bold block mb-1 text-red-500">
            ██████████████████
          </span>
          <div className="break-all">
            ███████████████████████████████████████
          </div>
            
          <div className="absolute right-2 bottom-1 text-[8px] text-zinc-700 select-none">
            ███████████████
          </div>
        </div>

        {/* 4. 解釋小標題區 */}
        <div className="mt-2 p-4 bg-zinc-950/40 border-l-2 border-red-900 text-zinc-400 text-xs leading-relaxed space-y-3 break-all">
          <p>
            █████████████████████
          </p>
          <p className="italic text-zinc-500 border-t border-zinc-800/60 pt-2 font-serif break-all">
            ████████████████████████████████████████全人類的安全██████████████████
          </p>
        </div>

        {/* 5. 開始問卷的位置 */}
        <div className="flex flex-col gap-3 mt-6 border-t border-zinc-800 pt-4 w-full">
          <div className="flex items-center gap-4 w-full">
            <Link 
              className="flex-1 text-center bg-zinc-100 text-zinc-950 hover:bg-red-900 hover:text-zinc-100 px-6 py-3 text-xs font-bold tracking-widest transition-all duration-200 border border-zinc-100 hover:border-red-900 shadow-[3px_3px_0px_0px_rgba(153,27,27,0.4)] active:translate-x-0.5 active:translate-y-0.5" 
              href="/question"
            >
              [ 接受評估 / START ]
            </Link>
          </div>
          
          {/* 底部裝飾：調整為有空格的字串，使其天然具備換行響應能力 */}
          <div className="text-[9px] text-zinc-700 text-center tracking-widest select-none mt-2 break-all">
            █ █ █ ████████ ████████ ████████ █ █ █████████
          </div>
        </div>

      </div>
    </>
  );
}