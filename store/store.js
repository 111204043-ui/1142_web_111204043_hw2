// src/store.js
import { create } from 'zustand'

const questionData = [
    {
      title: "當你獨自待在黑暗的房間裡，聽到衣櫃裡傳出輕微的抓撓聲，你的第一反應是？",
      options:[
        {
          text: "起身開燈，確認是否是老鼠或寵物。",
          value: 1
        },
        {
          text: "感到一絲緊張，用被子蓋住頭試圖忽視它。",
          value: 2
        },
        {
          text: "拿起防身物品，警惕地盯著衣櫃。",
          value: 3 
        },
        {
          text: "對著衣櫃微笑，並輕聲回應它。",
          value: 4 
        }
      ]
    },
    {
      title: "在一個漫長的深夜，你發現時鐘的秒針已經停止跳動了五分鐘，但世界仍在運作，你會？",
      options:[
        {
          text: "認為是時鐘沒電了，決定明天換電池。",
          value: 1
        },
        {
          text: "拿出手機核對時間，看看是不是只有這個鐘壞了。",
          value: 2
        },
        {
          text: "感到一種莫名的違和感，心跳開始加速。",
          value: 3 
        },
        {
          text: "理解到「時間」終於放棄了對你的監控。",
          value: 4 
        }
      ]
    },
    {
      title: "當你閉上眼睛準備入睡時，你經常能看見什麼？",
      options:[
        {
          text: "一片漆黑，或者今天工作與生活的零碎畫面。",
          value: 1
        },
        {
          text: "夢境的預兆，有時會帶有一點壓迫感。",
          value: 2
        },
        {
          text: "混亂的幾何線條與光斑，像是某種未知的雜訊。",
          value: 3 
        },
        {
          text: "䄉看見祢在看著䄉。䄉看見祢在看著䄉。",
          value: 4 
        }
      ]
    },
    {
      title: "街道的盡頭，站著一個你從未見過、穿著怪異的人，當你眨眼時，他會縮短與你的距離。這時你會？",
      options:[
        {
          text: "大聲呼喊周圍的人，尋求協助。",
          value: 1
        },
        {
          text: "一邊死死盯著他，一邊緩慢向後退到安全區域。",
          value: 2
        },
        {
          text: "把眼睛挖出來。這樣他就再也無法透過眨眼移動了。",
          value: 3 
        },
        {
          text: "。了來祂",
          value: 4 
        }
      ]
    },
    {
      title: "你在夢中來到了一座無人的廢棄醫院，前方有四扇門，你直覺會推開哪一扇？",
      options:[
        {
          text: "掛著「安全通道」綠色指示燈的門。",
          value: 1
        },
        {
          text: "散發出微弱消毒水氣味的木門。",
          value: 2
        },
        {
          text: "貼滿封條、被鐵鍊鎖住的雙開鐵門。",
          value: 3 
        },
        {
          text: "正在往外滲出暗紅色液體的診室門。",
          value: 4 
        }
      ]
    },
    {
      title: "窗外有人在看你窗外有人在看你窗外有人在看你窗外有人在看你窗外有人在看你窗外有人在看你窗外有人在看你窗外有人在看你",
      options:[
        {
          text: "拉上窗簾，假裝什麼都沒發生。",
          value: 1
        },
        {
          text: "撥打報警電話，並向鄰居求助。",
          value: 2
        },
        {
          text: "破壞這裡，往外跑。",
          value: 3 
        },
        {
          text: "請祂進來坐坐。",
          value: 4 
        }
      ]
    },
    {
      title: "𠟕𠦃囥囮，囅囓圝圞。欞櫳爖爢，龘龘龘──？",
      options:[
        {
          text: "𪚥𪚥，靐齉爩。",
          value: 1
        },
        {
          text: "爨癵，驫麤灪。",
          value: 2
        },
        {
          text: "籲由，厵纞虪。",
          value: 3 
        },
        {
          text: "𪓪𪓫，孌鑾爨。",
          value: 4 
        }
      ]
    },
    {
      title: "䄉",
      options:[
        {
          text: "檜",
          value: 1
        },
        {
          text: "棶",
          value: 2
        },
        {
          text: "椄",
          value: 3 
        },
        {
          text: "祢",
          value: 4 
        }
      ]
    },
    {
      title: "┠┨┯┷┏┓┗┛┳┻﹃﹄┌┐└┘∟",
      options:[
        {
          text: "░░░░░░░░░░",
          value: 1
        },
        {
          text: "▰▰▰▰▰▰▰▰▰▰",
          value: 2
        },
        {
          text: "█ █ █ █ █ █ █ █ █ █",
          value: 3 
        },
        {
          text: "𣊭𣊭𣊭𣊭𣊭𣊭𣊭𣊭𣊭𣊭",
          value: 4 
        }
      ]
    },
    {
      title: "測驗即將結束，你醒來了嗎？",
      options:[
        {
          text: "我一直都醒著。",
          value: 1
        },
        {
          text: "有點不對勁，不太舒服。",
          value: 2
        },
        {
          text: "祂在看我。",
          value: 3 
        },
        {
          text: "我一直都醒著☉",
          value: 4 
        }
      ]
    }
];


// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
    psyData:{
        score: 0,
        quizData: questionData
    },
    setScore: (score) => set( (state) => ( { psyData: { ...state.psyData, score: score}} )  )

}))


export { usePsyStore }