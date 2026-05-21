---
title: Reverse
---

# Reverse

Set `reverse` to flip the scroll direction.

## Horizontal

<CarouselDemo :reverse="true" :numVisible="1" :interval="2500" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel reverse numVisible={1} interval={2500}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
      <div>Slide 6</div>
    </ContinuousCarousel>
  )
}
```

## Vertical

<CarouselDemo direction="vertical" :reverse="true" :numVisible="1" :interval="2000" height="140px" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <div style={{ height: '140px' }}>
      <ContinuousCarousel direction="vertical" reverse numVisible={1} interval={2000}>
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

<CarouselDemo :reverse="true" :numVisible="3" :interval="2500" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel reverse numVisible={3} interval={2500}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
      <div>Slide 6</div>
    </ContinuousCarousel>
  )
}
```
