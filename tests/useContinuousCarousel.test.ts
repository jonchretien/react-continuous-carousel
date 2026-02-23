import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useContinuousCarousel } from '../src/useContinuousCarousel';

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

describe('useContinuousCarousel', () => {
  it('creates instance when ref callback receives a node', () => {
    const { result } = renderHook(() => useContinuousCarousel({ direction: 'vertical' }));

    const node = document.createElement('div');
    act(() => {
      result.current.ref(node);
    });

    expect(mockFactory).toHaveBeenCalledWith(node, { direction: 'vertical' });
  });

  it('destroys instance when ref receives null', () => {
    const instance = { ...mockInstance };
    mockFactory.mockReturnValueOnce(instance);

    const { result } = renderHook(() => useContinuousCarousel());

    act(() => {
      result.current.ref(document.createElement('div'));
    });

    act(() => {
      result.current.ref(null);
    });

    expect(instance.destroy).toHaveBeenCalled();
  });

  it('destroys instance on unmount', () => {
    const instance = { ...mockInstance };
    mockFactory.mockReturnValueOnce(instance);

    const { result, unmount } = renderHook(() => useContinuousCarousel());

    act(() => {
      result.current.ref(document.createElement('div'));
    });

    unmount();
    expect(instance.destroy).toHaveBeenCalled();
  });

  it('exposes play and pause methods', () => {
    const instance = { ...mockInstance };
    mockFactory.mockReturnValueOnce(instance);

    const { result } = renderHook(() => useContinuousCarousel());

    act(() => {
      result.current.ref(document.createElement('div'));
    });

    act(() => {
      result.current.play();
      result.current.pause();
    });

    expect(instance.play).toHaveBeenCalled();
    expect(instance.pause).toHaveBeenCalled();
  });
});
