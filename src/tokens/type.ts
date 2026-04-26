/**
 * CFDM Typography Tokens
 * t1 = 가장 큰 표시 텍스트, t9 = 가장 작은 보조 텍스트
 * 하드코딩(px 직접 입력)하지 말고 이 토큰을 사용하세요.
 */
export const typeScale = {
  t1: 'var(--cf-type-t1)', // 40px / 1.2
  t2: 'var(--cf-type-t2)', // 32px / 1.25
  t3: 'var(--cf-type-t3)', // 26px / 1.3
  t4: 'var(--cf-type-t4)', // 22px / 1.35
  t5: 'var(--cf-type-t5)', // 18px / 1.5
  t6: 'var(--cf-type-t6)', // 16px / 1.6
  t7: 'var(--cf-type-t7)', // 14px / 1.6
  t8: 'var(--cf-type-t8)', // 13px / 1.6
  t9: 'var(--cf-type-t9)', // 12px / 1.5
} as const;

export type TypeToken = keyof typeof typeScale;

export const fontWeight = {
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
} as const;
