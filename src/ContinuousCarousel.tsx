import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, Children } from 'react';
import ContinuousCarouselFactory from 'continuous-carousel';
import type { ContinuousCarouselProps } from './types';

export const ContinuousCarousel = forwardRef<HTMLUListElement, ContinuousCarouselProps>(
  function ContinuousCarousel(
    { children, className, onSlideChange, onPause, onPlay, onDestroy, ...config },
    forwardedRef,
  ) {
    const containerRef = useRef<HTMLUListElement>(null);
    const instanceRef = useRef<ReturnType<typeof ContinuousCarouselFactory> | null>(null);
    const childCount = Children.count(children);

    useImperativeHandle(forwardedRef, () => containerRef.current!, []);

    // Build full config with callbacks
    const getConfig = useCallback(() => {
      return {
        ...config,
        onSlideChange: onSlideChange ?? null,
        onPause: onPause ?? null,
        onPlay: onPlay ?? null,
        onDestroy: onDestroy ?? null,
      };
    }, [config, onSlideChange, onPause, onPlay, onDestroy]);

    // Init/reinit when child count changes
    useEffect(() => {
      const node = containerRef.current;
      if (!node) return;

      instanceRef.current = ContinuousCarouselFactory(node, getConfig());

      return () => {
        if (instanceRef.current) {
          instanceRef.current.destroy();
          instanceRef.current = null;
        }
      };
    }, [childCount]); // eslint-disable-line react-hooks/exhaustive-deps

    // Update config when props change (without reinit)
    useEffect(() => {
      instanceRef.current?.updateConfig(getConfig());
    }, [getConfig]);

    return (
      <ul ref={containerRef} className={`c-carousel-container${className ? ` ${className}` : ''}`}>
        {Children.map(children, (child) => (
          <li className="c-carousel-item">{child}</li>
        ))}
      </ul>
    );
  },
);
