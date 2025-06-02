import type { CSSProperties } from 'react';

export default function Page() {
  return <StackedComponent />;
}

const LENGTH = 3;

function StackedComponent() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center"
      style={
        {
          '--scale-increment': 0.05,
          '--translate-increment': '-13%',
        } as CSSProperties
      }
    >
      {new Array(LENGTH).fill(0).map((_, i) => (
        <div
          key={i}
          className="h-[74px] w-[356px] rounded-lg border border-neutral-900 bg-neutral-950 shadow-lg"
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
