import type { HTMLAttributes, ElementType } from 'react';
import styles from './styles.module.css';

export type TypoScale = 't1'|'t2'|'t3'|'t4'|'t5'|'t6'|'t7'|'t8'|'t9';
export type TypoWeight = 'regular'|'medium'|'semibold'|'bold';
export type TypoColor = 'primary'|'secondary'|'muted'|'accent';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  scale?: TypoScale;
  weight?: TypoWeight;
  color?: TypoColor;
  truncate?: boolean;
}

export function Typography({
  as: Tag = 'p',
  scale = 't6',
  weight = 'regular',
  color = 'primary',
  truncate = false,
  className = '',
  children,
  ...rest
}: TypographyProps) {
  return (
    <Tag
      className={[
        styles.typo,
        styles[scale],
        styles[weight],
        styles[`c-${color}`],
        truncate ? styles.truncate : '',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
