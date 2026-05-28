"use client"
import Link from "next/link";

export default function Prepare() {
  return (
    <>
      {/* 外層容器：
        移除所有紅光發光，改回極度冰冷、規範的公文排版。
        利用 `tracking-wide` 模擬早期打印機或官方檔案的嚴肅感。
      */}
      <div className="w-full h-full flex flex-col justify-between font-mono text-zinc-400 select-none py-4">
        
        {/* 頂部：官方解密協議頭部 */}
        <div className="border-b border-zinc-800 pb-3 text-[10px] text-zinc-500 tracking-widest flex justify-between">
          <span>SCP_FOUNDATION // DECIPHER_PROT_v4.02</span>
          <span className="text-zinc-600">STATUS: SECURE</span>
        </div>

        {/* 中間：冷靜、簡單的數據處理畫面 */}
        <div className="my-auto py-10 space-y-6 text-center">
          
          {/* 大標題：乾淨，完全沒有先前的 Glitch 錯位 */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold tracking-widest text-zinc-200 uppercase">
              評估數據封包已生成
            </h1>
            <p className="text-[10px] text-zinc-600 tracking-normal">
              PSYCHOLOGICAL ANCHORING DATA COMPLETELY BUFFERED
            </p>
          </div>

          {/* 簡單的靜態模擬區塊，假裝剛剛的異常從未發生 */}
          <div className="max-w-[320px] mx-auto p-4 bg-zinc-950/20 border border-zinc-800 text-left text-[11px] text-zinc-500 space-y-1.5 font-mono">
            <div>&gt; 心智波動波形：<span className="text-zinc-400">已鎖定</span></div>
            <div>&gt; 認知危害殘留：<span className="text-zinc-400">0.00% (STABLE)</span></div>
            <div>&gt; 現實錨定常數：<span className="text-zinc-400">1.000 (NORMAL)</span></div>
            <div className="text-[10px] text-zinc-600 pt-1 border-t border-zinc-900 mt-2">
              * 系統提示：請確保您目前處於獨立且光線充足的物理空間。
            </div>
          </div>

        </div>

        {/* 底部按鈕區：極簡的單色按鈕，懸停時不變紅，而是變灰，假裝一切很正常 */}
        <div className="flex flex-col gap-3 border-t border-zinc-800/60 pt-4">
          <Link 
            className="w-full text-center bg-zinc-100 text-zinc-950 hover:bg-zinc-300 px-6 py-3 text-xs font-bold tracking-widest transition-all duration-200 border border-zinc-100 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)] active:translate-x-0.5 active:translate-y-0.5" 
            href="/result"
          >
            [ 解密評估報告 / ACCESS REPORT ]
          </Link>
          
          <div className="text-[8px] text-zinc-700 text-center tracking-widest uppercase">
            SECURE. CONTAIN. PROTECT.
          </div>
        </div>

      </div>
    </>
  );
}