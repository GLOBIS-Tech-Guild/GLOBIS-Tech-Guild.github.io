# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GLOBIS Tech Guild landing page - a single-page React application built with Vite, TypeScript, and Tailwind CSS v4. Deployed to GitHub Pages at https://globis-tech-guild.github.io/

## Development Commands

```bash
# Install dependencies
npm install    # Development install
npm ci         # Clean install (CI/production)

# Development
npm run dev    # Start dev server at http://localhost:3000 (auto-opens browser)

# Build & Deploy
npm run build     # Create production build in build/ directory
npm run preview   # Preview production build locally
npm run deploy    # Deploy to GitHub Pages via gh-pages

# Code Quality
npm run lint      # Check formatting with Prettier
npm run lint:fix  # Auto-fix formatting issues
npm run prettier  # Alias for lint (used in CI)
npm run prettier:fix  # Alias for lint:fix
```

## Architecture & Structure

### Component Organization

- **Entry Point**: `src/main.tsx` → mounts `App.tsx` to `#root`
- **Page Layout**: `App.tsx` orchestrates the single-page structure:
  - Header → HeroSection → AboutSection → ActivitiesSection → Footer
- **Section Components**: Located in `src/components/`, each section is an independent component
- **UI Library**: `src/components/ui/` contains 40+ shadcn/ui components built on Radix UI primitives
- **Figma Integration**: `src/components/figma/` provides image fallback utilities

### Styling System

- **Tailwind CSS v4**: Uses new layer syntax (`@layer`, `@theme`, `@custom-variant`)
- **Design Tokens**: Centralized in `src/styles/globals.css` with CSS custom properties
- **Theming**: Dark mode support via CSS variables, managed through Tailwind utilities
- **Component Variants**: Powered by `class-variance-authority` (CVA) for type-safe styling

### Build Configuration

- **Vite Setup**: Uses `@vitejs/plugin-react-swc` for optimal React 18 + JSX performance
- **Dependency Pinning**: `vite.config.ts` contains 30+ version-specific aliases for Radix UI stability
- **TypeScript**: Strict mode enabled with bundler module resolution
- **Output**: Production builds to `build/` directory (not `dist/`)

### CI/CD Pipeline

- **GitHub Actions Workflows**:
  - `ci.yml`: Runs on PRs to main/develop - checks formatting and build
  - `deploy.yml`: Auto-deploys main branch to GitHub Pages with Slack notifications
- **Node Version**: Locked to Node.js 20.x for consistency with CI
- **Deployment**: Uses GitHub Pages action with artifact upload/download pattern

## Key Technical Decisions

1. **Radix UI Component Strategy**: All UI components wrap Radix primitives for accessibility, using shadcn/ui patterns but customized for project needs

2. **Vite Alias Configuration**: Extensive dependency version locking prevents transitive dependency conflicts in the Radix ecosystem

3. **Build Output Directory**: Uses `build/` instead of default `dist/` to align with gh-pages tool expectations

4. **Prettier Configuration**: No semicolons, single quotes, 100-char line width - enforced in CI

5. **Component File Naming**: React components use PascalCase `.tsx` files, matching their export names

## Development Notes

- **Port 3000**: Dev server configured for port 3000 (not Vite's default 5173)
- **Auto-open Browser**: Dev server automatically opens browser on start
- **Strict TypeScript**: No unused locals/parameters allowed, strict null checks enabled
- **CSS Architecture**: Global styles in `globals.css`, component styles via Tailwind utilities only
- **Asset Management**: Static assets in `src/assets/`, served through Vite's asset pipeline
