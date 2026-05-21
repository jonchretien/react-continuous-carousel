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
    <div style={{ height: '140px', width: '200px', margin: '0 auto' }}>
      <ContinuousCarousel direction="vertical" numVisible={1} interval={2000}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
        <div>Slide 6</div>
      </ContinuousCarousel>
    </div>
  )
}
```

## Multiple Items

<CarouselDemo direction="vertical" :numVisible="3" :interval="2000" height="220px" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <div style={{ height: '220px', width: '200px', margin: '0 auto' }}>
      <ContinuousCarousel direction="vertical" numVisible={3} interval={2000}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
        <div>Slide 6</div>
      </ContinuousCarousel>
    </div>
  )
}
```
