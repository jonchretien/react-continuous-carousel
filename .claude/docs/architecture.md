# Architecture

All carousel logic (animation, infinite loop, observers, a11y) lives in the vanilla lib — this package is a thin integration layer.

## Dual API

- **`ContinuousCarousel` component** — wraps children in `<ul>/<li>` markup, manages vanilla lib lifecycle via `useEffect`, reinits when child count changes. Uses `forwardRef` to expose container node.
- **`useContinuousCarousel` hook** — ref callback pattern for users who provide their own markup. Returns `{ ref, play, pause }`.

## Type derivation

`src/types.ts` extracts `ContinuousCarouselConfig` and `ContinuousCarouselInstance` from the vanilla lib's default export return type (vanilla lib doesn't re-export these as named exports).

## CSS

Users import styles directly from vanilla package (`import 'continuous-carousel/css'`). This package ships no CSS.
