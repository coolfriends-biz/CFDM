/**
 * CFDM Color Tokens
 * 절대값(hex)을 직접 쓰지 말고 CSS 변수 또는 이 토큰을 경유하세요.
 */

export const color = {
  /* 배경 레이어 */
  bgBase:   'var(--cf-bg-base)',
  bgRaised: 'var(--cf-bg-raised)',
  bgSunken: 'var(--cf-bg-sunken)',

  /* 전경(텍스트/아이콘) */
  fgPrimary:   'var(--cf-fg-primary)',
  fgSecondary: 'var(--cf-fg-secondary)',
  fgMuted:     'var(--cf-fg-muted)',
  fgOnAccent:  'var(--cf-fg-on-accent)',

  /* 시그니처 민트 액센트 */
  accent50:  'var(--cf-accent-50)',
  accent100: 'var(--cf-accent-100)',
  accent200: 'var(--cf-accent-200)',
  accent400: 'var(--cf-accent-400)',
  accent500: 'var(--cf-accent-500)',
  accent600: 'var(--cf-accent-600)',

  /* 시맨틱 상태 */
  stateSuccess: 'var(--cf-state-success)',
  stateWarn:    'var(--cf-state-warn)',
  stateDanger:  'var(--cf-state-danger)',

  /* 선/경계 */
  borderDefault: 'var(--cf-border-default)',
  borderStrong:  'var(--cf-border-strong)',
} as const;

export type ColorToken = keyof typeof color;
