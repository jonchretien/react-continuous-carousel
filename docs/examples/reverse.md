---
title: Reverse
---

# Reverse

Set `reverse` to flip the scroll direction.

<CarouselDemo :reverse="true" :numVisible="3" :interval="2500" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <ContinuousCarousel reverse numVisible={3} interval={2500} pauseOnHover>
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
