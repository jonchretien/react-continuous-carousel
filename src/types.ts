import type ContinuousCarouselFactory from 'continuous-carousel';

/** Full config type from the vanilla library. */
type ContinuousCarouselInstance = ReturnType<typeof ContinuousCarouselFactory>;
type ContinuousCarouselConfig = ContinuousCarouselInstance['config'];

/** Callback props extracted from config for top-level component API. */
export interface CarouselCallbacks {
  onSlideChange?: (index: number, element: HTMLElement) => void;
  onSlideEnd?: (index: number, element: HTMLElement) => void;
  onPause?: () => void;
  onPlay?: () => void;
  onDestroy?: () => void;
}

/** Vanilla config options minus callbacks (those are top-level props). */
export type CarouselOptions = Partial<
  Omit<ContinuousCarouselConfig, 'onSlideChange' | 'onSlideEnd' | 'onPause' | 'onPlay' | 'onDestroy'>
>;

/** Props for the ContinuousCarousel component. */
export interface ContinuousCarouselProps extends CarouselOptions, CarouselCallbacks {
  /** A single <ul> element whose <li> children become slides. */
  children: React.ReactElement<React.HTMLAttributes<HTMLUListElement>>;
  className?: string;
}

/** Options accepted by the useContinuousCarousel hook. */
export type UseContinuousCarouselOptions = Partial<ContinuousCarouselConfig>;
