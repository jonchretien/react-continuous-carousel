---
title: API Methods
---

# API Methods

## `ContinuousCarousel`

A `forwardRef` component. The forwarded ref points to the outer `<div>` container element.

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
```

### Forwarded ref

```tsx
const listRef = useRef<HTMLDivElement>(null)

<ContinuousCarousel ref={listRef} numVisible={3}>
  ...
</ContinuousCarousel>
```

---

## `useContinuousCarousel`

```tsx
import { useContinuousCarousel } from 'react-continuous-carousel'
```

### Signature

```ts
function useContinuousCarousel(
  options?: UseContinuousCarouselOptions
): {
  ref: (node: HTMLElement | null) => void
  play: () => void
  pause: () => void
}
```

### Returns

| Key | Type | Description |
|---|---|---|
| `ref` | `(node: HTMLElement \| null) => void` | Callback ref to attach to the container `<div>`. Initialises the carousel on mount and destroys it on unmount. |
| `play` | `() => void` | Resume animation. No-op if already playing. |
| `pause` | `() => void` | Pause animation. No-op if already paused. |
