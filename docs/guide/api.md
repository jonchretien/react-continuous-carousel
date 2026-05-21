---
title: API Reference
---

# API Reference

## `ContinuousCarousel`

A `forwardRef` component. The forwarded ref points to the outer `<div>` container element.

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | — | **Required.** Each child becomes a `<li class="c-carousel-item">`. |
| `className` | `string` | `undefined` | Extra class appended to the container `<div>`. Base class `c-carousel-container` is always present. |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Scroll axis. |
| `numVisible` | `number` | `3` | Slides visible at once. |
| `interval` | `number` | `3000` | Milliseconds between scroll steps. |
| `autoplay` | `boolean` | `true` | Start scrolling on mount. |
| `pauseOnHover` | `boolean` | `false` | Pause while the cursor is over the carousel. |
| `reverse` | `boolean` | `false` | Reverse scroll direction. |
| `onSlideChange` | `(index: number) => void` | `undefined` | Fired when the active slide index changes. |
| `onPause` | `() => void` | `undefined` | Fired when the carousel pauses. |
| `onPlay` | `() => void` | `undefined` | Fired when the carousel resumes. |
| `onDestroy` | `() => void` | `undefined` | Fired when the carousel is destroyed on unmount. |

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

---

## TypeScript types

```ts
import type {
  ContinuousCarouselProps,
  CarouselOptions,
  CarouselCallbacks,
  UseContinuousCarouselOptions,
} from 'react-continuous-carousel'
```

| Type | Description |
|---|---|
| `ContinuousCarouselProps` | All props accepted by `<ContinuousCarousel>`. |
| `CarouselOptions` | Vanilla library config options (without callbacks). |
| `CarouselCallbacks` | Callback props: `onSlideChange`, `onPause`, `onPlay`, `onDestroy`. |
| `UseContinuousCarouselOptions` | Options for `useContinuousCarousel` (all vanilla config options including callbacks). |
