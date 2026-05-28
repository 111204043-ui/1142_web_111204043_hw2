"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePsyStore } from "../../store/store";

export default function Question() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);

  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);

  // 計算目前的精神污染指數（0 ~ 9 級），用來動態影響 UI 驚悚度
  const pollutionLevel = questionIndex;

  // 用於選項的前綴代碼
  const optionPrefix = ["A", "B", "C", "D"];

  function nextQuestion(optionIndex: number) {
    const currentQuestion = psyData.quizData[questionIndex];
    const selectedValue = currentQuestion.options[optionIndex].value;

    // 修正非同步狀態：計算正確的新分數並存入 Zustand
    const newScore = psyData.score + selectedValue;
    setPsyScore(newScore);

    if (questionIndex < psyData.quizData.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // 進入最後一題後跳轉至準備頁
      router.push("/prepare");
    }
  }

  // 取得目前題目物件
  const currentQuiz = psyData.quizData[questionIndex];

  if (!currentQuiz) return <div className="text-red-500 font-mono p-4">ERR: DATA_CORRUPTED</div>;

  return (
    <>
      {/* 動態調整外層容器：隨著污染等級（題數）提高，讓紅光陰影越來越強大，並在後半段（第 6 題起）隨機產生輕微搖晃感 */}
      <div 
        className={`w-full h-full flex flex-col justify-between font-mono text-zinc-300 select-none`}
        style={{
          // 隨著題數增加，將邊框陰影的發光範圍擴大，模擬終端機過載
          boxShadow: `inset 0 0 ${pollutionLevel * 5}px rgba(153, 27, 27, ${0.1 + pollutionLevel * 0.05})`
        }}
      >
        
        {/* 頂部狀態列：呈現當前系統監控狀態 */}
        <div className="flex justify-between items-center w-full border-b border-zinc-800/80 pb-3 text-[10px] text-zinc-500 tracking-wider">
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${pollutionLevel >= 7 ? "bg-red-600 animate-ping" : "bg-emerald-600 animate-pulse"}`}></span>
          </div>
          <div>
            <span>[ SECTION: {String(questionIndex + 1).padStart(2, '0')} / 10 ]</span>
          </div>
        </div>

        {/* 中間：題目主體區塊 */}
        <div className="my-auto py-8 flex flex-col gap-6">
          
          {/* 題號與題目名稱 */}
          <div className="relative">
            {/* 後方淡淡的偽影襯托 */}
            <span className="absolute -top-4 -left-2 text-[28px] font-black text-zinc-900 select-none">
              Q{questionIndex + 1}
            </span>
            
            {/* 實際題目：後半段題目（Q7、Q8等）加入模糊或錯位陰影特效 */}
            <h2 
              className={`text-base font-bold text-zinc-100 leading-relaxed relative z-10 transition-all duration-300 ${
                pollutionLevel >= 7 ? "tracking-widest filter blur-[0.3px]" : ""
              }`}
              style={{
                textShadow: pollutionLevel >= 5 ? `${pollutionLevel - 4}px 0 rgba(153,27,27,0.7)` : "none"
              }}
            >
              <span className="text-red-500/80 mr-1">►</span>
              {currentQuiz.title}
            </h2>
          </div>

          {/* 選項清單 */}
          <div className="flex flex-col gap-3 mt-2">
            {currentQuiz.options.map((option: any, idx: number) => (
              <button
                key={idx}
                onClick={() => nextQuestion(idx)}
                className={`w-full text-left p-3.5 text-xs rounded border border-zinc-800/60 bg-zinc-950/40 text-zinc-400 hover:text-zinc-100 transition-all duration-150 relative overflow-hidden group
                  ${
                    // 隨題數推進，選項按鈕的 Hover 效果從紅框轉變為極度壓迫的血紅底色
                    pollutionLevel >= 6 
                    ? "hover:bg-red-950/40 hover:border-red-700/60" 
                    : "hover:bg-zinc-900 hover:border-zinc-700"
                  }
                `}
              >
                {/* 終端機按鈕左側的狀態方塊指示燈 */}
                <div className="flex items-start gap-3 relative z-10">
                  <span className="text-red-500 font-bold font-mono tracking-square shrink-0">
                    [{optionPrefix[idx]}]
                  </span>
                  
                  {/* 選項內文：最後幾題的選項字體可以加入呼吸燈或模糊效果 */}
                  <span className={`leading-relaxed group-hover:translate-x-0.5 transition-transform duration-150 ${
                    pollutionLevel >= 8 && idx === 3 ? "text-red-400/80 font-serif font-black" : ""
                  }`}>
                    {option.text}
                  </span>
                </div>

                {/* 按鈕內部的微妙黑客風格掃描滑過特效 (Hover Decorator) */}
                <div className="absolute inset-y-0 left-0 w-[2px] bg-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </button>
            ))}
          </div>

        </div>

        {/* 底部裝飾列：模擬系統底層拋出的數據流（隨題號變化，題目越後面，盲碼或警告代碼越長） */}
        <div className="border-t border-zinc-900 pt-3 flex justify-between items-center text-[9px] text-zinc-600 select-none tracking-widest">
          <div className="truncate max-w-[250px]">
            {pollutionLevel < 4 && "SYS_STATUS: MONITORING_ACTIVE"}
            {pollutionLevel >= 4 && pollutionLevel < 7 && "WARNING: COGNITIVE_HAZARD_DETECTED"}
            {pollutionLevel >= 7 && "CRITICAL: REALITY_WARPING_IN_PROGRESS_"}
          </div>
          <div className="font-mono text-right shrink-0">
            {pollutionLevel >= 6 ? "[ MEMETIC_OVERLOAD ]" : `HASH_0x${(8421 + questionIndex * 113).toString(16).toUpperCase()}`}
          </div>
        </div>

      </div>
    </>
  );
}