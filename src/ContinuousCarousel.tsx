import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, Children, cloneElement, isValidElement } from 'react';
import ContinuousCarouselFactory from 'continuous-carousel';
import type { ContinuousCarouselProps } from './types';

export const ContinuousCarousel = forwardRef<HTMLDivElement, ContinuousCarouselProps>(
  function ContinuousCarousel(
    { children, className, onSlideChange, onSlideEnd, onPause, onPlay, onDestroy, ...config },
    forwardedRef,
  ) {
    const containerRef = useRef<HTMLDivElement>(null);
    const instanceRef = useRef<ReturnType<typeof ContinuousCarouselFactory> | null>(null);

    // Count <li> children inside the <ul> for reinit detection
    const ulChild = children as React.ReactElement<React.HTMLAttributes<HTMLUListElement> & { children?: React.ReactNode }>;
    const childCount = Children.count(ulChild?.props?.children);

    useImperativeHandle(forwardedRef, () => containerRef.current!, []);

    const getConfig = useCallback(() => {
      return {
        ...config,
        onSlideChange: onSlideChange ?? null,
        onSlideEnd: onSlideEnd ?? null,
        onPause: onPause ?? null,
        onPlay: onPlay ?? null,
        onDestroy: onDestroy ?? null,
      };
    }, [config, onSlideChange, onSlideEnd, onPause, onPlay, onDestroy]);

    // Init/reinit when slide count changes
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

    // Inject c-carousel-group onto the <ul> and c-carousel-item onto each <li>
    const renderGroup = () => {
      if (!isValidElement(ulChild)) return children;
      const items = Children.map(ulChild.props.children, (child) => {
        if (!isValidElement(child)) return child;
        const li = child as React.ReactElement<React.HTMLAttributes<HTMLLIElement>>;
        const existing = li.props.className;
        return cloneElement(li, {
          className: existing ? `c-carousel-item ${existing}` : 'c-carousel-item',
        });
      });
      return cloneElement(ulChild, { className: 'c-carousel-group', children: items });
    };

    return (
      <div
        ref={containerRef}
        className={`c-carousel-container${className ? ` ${className}` : ''}`}
        data-direction={config.direction ?? 'horizontal'}
      >
        {renderGroup()}
      </div>
    );
  },
);
