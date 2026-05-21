---
title: Getting Started
---

# Getting Started

## Installation

::: code-group

```bash [npm]
npm install react-continuous-carousel
```

```bash [pnpm]
pnpm add react-continuous-carousel
```

```bash [yarn]
yarn add react-continuous-carousel
```

:::

## CSS

Import the stylesheet once in your app entry point:

```ts
import 'continuous-carousel/css'
```

## Component API

Pass slides as children — each child is wrapped in a carousel item automatically.

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel numVisible={3} interval={3000} pauseOnHover>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
    </ContinuousCarousel>
  )
}
```

<CarouselDemo />

## Hook API

`useContinuousCarousel` gives you imperative control. Attach the returned `ref` to the container element. Place slides in `<ul className="c-carousel-group">` with `<li className="c-carousel-item">` children, then call `play()` / `pause()` anywhere.

```tsx
import { useContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  const { ref, play, pause } = useContinuousCarousel({
    numVisible: 3,
    interval: 2500,
    pauseOnHover: true,
  })

  return (
    <>
      <div ref={ref} className="c-carousel-container">
        <ul className="c-carousel-group">
          <li className="c-carousel-item">Slide 1</li>
          <li className="c-carousel-item">Slide 2</li>
          <li className="c-carousel-item">Slide 3</li>
        </ul>
      </div>
      <button onClick={pause}>Pause</button>
      <button onClick={play}>Play</button>
    </>
  )
}
```

<CarouselControlsDemo />
