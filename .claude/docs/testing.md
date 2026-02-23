# Testing

Tests mock the entire `continuous-carousel` module — they verify React wiring (init on mount, destroy on unmount, config forwarding, ref exposure), **not** carousel behavior.

Uses `@testing-library/react` + vitest + jsdom.
