# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2026-05-24

### Added
- `onSlideEnd` callback prop — fires after the slide transition completes; receives `(index: number, element: HTMLElement)`
- `easing` config prop (`string`) — sets the CSS `transition-timing-function`; default `'ease-in-out'`; live-swappable via `updateConfig()`
- `goToSlide(index)` returned from `useContinuousCarousel` — snaps to a 0-based slide index

### Changed
- `onSlideChange` now receives `element: HTMLElement` as a second argument (backwards-compatible)
- Bumped `continuous-carousel` peer from `^1.1.0` to `^1.3.0`

---

## [2.0.0] - 2026-05-21

### Changed
- **Children API** — component now expects a single `<ul>` child whose `<li>` children become slides; required classes injected via `cloneElement`

### Fixed
- Add `c-carousel-group` wrapper to match vanilla library's DOM structure
- Add `data-direction` attribute so vanilla library CSS selectors apply

---

## [1.0.0] - 2026-02-23

### Added

- `ContinuousCarousel` component with forwardRef, callback props, auto-reinit on child count change
- `useContinuousCarousel` hook with ref callback, play/pause methods
- ESM + CJS dual build with TypeScript declarations
- CI workflow (PRs) and publish workflow (v* tags)

---

[2.1.0]: https://github.com/jonchretien/react-continuous-carousel/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/jonchretien/react-continuous-carousel/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/jonchretien/react-continuous-carousel/releases/tag/v1.0.0
