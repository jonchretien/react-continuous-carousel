---
title: Vertical
---

# Vertical

Set `direction="vertical"` to scroll bottom to top.

<CarouselDemo direction="vertical" :numVisible="3" :interval="2000" height="220px" />

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel'
import 'continuous-carousel/css'

function App() {
  return (
    <div style={{ height: '220px' }}>
      <ContinuousCarousel direction="vertical" numVisible={3} interval={2000} pauseOnHover>
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
