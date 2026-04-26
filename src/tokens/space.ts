/**
 * CFDM Spacing Tokens (8pt grid)
 * 0=0, 1=4px, 2=8px, 3=12px, 4=16px, 5=20px, 6=24px, 8=32px, 10=40px, 12=48px, 16=64px
 */
export const space = {
  0:  'var(--cf-space-0)',
  1:  'var(--cf-space-1)',
  2:  'var(--cf-space-2)',
  3:  'var(--cf-space-3)',
  4:  'var(--cf-space-4)',
  5:  'var(--cf-space-5)',
  6:  'var(--cf-space-6)',
  8:  'var(--cf-space-8)',
  10: 'var(--cf-space-10)',
  12: 'var(--cf-space-12)',
  16: 'var(--cf-space-16)',
} as const;

export type SpaceToken = keyof typeof space;
