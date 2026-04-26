# CFDM 컴포넌트

모든 컴포넌트는 `tokens.css`를 전역에 import 해야 정상 동작해요.

```tsx
import '@coolfriends/cfdm/tokens.css'
```

---

## Button

```tsx
import { Button } from '@coolfriends/cfdm'

<Button variant="primary" size="md">저장해요</Button>
<Button variant="secondary">취소해요</Button>
<Button variant="ghost">더 보기</Button>
<Button variant="danger">삭제해요</Button>
```

| prop | 타입 | 기본값 |
|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `fullWidth` | `boolean` | `false` |

---

## Card

```tsx
import { Card } from '@coolfriends/cfdm'

<Card padding="md" border>
  내용이 들어가요.
</Card>
```

| prop | 타입 | 기본값 |
|---|---|---|
| `padding` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `border` | `boolean` | `true` |

---

## SectionTitle

```tsx
import { SectionTitle } from '@coolfriends/cfdm'

<SectionTitle as="h2" size="t3" subtitle="보조 설명이에요.">
  섹션 제목
</SectionTitle>
```

| prop | 타입 | 기본값 |
|---|---|---|
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4'` | `'h2'` |
| `size` | `'t1' ~ 't5'` | `'t3'` |
| `subtitle` | `string` | — |

---

## Stack

레이아웃 전용 컴포넌트예요. `flex` 컨테이너를 만들어요.

```tsx
import { Stack } from '@coolfriends/cfdm'

<Stack direction="row" gap={4} align="center">
  <Button>A</Button>
  <Button>B</Button>
</Stack>
```

| prop | 타입 | 기본값 |
|---|---|---|
| `direction` | `'row' \| 'column'` | `'column'` |
| `gap` | `1\|2\|3\|4\|5\|6\|8\|10\|12` | `4` |
| `align` | CSS `alignItems` | — |
| `justify` | CSS `justifyContent` | — |
| `wrap` | `boolean` | `false` |

---

## Tag

```tsx
import { Tag } from '@coolfriends/cfdm'

<Tag variant="accent">베타</Tag>
<Tag variant="success">완료</Tag>
<Tag variant="danger">오류</Tag>
```

| prop | 타입 | 기본값 |
|---|---|---|
| `variant` | `'default' \| 'accent' \| 'success' \| 'warn' \| 'danger'` | `'default'` |

---

## Input

```tsx
import { Input } from '@coolfriends/cfdm'

<Input label="이메일" placeholder="hello@coolfriends.kr" />
<Input label="닉네임" hint="2-16자 이내로요." />
<Input label="비밀번호" error="비밀번호가 맞지 않아요." type="password" />
```

| prop | 타입 | 기본값 |
|---|---|---|
| `label` | `string` | — |
| `hint` | `string` | — |
| `error` | `string` | — |

---

## Typography

```tsx
import { Typography } from '@coolfriends/cfdm'

<Typography as="h1" scale="t2" weight="bold">큰 제목</Typography>
<Typography scale="t6">본문 텍스트예요.</Typography>
<Typography scale="t7" color="muted" truncate>긴 문장 말줄임…</Typography>
```

| prop | 타입 | 기본값 |
|---|---|---|
| `as` | ElementType | `'p'` |
| `scale` | `'t1'~'t9'` | `'t6'` |
| `weight` | `'regular'\|'medium'\|'semibold'\|'bold'` | `'regular'` |
| `color` | `'primary'\|'secondary'\|'muted'\|'accent'` | `'primary'` |
| `truncate` | `boolean` | `false` |
