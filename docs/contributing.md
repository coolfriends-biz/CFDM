# 기여 가이드

CFDM에 기여해 주셔서 감사해요!  
아래 규칙을 지켜 주시면 리뷰가 훨씬 빠르게 진행돼요.

---

## 커밋 컨벤션

```
<타입>: <한국어 설명 (~해요 톤)>

예시:
feat: Button에 fullWidth prop을 추가해요
fix: Input focus 시 outline이 잘리는 문제를 고쳐요
docs: tokens.md 색 토큰 표를 보완해요
style: Card padding 일관성을 맞춰요
refactor: Stack 내부 스타일 계산을 단순화해요
chore: vite-plugin-dts 버전을 올려요
```

| 타입 | 용도 |
|---|---|
| `feat` | 새 기능·컴포넌트 |
| `fix` | 버그 수정 |
| `docs` | 문서만 변경 |
| `style` | 기능 변화 없는 스타일·포맷 |
| `refactor` | 동작 변화 없는 코드 구조 변경 |
| `chore` | 빌드·의존성·설정 변경 |

---

## PR 체크리스트

- [ ] `npm run typecheck` 통과해요
- [ ] `npm run lint` 경고 없어요
- [ ] 새 컴포넌트는 `src/components/<Name>/index.tsx` + `styles.module.css` 구조예요
- [ ] 새 컴포넌트는 `src/index.ts`에 export 추가했어요
- [ ] 토큰 값을 하드코딩하지 않았어요 (CSS 변수 `var(--cf-*)` 사용)
- [ ] `docs/components.md`에 props 표를 업데이트했어요
- [ ] 다크 모드에서 확인했어요

---

## 로컬 실행

```bash
npm install
npm run dev          # 쇼케이스 실행
npm run build:lib    # 라이브러리 빌드
npm run typecheck    # 타입 검사
```

---

## 컴포넌트 추가 순서

1. `src/components/<Name>/` 디렉토리 생성
2. `index.tsx` — 컴포넌트 구현, named export
3. `styles.module.css` — CSS Modules, 토큰 변수만 사용
4. `src/index.ts` — 컴포넌트·타입 export 추가
5. `src/showcase/App.tsx` — 쇼케이스에 섹션 추가
6. `docs/components.md` — 문서 작성
