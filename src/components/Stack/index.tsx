import type { HTMLAttributes, CSSProperties } from 'react';
import styles from './styles.module.css';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: boolean;
}

export function Stack({
  direction = 'column',
  gap = 4,
  align,
  justify,
  wrap = false,
  className = '',
  style,
  children,
  ...rest
}: StackProps) {
  return (
    <div
      className={[styles.stack, className].filter(Boolean).join(' ')}
      style={{
        flexDirection: direction,
        gap: `var(--cf-space-${gap})`,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
