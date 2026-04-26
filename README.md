<div align="center">

<img src="public/brand/cover.png" alt="CFDM" width="100%" style="max-width:840px;border-radius:12px;" />

# CFDM

**CoolFriends Design Method**  
시원한친구들의 디자인 토큰 & React 컴포넌트 라이브러리

[![npm](https://img.shields.io/npm/v/@coolfriends/cfdm?color=0d9488&label=npm)](https://www.npmjs.com/package/@coolfriends/cfdm)
[![license](https://img.shields.io/badge/license-Apache--2.0-64748b)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/coolfriends-biz/CFDM?color=0d9488)](https://github.com/coolfriends-biz/CFDM)

</div>

---

## 개요

CFDM은 **차분하고, 직관적이며, 한국어를 먼저 생각하는** 디자인 방법론이에요.  
색·간격·타이포그래피·모션을 CSS 토큰 단위로 관리하고, React 컴포넌트로 바로 쓸 수 있어요.

데모 웹사이트: **https://coolfriends-biz.github.io/CFDM/**

| 원칙 | 한 줄 요약 |
|---|---|
| **Calm**    | 민트 액센트 하나. 네온·그라데이션은 없어요. |
| **Friendly**| 친구에게 말하듯 ~해요 톤이에요. |
| **Direct**  | 한 화면엔 핵심 액션 하나예요. |
| **Mindful** | 모든 움직임엔 이유가 있어야 해요. |

---

## 시작하기

```bash
npm install @coolfriends/cfdm
```

`tokens.css`를 앱 진입점에 한 번만 import해요.

```tsx
// main.tsx (또는 index.tsx)
import '@coolfriends/cfdm/tokens.css'
```

컴포넌트를 import해서 사용해요.

```tsx
import { Button, Card, Input, Typography, Stack, Tag } from '@coolfriends/cfdm'

export default function Page() {
  return (
    <Stack direction="column" gap={6}>
      <Typography as="h1" scale="t2" weight="bold">
        시원한친구들이에요.
      </Typography>
      <Card>
        <Stack direction="column" gap={4}>
          <Input label="이메일" placeholder="hello@coolfriends.kr" />
          <Button variant="primary">시작해요</Button>
        </Stack>
      </Card>
    </Stack>
  )
}
```

---

## 컴포넌트

| 컴포넌트 | 설명 |
|---|---|
| `Button` | primary / secondary / ghost / danger, 3가지 크기 |
| `Card` | 배경·선·패딩 조합 컨테이너 |
| `SectionTitle` | h1~h4, subtitle 지원 |
| `Stack` | flex 레이아웃 헬퍼 |
| `Tag` | 상태 배지 (accent / success / warn / danger) |
| `Input` | 레이블·힌트·에러 포함 입력 필드 |
| `Typography` | t1~t9 스케일, 4가지 굵기, 4가지 색, truncate |

전체 props는 [docs/components.md](./docs/components.md)에서 확인해요.

---

## 토큰

CSS Custom Properties 기반이에요. 다크 모드는 `prefers-color-scheme`으로 자동 적용돼요.

```css
.my-element {
  color: var(--cf-fg-primary);
  padding: var(--cf-space-4);
  font-size: var(--cf-type-t6);
  border-radius: var(--cf-radius-md);
  transition: background var(--cf-duration-fast) var(--cf-ease-default);
}
```

전체 토큰 목록은 [docs/tokens.md](./docs/tokens.md)에서 확인해요.

---

## 로컬 개발

```bash
git clone https://github.com/coolfriends-biz/CFDM.git
cd CFDM
npm install

npm run dev          # 쇼케이스 페이지 (localhost:5173)
npm run build:lib    # 라이브러리 빌드 → dist/
npm run build:demo   # 데모 정적 빌드 → dist/
npm run typecheck    # 타입 검사
npm run lint         # 린트
```

---

## 문서

- [디자인 철학](./docs/philosophy.md)
- [토큰 가이드](./docs/tokens.md)
- [컴포넌트 API](./docs/components.md)
- [기여 가이드](./docs/contributing.md)

---

## 라이선스

[Apache-2.0](./LICENSE) © 2026 coolfriends-biz
