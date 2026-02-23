# Contributing

Thanks for your interest in contributing to React Continuous Carousel!

## Setup

```bash
git clone https://github.com/jonchretien/react-continuous-carousel.git
cd react-continuous-carousel
npm ci
```

## Development

```bash
npm run dev       # Watch mode
npm run build     # Full build
npm test          # Run tests
npm run typecheck # Type checking
```

## Commit Convention

Format: `type: description`

| Type | Use |
|------|-----|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `refactor:` | Code refactoring |
| `docs:` | Documentation |
| `test:` | Test updates |
| `chore:` | Tooling, deps |
| `ci:` | CI/CD changes |

Examples:
- `feat: add className prop`
- `fix: cleanup on unmount`

## Pull Requests

1. Fork the repo and create a feature branch
2. Make your changes in `src/`
3. Add/update tests as needed
4. Run `npm test` and `npm run typecheck`
5. Submit a PR with a clear description
