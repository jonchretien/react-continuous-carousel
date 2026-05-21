---
title: Configuration
---

# Configuration

## `ContinuousCarousel` props

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

## `useContinuousCarousel` options

`useContinuousCarousel` accepts the same options as the underlying vanilla library via `UseContinuousCarouselOptions`.

| Option | Type | Default | Description |
|---|---|---|---|
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Scroll axis. |
| `numVisible` | `number` | `1` | Slides visible at once. |
| `interval` | `number` | `2000` | Milliseconds between scroll steps. |
| `autoplay` | `boolean` | `true` | Start scrolling on mount. |
| `pauseOnHover` | `boolean` | `false` | Pause while the cursor is over the carousel. |
| `reverse` | `boolean` | `false` | Reverse scroll direction. |
| `onSlideChange` | `(index: number) => void` | `undefined` | Fired when the active slide index changes. |
| `onPause` | `() => void` | `undefined` | Fired when the carousel pauses. |
| `onPlay` | `() => void` | `undefined` | Fired when the carousel resumes. |
| `onDestroy` | `() => void` | `undefined` | Fired when the carousel is destroyed on unmount. |

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
