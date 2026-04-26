import type { HTMLAttributes } from 'react';
import styles from './styles.module.css';

export interface SectionTitleProps extends HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 't1' | 't2' | 't3' | 't4' | 't5';
  subtitle?: string;
}

export function SectionTitle({
  as: Tag = 'h2',
  size = 't3',
  subtitle,
  className = '',
  children,
  ...rest
}: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <Tag
        className={[styles.title, styles[size], className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </Tag>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
