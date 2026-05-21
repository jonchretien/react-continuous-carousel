---
title: Vertical
---

# Vertical

Set `direction="vertical"` to scroll bottom to top.

## Basic

<CarouselDemo direction="vertical" :numVisible="1" :interval="2000" height="140px" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel className="my-carousel" direction="vertical" numVisible={1} interval={2000}>
      <ul>
        <li>Slide 1</li>
        <li>Slide 2</li>
        <li>Slide 3</li>
        <li>Slide 4</li>
        <li>Slide 5</li>
        <li>Slide 6</li>
      </ul>
    </ContinuousCarousel>
  )
}
```

```css
.my-carousel {
  height: 140px;
  width: 200px;
  margin: 0 auto;
}
```

## Multiple Items

<CarouselDemo direction="vertical" :numVisible="3" :interval="2000" height="220px" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel className="my-carousel" direction="vertical" numVisible={3} interval={2000}>
      <ul>
        <li>Slide 1</li>
        <li>Slide 2</li>
        <li>Slide 3</li>
        <li>Slide 4</li>
        <li>Slide 5</li>
        <li>Slide 6</li>
      </ul>
    </ContinuousCarousel>
  )
}
```

```css
.my-carousel {
  height: 220px;
  width: 200px;
  margin: 0 auto;
}
```
