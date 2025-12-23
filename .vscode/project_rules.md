# Project Rules Guide

## 1. Project Framework Versions & Dependencies

### Core Framework

- Next.js ^15.0.0 (App Router)
- React ^18.3.0 or ^19.0.0
- Node.js >=18.17.0

### Styling

- TailwindCSS 4


### State & Data

- Zustand ^4.5.0
- TanStack Query ^5.0.0

### Database

- Prisma ^5.0.0
- PostgreSQL ^15.0 (Neon)

### Auth & AI

- BetterAuth ^1.0.0
- Vercel AI SDK ^3.0.0
- Zod ^3.22.0

## 2. Testing Framework Details

### Stack

- Vitest ^1.0.0
- @testing-library/react ^14.0.0
- MSW ^2.0.0

### Test Structure

```javascript
// Component.test.js
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('text')).toBeInTheDocument();
  });
});
```

## 3. Prohibited APIs

### ❌ Never Use

- TypeScript (JavaScript only)
- Pages Router (App Router only)
- Class components
- Default exports
- localStorage in Server Components
- CSS Modules
- next/head (use Metadata API)
- getServerSideProps/getStaticProps

## Code Conventions

### File Structure

```
/app - Next.js App Router
/components/ui - Reusable UI
/components/features - Feature components
/lib - Utils, auth, db
/hooks - Custom hooks
/stores - Zustand stores
/prisma - Schema & migrations
```

### Naming

- Components: PascalCase
- Hooks: camelCase with use prefix
- Utils: camelCase
- Constants: UPPER_SNAKE_CASE

### Next.js Patterns

- Server Components by default
- Add 'use client' only for hooks/events
- Use Server Actions for mutations
- Route handlers in /app/api

### State Management

- Zustand for global state
- TanStack Query for server state
- Avoid useState for server data

### Styling

- TailwindCSS utilities only
- Mobile-first responsive
- No inline styles

### Database

- Prisma ORM with PostgreSQL
- Use connection pooling (Neon)
- Singleton client pattern

### Authentication

- BetterAuth with Prisma adapter
- Google/GitHub OAuth
- Server-side session checks

### AI Integration

- OpenRouter via Vercel AI SDK
- Stream responses
- Rate limit endpoints

### Security

- Never commit .env files
- Validate with Zod
- CSRF protection enabled
- Rate limit APIs

### Performance

- Next.js Image component
- Suspense for loading
- Dynamic imports
- TanStack Query caching

### Error Handling

- Error boundaries
- User-friendly messages
- Log errors properly

### Testing

- Unit tests for utils
- Integration tests for APIs
- React Testing Library for components
- Mock external services
