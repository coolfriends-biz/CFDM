# CFDM 디자인 토큰

토큰은 디자인 결정을 이름으로 추상화한 것이에요.  
절대값(hex, px)을 직접 쓰지 말고 **항상 토큰을 경유**해요.

---

## 색 토큰 (Color)

| 토큰 변수 | 라이트 | 다크 | 용도 |
|---|---|---|---|
| `--cf-bg-base`    | `#ffffff` | `#0f172a` | 페이지 배경 |
| `--cf-bg-raised`  | `#f8fafc` | `#1e293b` | 카드·패널 배경 |
| `--cf-bg-sunken`  | `#f1f5f9` | `#0a1120` | 입력·음각 배경 |
| `--cf-fg-primary` | `#0f172a` | `#f8fafc` | 주요 텍스트 |
| `--cf-fg-secondary`| `#334155`| `#cbd5e1` | 보조 텍스트 |
| `--cf-fg-muted`   | `#64748b` | `#94a3b8` | 흐린 텍스트·아이콘 |
| `--cf-accent-600` | `#0d9488` | `#0d9488` | 시그니처 액션 |
| `--cf-accent-500` | `#14b8a6` | `#14b8a6` | Hover 상태 |
| `--cf-state-success`| `#16a34a`| `#4ade80`| 성공 |
| `--cf-state-warn` | `#d97706` | `#fbbf24` | 경고 |
| `--cf-state-danger`| `#dc2626`| `#f87171` | 오류 |
| `--cf-border-default`| `#e2e8f0`| `#1e293b`| 기본 선 |

---

## 타이포그래피 토큰 (Type)

스케일을 직접 계산하거나 px 값을 하드코딩하지 않아요.

| 토큰 | 크기 | 용도 예시 |
|---|---|---|
| `--cf-type-t1` | 2.5rem (40px) | 히어로 타이틀 |
| `--cf-type-t2` | 2rem (32px)   | 페이지 제목 |
| `--cf-type-t3` | 1.625rem (26px)| 섹션 제목 |
| `--cf-type-t4` | 1.375rem (22px)| 카드 제목 |
| `--cf-type-t5` | 1.125rem (18px)| 강조 본문 |
| `--cf-type-t6` | 1rem (16px)   | 기본 본문 |
| `--cf-type-t7` | 0.875rem (14px)| 보조 설명 |
| `--cf-type-t8` | 0.8125rem (13px)| 작은 힌트 |
| `--cf-type-t9` | 0.75rem (12px) | 태그·라벨 |

---

## 간격 토큰 (Space — 8pt 그리드)

| 토큰 | 값 |
|---|---|
| `--cf-space-1`  | 4px  |
| `--cf-space-2`  | 8px  |
| `--cf-space-3`  | 12px |
| `--cf-space-4`  | 16px |
| `--cf-space-5`  | 20px |
| `--cf-space-6`  | 24px |
| `--cf-space-8`  | 32px |
| `--cf-space-10` | 40px |
| `--cf-space-12` | 48px |
| `--cf-space-16` | 64px |

---

## 모션 토큰 (Motion)

| 토큰 | 값 | 용도 |
|---|---|---|
| `--cf-duration-fast`   | 160ms | 버튼·태그 hover |
| `--cf-duration-base`   | 220ms | 패널 열기·닫기 |
| `--cf-duration-slow`   | 320ms | 페이지 전환 |
| `--cf-ease-default`    | `cubic-bezier(.2,.8,.2,1)` | 범용 |
| `--cf-ease-in`         | `cubic-bezier(.4,0,1,1)` | 사라지는 요소 |
| `--cf-ease-out`        | `cubic-bezier(0,0,.2,1)` | 나타나는 요소 |

---

## 사용 방법

```css
/* CSS에서 직접 */
.my-element {
  color: var(--cf-fg-primary);
  padding: var(--cf-space-4);
  font-size: var(--cf-type-t6);
}
```

```tsx
/* React에서 인라인 */
import { color, space } from '@coolfriends/cfdm'

<div style={{ color: color.fgPrimary, padding: space[4] }} />
```
