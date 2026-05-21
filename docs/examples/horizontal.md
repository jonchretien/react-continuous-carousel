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
    <ContinuousCarousel className="my-carousel" numVisible={1} interval={2500}>
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
  height: 100px;
}
```

## Multiple Items

<CarouselDemo :numVisible="3" :interval="2500" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel className="my-carousel" numVisible={3} interval={2500}>
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
  height: 100px;
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
    <ContinuousCarousel className="my-carousel" numVisible={3} interval={2500} pauseOnHover>
      <span>Slide 1</span>
      <span>Slide 2</span>
      <span>Slide 3</span>
      <span>Slide 4</span>
      <span>Slide 5</span>
      <span>Slide 6</span>
    </ContinuousCarousel>
  )
}
```

```css
.my-carousel {
  height: 100px;
}
```
