---
title: With Controls
---

# With Controls

Use `useContinuousCarousel` to add programmatic play/pause buttons.

<CarouselControlsDemo />

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
      <ul ref={ref} className="c-carousel-container">
        <li className="c-carousel-item">Slide 1</li>
        <li className="c-carousel-item">Slide 2</li>
        <li className="c-carousel-item">Slide 3</li>
        <li className="c-carousel-item">Slide 4</li>
        <li className="c-carousel-item">Slide 5</li>
        <li className="c-carousel-item">Slide 6</li>
      </ul>
      <button onClick={pause}>Pause</button>
      <button onClick={play}>Play</button>
    </>
  )
}
```
