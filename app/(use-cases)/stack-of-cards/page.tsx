import type { CSSProperties } from 'react';
import styles from './page.module.css';

export default function Page() {
  return <StackedComponent />;
}

const LENGTH = 3;

function StackedComponent() {
  return (
    <div className="wrapper">
      {new Array(LENGTH).fill(0).map((_, i) => (
        <div
          className={styles.card}
          key={i}
          style={{ '--index': LENGTH - 1 - i } as CSSProperties}
        />
      ))}
    </div>
  );
}
