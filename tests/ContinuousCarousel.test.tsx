import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createRef } from 'react';
import { ContinuousCarousel } from '../src/ContinuousCarousel';

// Mock the vanilla library
const mockInstance = {
  play: vi.fn(),
  pause: vi.fn(),
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

describe('ContinuousCarousel', () => {
  it('renders children wrapped in list items', () => {
    render(
      <ContinuousCarousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </ContinuousCarousel>,
    );

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(screen.getByText('Slide 1')).toBeDefined();
    expect(screen.getByText('Slide 2')).toBeDefined();
    expect(screen.getByText('Slide 3')).toBeDefined();
  });

  it('applies c-carousel-container class to container', () => {
    render(
      <ContinuousCarousel>
        <div>Slide</div>
      </ContinuousCarousel>,
    );

    const list = screen.getByRole('list');
    expect(list.className).toContain('c-carousel-container');
  });

  it('appends custom className', () => {
    render(
      <ContinuousCarousel className="my-carousel">
        <div>Slide</div>
      </ContinuousCarousel>,
    );

    const list = screen.getByRole('list');
    expect(list.className).toBe('c-carousel-container my-carousel');
  });

  it('initializes carousel on mount', () => {
    render(
      <ContinuousCarousel direction="vertical" numVisible={2}>
        <div>Slide</div>
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
        <div>Slide</div>
      </ContinuousCarousel>,
    );

    unmount();
    expect(instance.destroy).toHaveBeenCalled();
  });

  it('forwards callbacks as config options', () => {
    const onSlideChange = vi.fn();
    const onPause = vi.fn();

    render(
      <ContinuousCarousel onSlideChange={onSlideChange} onPause={onPause}>
        <div>Slide</div>
      </ContinuousCarousel>,
    );

    const [, config] = mockFactory.mock.calls[0];
    expect(config.onSlideChange).toBe(onSlideChange);
    expect(config.onPause).toBe(onPause);
    expect(config.onPlay).toBeNull();
    expect(config.onDestroy).toBeNull();
  });

  it('exposes container via forwardRef', () => {
    const ref = createRef<HTMLUListElement>();

    render(
      <ContinuousCarousel ref={ref}>
        <div>Slide</div>
      </ContinuousCarousel>,
    );

    expect(ref.current).toBeInstanceOf(HTMLUListElement);
    expect(ref.current?.className).toContain('c-carousel-container');
  });
});
