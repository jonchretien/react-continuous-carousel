import { useState } from 'react'
import 'continuous-carousel/css'
import { useContinuousCarousel } from 'react-continuous-carousel'

const SLIDES = [
  { label: 'Slide 1', color: '#3b82f6' },
  { label: 'Slide 2', color: '#8b5cf6' },
  { label: 'Slide 3', color: '#ec4899' },
  { label: 'Slide 4', color: '#f59e0b' },
  { label: 'Slide 5', color: '#10b981' },
  { label: 'Slide 6', color: '#ef4444' },
]

export function CarouselControlsDemoReact() {
  const [isPlaying, setIsPlaying] = useState(true)
  const { ref, play, pause } = useContinuousCarousel({
    numVisible: 3,
    interval: 2500,
    pauseOnHover: true,
  })

  function handlePause() {
    pause()
    setIsPlaying(false)
  }

  function handlePlay() {
    play()
    setIsPlaying(true)
  }

  return (
    <div className="demo-wrapper">
      <div style={{ padding: '1rem' }}>
        <div ref={ref} className="c-carousel-container demo-carousel" data-direction="horizontal">
          <ul className="c-carousel-group">
            {SLIDES.map(({ label, color }) => (
              <li key={label} className="c-carousel-item">
                <div
                  className="demo-slide"
                  style={{ background: color, width: '100%', height: '100%' }}
                >
                  {label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="demo-controls">
        <button type="button" onClick={handlePause} data-active={!isPlaying}>Pause</button>
        <button type="button" onClick={handlePlay} data-active={isPlaying}>Play</button>
      </div>
    </div>
  )
}
