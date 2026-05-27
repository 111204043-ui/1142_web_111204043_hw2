"use client"

interface RedactedProps {
  text: string;
}

export default function Redacted({ text }: RedactedProps) {
  return (
    <>
      {/* 預設是純黑方塊，選取文字時（selection）會露出紅底白字，營造解密感 */}
      <span className="mx-1 px-1 bg-zinc-950 text-zinc-950 select-all selection:bg-red-900 selection:text-red-100 font-mono">
        {text}
      </span>
    </>
  );
}