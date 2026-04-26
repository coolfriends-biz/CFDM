import './showcase.css';
import { Button }       from '../components/Button';
import { Card }         from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { Stack }        from '../components/Stack';
import { Tag }          from '../components/Tag';
import { Input }        from '../components/Input';
import { Typography }   from '../components/Typography';

const COLOR_SWATCHES = [
  { label: 'accent-600', bg: 'var(--cf-accent-600)' },
  { label: 'accent-500', bg: 'var(--cf-accent-500)' },
  { label: 'accent-400', bg: 'var(--cf-accent-400)' },
  { label: 'accent-200', bg: 'var(--cf-accent-200)' },
  { label: 'accent-100', bg: 'var(--cf-accent-100)' },
  { label: 'accent-50',  bg: 'var(--cf-accent-50)' },
  { label: 'fg-primary',   bg: 'var(--cf-fg-primary)' },
  { label: 'fg-secondary', bg: 'var(--cf-fg-secondary)' },
  { label: 'fg-muted',     bg: 'var(--cf-fg-muted)' },
  { label: 'bg-sunken',    bg: 'var(--cf-bg-sunken)' },
  { label: 'bg-raised',    bg: 'var(--cf-bg-raised)' },
  { label: 'success',      bg: 'var(--cf-state-success)' },
  { label: 'warn',         bg: 'var(--cf-state-warn)' },
  { label: 'danger',       bg: 'var(--cf-state-danger)' },
];

const TYPE_SCALES = [
  { token: 't1', label: '제목 — t1', size: 'var(--cf-type-t1)' },
  { token: 't2', label: '표시 — t2', size: 'var(--cf-type-t2)' },
  { token: 't3', label: '소제목 — t3', size: 'var(--cf-type-t3)' },
  { token: 't4', label: '부제목 — t4', size: 'var(--cf-type-t4)' },
  { token: 't5', label: '본문 강조 — t5', size: 'var(--cf-type-t5)' },
  { token: 't6', label: '본문 — t6', size: 'var(--cf-type-t6)' },
  { token: 't7', label: '보조 — t7', size: 'var(--cf-type-t7)' },
  { token: 't8', label: '작은 보조 — t8', size: 'var(--cf-type-t8)' },
  { token: 't9', label: '라벨 — t9', size: 'var(--cf-type-t9)' },
];

export default function Showcase() {
  return (
    <div className="showcase-wrap">
      {/* Header */}
      <header className="showcase-header">
        <div className="showcase-logo">시원한친구들 · CFDM</div>
        <div className="showcase-sub">CoolFriends Design Method — 컴포넌트 & 토큰 쇼케이스</div>
      </header>

      {/* 1. Typography */}
      <section className="section">
        <div className="section-label">Typography</div>
        <Stack direction="column" gap={3}>
          {TYPE_SCALES.map(({ token, label, size }) => (
            <div key={token} className="token-row">
              <span className="token-name">{token}</span>
              <span style={{ fontSize: size, lineHeight: 1.4 }}>{label}</span>
            </div>
          ))}
        </Stack>
      </section>

      {/* 2. Color */}
      <section className="section">
        <div className="section-label">Color Tokens</div>
        <div className="token-grid">
          {COLOR_SWATCHES.map(({ label, bg }) => (
            <div key={label}>
              <div className="token-swatch" style={{ background: bg }} />
              <Typography scale="t9" color="muted" style={{ marginTop: 6 }}>{label}</Typography>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Button */}
      <section className="section">
        <div className="section-label">Button</div>
        <Stack direction="column" gap={5}>
          <div>
            <Typography scale="t8" color="muted" style={{ marginBottom: 12 }}>Variants</Typography>
            <div className="row-wrap">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>
          <div>
            <Typography scale="t8" color="muted" style={{ marginBottom: 12 }}>Sizes</Typography>
            <div className="row-wrap">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </Stack>
      </section>

      {/* 4. Tag */}
      <section className="section">
        <div className="section-label">Tag</div>
        <div className="row-wrap">
          <Tag variant="default">기본</Tag>
          <Tag variant="accent">액센트</Tag>
          <Tag variant="success">성공</Tag>
          <Tag variant="warn">경고</Tag>
          <Tag variant="danger">오류</Tag>
        </div>
      </section>

      {/* 5. Input */}
      <section className="section">
        <div className="section-label">Input</div>
        <Stack direction="column" gap={4} style={{ maxWidth: 400 }}>
          <Input label="이메일" placeholder="hello@coolfriends.kr" />
          <Input label="닉네임" hint="2-16자 이내로 입력해 주세요." placeholder="시원한친구" />
          <Input label="비밀번호" error="비밀번호가 맞지 않아요." type="password" placeholder="••••••••" />
        </Stack>
      </section>

      {/* 6. Card */}
      <section className="section">
        <div className="section-label">Card</div>
        <Stack direction="row" gap={4} wrap>
          <Card style={{ flex: '1 1 240px' }}>
            <SectionTitle as="h3" size="t5">기본 카드</SectionTitle>
            <Typography scale="t7" color="secondary" style={{ marginTop: 8 }}>
              border + bg-raised로 가볍게 구분해요.
            </Typography>
          </Card>
          <Card border={false} style={{ flex: '1 1 240px', background: 'var(--cf-accent-50)' }}>
            <SectionTitle as="h3" size="t5">강조 카드</SectionTitle>
            <Typography scale="t7" color="secondary" style={{ marginTop: 8 }}>
              border 없이 bg로만 강조해요.
            </Typography>
          </Card>
        </Stack>
      </section>

      {/* 7. Typography component */}
      <section className="section">
        <div className="section-label">Typography Component</div>
        <Stack direction="column" gap={2}>
          <Typography scale="t4" weight="bold">굵고 큰 텍스트</Typography>
          <Typography scale="t6">일반 본문 텍스트예요.</Typography>
          <Typography scale="t7" color="secondary">보조 설명은 secondary 색으로요.</Typography>
          <Typography scale="t8" color="muted">가장 작은 메타 정보는 muted로요.</Typography>
          <Typography scale="t6" color="accent" weight="semibold">액센트 강조</Typography>
          <Typography scale="t7" truncate style={{ maxWidth: 280 }}>
            아주 긴 텍스트는 truncate prop으로 말줄임 처리할 수 있어요. 이 문장은 충분히 길어요.
          </Typography>
        </Stack>
      </section>

      {/* 8. Design Principles */}
      <section className="section">
        <div className="section-label">CFDM 4원칙</div>
        <Stack direction="column" gap={3}>
          {[
            { title: 'Calm', desc: '채도 낮은 중성색 + 민트 액센트 하나. 그라데이션·네온 없이도 충분해요.' },
            { title: 'Friendly', desc: 'UI 카피는 친구에게 말하듯. ~해요 톤으로 딱딱하지 않게요.' },
            { title: 'Direct', desc: '한 화면엔 핵심 액션 하나. 복잡한 선택지는 줄여요.' },
            { title: 'Mindful', desc: '의미 없는 애니메이션은 없애요. 모든 움직임엔 이유가 있어야 해요.' },
          ].map(({ title, desc }) => (
            <Card key={title} padding="sm">
              <Stack direction="row" gap={3} align="flex-start">
                <Tag variant="accent">{title}</Tag>
                <Typography scale="t7" color="secondary">{desc}</Typography>
              </Stack>
            </Card>
          ))}
        </Stack>
      </section>
    </div>
  );
}
