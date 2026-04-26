import type { HTMLAttributes } from 'react';
import styles from './styles.module.css';

export type TagVariant = 'default' | 'accent' | 'success' | 'warn' | 'danger';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
}

export function Tag({ variant = 'default', className = '', children, ...rest }: TagProps) {
  return (
    <span
      className={[styles.tag, styles[`v-${variant}`], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
}
