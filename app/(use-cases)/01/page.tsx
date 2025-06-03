import type { CSSProperties } from 'react';

export default function Page() {
  return (
    <>
      <StackedComponent />
    </>
  );
}

const LENGTH = 3;
function StackedComponent() {
  return (
    <div
      className="flex min-h-screen w-screen flex-col items-center justify-center"
      style={
        {
          '--scale-increment': 0.05,
          '--translate-increment': '-13%',
        } as CSSProperties
      }
    >
      {Array.from({ length: LENGTH }).map((_, i) => (
        <div
          key={i}
          className="h-[64px] w-[320px] rounded-[6px] border border-[#fff]/10 bg-[#000]"
          style={
            {
              '--index': LENGTH - 1 - i,
              transform:
                'scale(calc(1 - var(--index) * var(--scale-increment))) translateY(calc(var(--index) * var(--translate-increment)))',
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
