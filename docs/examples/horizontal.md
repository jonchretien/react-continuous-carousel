---
title: Horizontal
---

# Horizontal

The default direction. Slides scroll right to left.

## Basic

<CarouselDemo :numVisible="1" :interval="2500" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel numVisible={1} interval={2500}>
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

## Multiple Items

<CarouselDemo :numVisible="3" :interval="2500" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel numVisible={3} interval={2500}>
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

## Pause on Hover

Hover over the carousel to pause it.

<CarouselDemo :numVisible="3" :interval="2500" :pauseOnHover="true" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel numVisible={3} interval={2500} pauseOnHover>
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
