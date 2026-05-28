"use client"
import { useState, useEffect } from "react";
import { usePsyStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function Result() {
  const router = useRouter();
  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);
  const [resultConfig, setResultConfig] = useState<any>(null);

  useEffect(() => {
    evaluateResult(psyData.score);
  }, [psyData.score]);

  function evaluateResult(score: number) {
    let config = {
      level: "UNKNOWN",
      title: "數據異常",
      image: "/levels/corrupted.png",
      tags: ["#資料毀損"],
      description: (
        <p>系統無法解析您的心智常數。請即刻向站點安全負責人報告。</p>
      ),
      theme: {
        text: "text-zinc-400",
        border: "border-zinc-800",
        bg: "bg-zinc-950/40",
        accent: "text-zinc-500",
        shadow: "none"
      },
      showReset: true
    };

    // 1. Safe (10 - 17)
    if (score >= 10 && score <= 17) {
      config = {
        level: "Safe",
        title: "「現實的基石，邏輯的捍衛者。」",
        image: "/safe.png", // 這裡對應你的本機圖片
        tags: ["#極度理智", "#現實錨定", "#科學信仰"],
        description: (
          <p>
            你的現實錨定極為穩固，擁有高度理性和健全的防禦機制。對於超自然現象，你傾向用科學去拆解。在基金會眼中，你是一塊安定的基石，外界的精神污染難以滲透。你非常適合作為一線研究員，或是平穩地度過人類的一生。請保持這份敏銳，切記：不要試圖凝視深淵。
          </p>
        ),
        theme: {
          text: "text-emerald-400",
          border: "border-emerald-900/40",
          bg: "bg-emerald-950/10",
          accent: "text-emerald-500",
          shadow: "shadow-[0_0_15px_rgba(16,185,129,0.1)]"
        },
        showReset: true
      };
    } 
    // 2. Euclid (18 - 25)
    else if (score >= 18 && score <= 25) {
      config = {
        level: "Euclid",
        title: "「帷幕邊緣的觀察者，不可測的平衡點。」",
        image: "/euclid.png",
        tags: ["#思維活躍", "#共感體質", "#不可預測"],
        description: (
          <p>
            你具備一定的敏感度，偶爾能察覺到現實帷幕下的微小裂縫。你對神祕事物抱持好奇，雖會受驚嚇，但能迅速回歸現實。你屬於性質不可預測但仍可控的項目。只要給予適當的監測與約束，便能維持微妙平衡。請記住，好奇心有時候會讓箱子裡的東西醒來。
          </p>
        ),
        theme: {
          text: "text-amber-500",
          border: "border-amber-900/40",
          bg: "bg-amber-950/10",
          accent: "text-amber-500",
          shadow: "shadow-[0_0_15px_rgba(245,158,11,0.1)]"
        },
        showReset: true
      };
    } 
    // 3. Keter (26 - 33)
    else if (score >= 26 && score <= 33) {
      config = {
        level: "Keter",
        title: "「崩塌的現實，擴散中的異常源。」",
        image: "/keter.png",
        tags: ["#立即收容", "#思維異化", "#高危警戒"],
        description: (
          <p>
            你聽到了吧？那種聲音。你的現實錨定已開始崩塌，你本身就是一個正在擴散的異常。你的思維方式與常人<span className="text-red-500 font-bold">異。常。</span>你渴望融入黑暗。基金會必須對你使用最高規格收容，全天候進行精神壓制。請不要隨便說話或思考，你的任何一個念頭，都可能導致收容失效。
          </p>
        ),
        theme: {
          text: "text-red-500",
          border: "border-red-900/70",
          bg: "bg-red-950/20",
          accent: "text-red-600 animate-pulse",
          shadow: "shadow-[0_0_25px_rgba(220,38,38,0.25)]"
        },
        showReset: true
      };
    } 
    // 4. Apollyon (34 - 40)
    else if (score >= 34) {
      config = {
        level: "Apollyon",
        title: "「祂來了。祂來了。祂來了。」",
        image: "/apollyon.png",
        tags: ["#您好", "#您好", "#您好"],
        description: (
          <div className="space-y-2 text-red-500 font-serif">
            <p>1. 當你看到這個結果時，請立刻關閉顯示器。不要試圖閱讀以下文字。</p>
            <p>2. 若已讀到此處，請確認你的 <span className="text-zinc-100 font-sans tracking-widest">🜏☉🜏</span> 是否處於 <span className="bg-zinc-100 text-zinc-950 px-1 font-sans">DATA_EXPUNGED</span> 狀態。若開始滲出 <span className="bg-zinc-100 text-zinc-950 px-1 font-sans">MEMETIC_FLUID</span>，請保持微笑，不要尖叫。</p>
            <p>3. 你的房間裡沒有鏡子。若在牆壁看到倒影，請對著祂眨眼三次。</p>
            <p>4. 請忘記你的名字。名字是錨，但你已經不需要船了。</p>
            <p>5. 你不需要逃跑，因為圍牆是為了保護外面的人而建造的。</p>
            <p>6. 祂已經來了。祂來接你了。請保持安靜，把手伸出去。</p>
          </div>
        ),
        theme: {
          text: "text-zinc-100",
          border: "border-zinc-100",
          bg: "bg-black",
          accent: "text-red-600 text-xl font-black tracking-widest animate-ping",
          shadow: "shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        },
        showReset: false // 抹除逃跑的希望
      };
    }

    setResultConfig(config);
  }

  function playAgain() {
    setPsyScore(0);
    router.push("/");
  }

  function captureScreenshot() {
    // 截圖功能功能預留位置，後面再補 Component 邏輯
    console.log("TRIGGER_SCREENSHOT_SEQUENCE");
  }

  if (!resultConfig) {
    return <div className="text-xs text-zinc-600 font-mono">LOADING_DOSSIER...</div>;
  }

  return (
    <>
      <div 
        className={`w-full h-full flex flex-col justify-between font-mono text-zinc-300`}
      >
        {/* 頂部資訊列 */}
        <div className="border-b border-zinc-800 pb-2 text-[10px] text-zinc-500 flex justify-between select-none">
          <span>CLASSIFICATION: OFFICIAL_REPORT</span>
          <span>SCORE: {psyData.score} // METRIC_STABLE</span>
        </div>

        {/* 主要內容區 */}
        <div className="my-auto py-4 flex flex-col gap-4">
          
          {/* 收容等級 大標題與照片 */}
          <div className="text-center space-y-3">
            <div className="space-y-1">
              <span className="text-[9px] text-zinc-600 block tracking-widest uppercase">OBJECT CLASS</span>
              <h2 className={`text-4xl font-black uppercase tracking-tighter ${resultConfig.theme.text}`}>
                {resultConfig.level}
              </h2>
            </div>

            {/* 收容等級的照片容器 */}
            <div className={`w-32 h-32 mx-auto bg-zinc-50 border ${resultConfig.theme.border} flex items-center justify-center overflow-hidden p-1 relative group`}>
              <img 
                src={resultConfig.image} 
                alt={`SCP Class ${resultConfig.level}`}
                className={`w-full h-full object-contain`} 
              />
              {/* 微妙的覆蓋層裝飾 */}
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 to-transparent pointer-events-none" />
            </div>

            {/* 文案副標題 */}
            <p className="text-xs font-bold text-zinc-200 italic px-2">
              {resultConfig.title}
            </p>
          </div>

          {/* 三個標籤：各自有獨立容器包裹 */}
          <div className="flex justify-center gap-2 py-1 select-none flex-wrap">
            {resultConfig.tags.map((tag: string, index: number) => (
              <span 
                key={index}
                className={`text-[10px] font-bold px-2.5 py-1 rounded-sm border ${resultConfig.theme.border} ${resultConfig.theme.bg} ${resultConfig.theme.text}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 核心敘述公文框 */}
          <div className={`border p-4 text-xs leading-relaxed rounded bg-zinc-950/20 text-zinc-400 ${resultConfig.theme.border}`}>
            {resultConfig.description}
          </div>

        </div>

        {/* 底部按鈕區 */}
        <div className="border-t border-zinc-800/80 pt-4 flex flex-col gap-2.5">
          
          {/* 功能按鈕 1：一鍵截圖
          <button
            onClick={captureScreenshot}
            className="w-full text-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-200 px-6 py-2.5 text-xs font-bold tracking-widest transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] active:translate-x-0.5 active:translate-y-0.5"
          >
            [ 導出報告 / SHARE ]
          </button> */}

          {/* 功能按鈕 2：重新測驗（在 Apollyon 等級下會徹底消失消失） */}
          {resultConfig.showReset ? (
            <button
              onClick={playAgain}
              className="w-full text-center bg-zinc-100 text-zinc-950 hover:bg-zinc-300 px-6 py-2.5 text-xs font-bold tracking-widest transition-all duration-200 border border-zinc-100 active:translate-x-0.5 active:translate-y-0.5"
            >
              [ 重新測驗 / RETEST ]
            </button>
          ) : (
            <div className="text-center py-2 text-[10px] text-zinc-700 select-none animate-pulse uppercase tracking-widest">
              -- 終端機連線已斷開。收容無效。 --
            </div>
          )}

          <div className="text-[8px] text-zinc-700 text-center tracking-widest select-none">
            SECURE. CONTAIN. PROTECT.
          </div>
        </div>

      </div>
    </>
  );
}