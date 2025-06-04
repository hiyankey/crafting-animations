'use client';
import { useState } from 'react';

export default function Page() {
  const [toasts, setToasts] = useState(0);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-end pb-20">
      <div>
        {Array.from({ length: toasts }).map((_, i) => (
          <Toast key={i} />
        ))}
      </div>
      <button
        type="button"
        className="relative mt-auto inline-block h-[34px] rounded-full bg-[#f90] px-4 py-2 font-medium text-black"
        onClick={() => {
          setToasts(toasts + 1);
        }}
      >
        Add toast
      </button>
    </div>
  );
}

function Toast() {
  return (
    <div className="h-[64px] w-[320px] rounded-[6px] border border-[#fff]/10 bg-[#000] p-2">
      <span>Event Created </span>
      <span>Monday, January 3rd at 6:00pm</span>
    </div>
  );
}
