import type { HTMLAttributes } from 'react';
import styles from './styles.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg';
  border?: boolean;
}

export function Card({
  padding = 'md',
  border = true,
  className = '',
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        styles.card,
        styles[`pad-${padding}`],
        border ? styles.border : '',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
}
