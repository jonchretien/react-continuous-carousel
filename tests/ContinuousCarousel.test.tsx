import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createRef } from 'react';
import { ContinuousCarousel } from '../src/ContinuousCarousel';

// Mock the vanilla library
const mockInstance = {
  play: vi.fn(),
  pause: vi.fn(),
  goToSlide: vi.fn(),
  destroy: vi.fn(),
  updateConfig: vi.fn(),
  container: null as unknown as HTMLElement,
  config: {} as any,
};

const mockFactory = vi.fn(() => ({ ...mockInstance }));

vi.mock('continuous-carousel', () => ({
  default: (...args: any[]) => mockFactory(...args),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(cleanup);

const slides = (
  <ul>
    <li>Slide 1</li>
    <li>Slide 2</li>
    <li>Slide 3</li>
  </ul>
);

describe('ContinuousCarousel', () => {
  it('renders children wrapped in list items', () => {
    render(<ContinuousCarousel>{slides}</ContinuousCarousel>);

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(screen.getByText('Slide 1')).toBeDefined();
    expect(screen.getByText('Slide 2')).toBeDefined();
    expect(screen.getByText('Slide 3')).toBeDefined();
  });

  it('applies c-carousel-container class to container', () => {
    render(
      <ContinuousCarousel>
        <ul><li>Slide</li></ul>
      </ContinuousCarousel>,
    );

    const outer = document.querySelector('.c-carousel-container')!;
    expect(outer.className).toContain('c-carousel-container');
  });

  it('appends custom className', () => {
    render(
      <ContinuousCarousel className="my-carousel">
        <ul><li>Slide</li></ul>
      </ContinuousCarousel>,
    );

    const outer = document.querySelector('.c-carousel-container')!;
    expect(outer.className).toBe('c-carousel-container my-carousel');
  });

  it('initializes carousel on mount', () => {
    render(
      <ContinuousCarousel direction="vertical" numVisible={2}>
        <ul><li>Slide</li></ul>
      </ContinuousCarousel>,
    );

    expect(mockFactory).toHaveBeenCalledTimes(1);
    const [element, config] = mockFactory.mock.calls[0];
    expect(element).toBeInstanceOf(HTMLElement);
    expect(config.direction).toBe('vertical');
    expect(config.numVisible).toBe(2);
  });

  it('destroys carousel on unmount', () => {
    const instance = { ...mockInstance };
    mockFactory.mockReturnValueOnce(instance);

    const { unmount } = render(
      <ContinuousCarousel>
        <ul><li>Slide</li></ul>
      </ContinuousCarousel>,
    );

    unmount();
    expect(instance.destroy).toHaveBeenCalled();
  });

  it('forwards callbacks as config options', () => {
    const onSlideChange = vi.fn();
    const onSlideEnd = vi.fn();
    const onPause = vi.fn();

    render(
      <ContinuousCarousel onSlideChange={onSlideChange} onSlideEnd={onSlideEnd} onPause={onPause}>
        <ul><li>Slide</li></ul>
      </ContinuousCarousel>,
    );

    const [, config] = mockFactory.mock.calls[0];
    expect(config.onSlideChange).toBe(onSlideChange);
    expect(config.onSlideEnd).toBe(onSlideEnd);
    expect(config.onPause).toBe(onPause);
    expect(config.onPlay).toBeNull();
    expect(config.onDestroy).toBeNull();
  });

  it('exposes container via forwardRef', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <ContinuousCarousel ref={ref}>
        <ul><li>Slide</li></ul>
      </ContinuousCarousel>,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.className).toContain('c-carousel-container');
  });

  it('renders c-carousel-group ul inside container', () => {
    render(
      <ContinuousCarousel>
        <ul><li>Slide</li></ul>
      </ContinuousCarousel>,
    );

    const group = document.querySelector('.c-carousel-container .c-carousel-group');
    expect(group).not.toBeNull();
    expect(group?.tagName).toBe('UL');
  });

  it('injects c-carousel-item onto each li', () => {
    render(<ContinuousCarousel>{slides}</ContinuousCarousel>);

    const items = document.querySelectorAll('.c-carousel-item');
    expect(items).toHaveLength(3);
  });
});
