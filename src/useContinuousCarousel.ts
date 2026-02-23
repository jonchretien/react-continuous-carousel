import { useCallback, useEffect, useRef } from 'react';
import ContinuousCarouselFactory from 'continuous-carousel';
import type { UseContinuousCarouselOptions } from './types';

export function useContinuousCarousel(options: UseContinuousCarouselOptions = {}) {
  const instanceRef = useRef<ReturnType<typeof ContinuousCarouselFactory> | null>(null);
  const nodeRef = useRef<HTMLElement | null>(null);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  const ref = useCallback((node: HTMLElement | null) => {
    // Destroy previous instance when node changes
    if (instanceRef.current) {
      instanceRef.current.destroy();
      instanceRef.current = null;
    }

    nodeRef.current = node;

    if (node) {
      instanceRef.current = ContinuousCarouselFactory(node, optionsRef.current);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
    };
  }, []);

  const play = useCallback(() => instanceRef.current?.play(), []);
  const pause = useCallback(() => instanceRef.current?.pause(), []);

  return { ref, play, pause };
}
