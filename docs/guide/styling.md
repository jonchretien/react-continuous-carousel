---
title: Styling
---

# Styling

## Required CSS Import

```ts
import 'continuous-carousel/css'
```

This provides the flexbox layout and overflow masking required for continuous scrolling. Without it the carousel renders as a static list.

## Required CSS classes

| Class | Element | Notes |
|---|---|---|
| `c-carousel-container` | `<ul>` | Scroll viewport and flex container. |
| `c-carousel-item` | `<li>` | Each slide wrapper. Must be direct children of the container. |

`ContinuousCarousel` applies both automatically. With `useContinuousCarousel` you apply them manually:

```tsx
<ul ref={ref} className="c-carousel-container">
  <li className="c-carousel-item">...</li>
</ul>
```

## Adding a custom class

```tsx
<ContinuousCarousel className="my-carousel">...</ContinuousCarousel>
```

Rendered HTML:

```html
<ul class="c-carousel-container my-carousel">...</ul>
```

## Slide sizing

```css
/* Horizontal */
.c-carousel-item {
  width: 200px;
  height: 120px;
  flex-shrink: 0;
}

/* Vertical */
.c-carousel-item {
  width: 100%;
  height: 80px;
  flex-shrink: 0;
}
```

## Vertical carousels

Wrap the carousel in a container with a fixed height:

```tsx
<div style={{ height: '300px' }}>
  <ContinuousCarousel direction="vertical" numVisible={4}>
    ...
  </ContinuousCarousel>
</div>
```
