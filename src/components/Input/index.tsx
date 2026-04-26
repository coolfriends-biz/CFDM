import type { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, className = '', id, ...rest }: InputProps) {
  const inputId = id ?? (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={[styles.input, error ? styles.hasError : '', className].filter(Boolean).join(' ')}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        {...rest}
      />
      {error
        ? <span id={`${inputId}-error`} className={styles.error}>{error}</span>
        : hint
        ? <span id={`${inputId}-hint`}  className={styles.hint}>{hint}</span>
        : null}
    </div>
  );
}
