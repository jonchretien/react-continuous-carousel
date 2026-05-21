---
title: Horizontal
---

# Horizontal

The default direction. Slides scroll right to left.

<CarouselDemo :numVisible="3" :interval="2500" />

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
