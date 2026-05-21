# React Continuous Carousel 🎠

[![npm version](https://img.shields.io/npm/v/react-continuous-carousel.svg)](https://www.npmjs.com/package/react-continuous-carousel)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

React wrapper for [continuous-carousel](https://github.com/jonchretien/continuous-carousel) — an accessible, infinite-loop carousel.

## Install

```bash
npm install react-continuous-carousel
```

## CSS

Import the carousel styles from the vanilla package:

```js
import 'continuous-carousel/css';
```

## Quick Start

```tsx
import { ContinuousCarousel } from 'react-continuous-carousel';
import 'continuous-carousel/css';

function App() {
  return (
    <ContinuousCarousel className="my-carousel" direction="horizontal" numVisible={3} interval={2000} pauseOnHover>
      <ul>
        <li>Slide 1</li>
        <li>Slide 2</li>
        <li>Slide 3</li>
        <li>Slide 4</li>
        <li>Slide 5</li>
      </ul>
    </ContinuousCarousel>
  );
}
```

```css
.my-carousel {
  height: 100px;
}
```

## Component Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Slide content (each child wrapped in `<li>`) |
| `className` | `string` | Additional class on the container |
| `onSlideChange` | `(index: number) => void` | Called when active slide changes |
| `onPause` | `() => void` | Called when carousel pauses |
| `onPlay` | `() => void` | Called when carousel plays |
| `onDestroy` | `() => void` | Called when carousel is destroyed |

All [vanilla configuration options](https://github.com/jonchretien/continuous-carousel#configuration) (`direction`, `numVisible`, `interval`, `pauseOnHover`, etc.) are also accepted as props.

The component uses `forwardRef` — pass a `ref` to access the container DOM node.

## Hook (Advanced)

For full control over markup, use the hook directly:

```tsx
import { useContinuousCarousel } from 'react-continuous-carousel';
import 'continuous-carousel/css';

function CustomCarousel() {
  const { ref, play, pause } = useContinuousCarousel({
    direction: 'vertical',
    numVisible: 1,
  });

  return (
    <div>
      <div ref={ref} className="c-carousel-container">
        <ul className="c-carousel-group">
          <li className="c-carousel-item">Slide 1</li>
          <li className="c-carousel-item">Slide 2</li>
          <li className="c-carousel-item">Slide 3</li>
        </ul>
      </div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}
```

The hook returns:

| Property | Type | Description |
|----------|------|-------------|
| `ref` | `(node: HTMLElement \| null) => void` | Ref callback — attach to your container |
| `play` | `() => void` | Resume carousel |
| `pause` | `() => void` | Pause carousel |

## License

MIT
