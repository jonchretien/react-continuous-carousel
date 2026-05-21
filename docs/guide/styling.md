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
| `c-carousel-container` | `<div>` | Scroll viewport wrapper. |
| `c-carousel-group` | `<ul>` | Flex container that receives CSS transforms. |
| `c-carousel-item` | `<li>` | Each slide wrapper. Direct children of the group. |

`ContinuousCarousel` applies these classes automatically. With `useContinuousCarousel` you apply them manually:

```tsx
<div ref={ref} className="c-carousel-container">
  <ul className="c-carousel-group">
    <li className="c-carousel-item">...</li>
  </ul>
</div>
```

## Adding a custom class

```tsx
<ContinuousCarousel className="my-carousel">...</ContinuousCarousel>
```

Rendered HTML:

```html
<div class="c-carousel-container my-carousel">
  <ul class="c-carousel-group">...</ul>
</div>
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
