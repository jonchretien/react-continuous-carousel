import 'continuous-carousel/css'
import { ContinuousCarousel } from 'react-continuous-carousel'
import type { ContinuousCarouselProps } from 'react-continuous-carousel'

const SLIDES = [
  { label: 'Slide 1', color: '#3b82f6' },
  { label: 'Slide 2', color: '#8b5cf6' },
  { label: 'Slide 3', color: '#ec4899' },
  { label: 'Slide 4', color: '#f59e0b' },
  { label: 'Slide 5', color: '#10b981' },
  { label: 'Slide 6', color: '#ef4444' },
]

type Props = Pick<ContinuousCarouselProps,
  'direction' | 'reverse' | 'numVisible' | 'interval' | 'pauseOnHover'
> & { height?: string }

export function CarouselDemoReact({
  direction = 'horizontal',
  reverse = false,
  numVisible = 3,
  interval = 3000,
  height = '100px',
  pauseOnHover = false,
}: Props) {
  const isVertical = direction === 'vertical'

  return (
    <div className="demo-wrapper" style={{ '--demo-h': height } as React.CSSProperties}>
      <ContinuousCarousel
        className={`demo-carousel${isVertical ? ' demo-carousel--vertical' : ''}`}
        direction={direction}
        reverse={reverse}
        numVisible={numVisible}
        interval={interval}
        pauseOnHover={pauseOnHover}
      >
        <ul>
          {SLIDES.map(({ label, color }) => (
            <li
              key={label}
              className="demo-slide"
              style={{
                background: color,
                ...(isVertical ? { width: '100%' } : { height: '100%' }),
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      </ContinuousCarousel>
    </div>
  )
}
