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
    <ContinuousCarousel className="my-carousel" reverse numVisible={1} interval={2500}>
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

## Vertical

<CarouselDemo direction="vertical" :reverse="true" :numVisible="1" :interval="2000" height="140px" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel className="my-carousel" direction="vertical" reverse numVisible={1} interval={2000}>
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

## Horizontal — Multiple Items

<CarouselDemo :reverse="true" :numVisible="3" :interval="2500" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel className="my-carousel" reverse numVisible={3} interval={2500}>
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
