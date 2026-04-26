/**
 * CFDM Motion Tokens
 * 의미 없는 애니메이션은 없애요. 모든 움직임엔 이유가 있어야 해요.
 */
export const motion = {
  durationFast:   'var(--cf-duration-fast)',   // 160ms
  durationBase:   'var(--cf-duration-base)',   // 220ms
  durationSlow:   'var(--cf-duration-slow)',   // 320ms
  easeDefault:    'var(--cf-ease-default)',    // cubic-bezier(.2,.8,.2,1)
  easeIn:         'var(--cf-ease-in)',         // cubic-bezier(.4,0,1,1)
  easeOut:        'var(--cf-ease-out)',        // cubic-bezier(0,0,.2,1)
} as const;
