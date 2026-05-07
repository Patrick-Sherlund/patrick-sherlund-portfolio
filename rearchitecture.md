# Rearchitecture Plan

## Purpose

This document defines the full rearchitecture plan for the current Next.js port in this repository. It is intended to be complete enough that any agent can resume the work without needing the earlier chat context.

The current app is a Phase 1 port from a Figma Make Vite SPA into Next.js App Router. It is functional at the code level, but the structure is still close to the original Figma-generated organization. The next step is a controlled rearchitecture that improves maintainability, SEO readiness, asset management, and component boundaries without changing the user-facing appearance or behavior.

## Primary Constraints

- Preserve current visual output and interactions unless the user explicitly approves a change.
- Preserve current public routes:
  - `/`
  - `/bishop`
- Keep the app in React + TypeScript + Next.js.
- Prefer incremental refactors over rewrites.
- Do not treat this as a redesign.
- Do not reintroduce dependence on Figma-only runtime asset imports.
- Do not reintroduce `react-router-dom`.
- Maintain local static assets under `public/`.

## Current Repo Snapshot

### Current top-level app shape

- Framework: Next.js App Router
- Language: TypeScript
- Runtime split:
  - `src/app/layout.tsx`
  - `src/app/page.tsx`
  - `src/app/bishop/page.tsx`
- Home page composition:
  - `src/components/HomePage.tsx`
- Bishop page composition:
  - `src/components/BishopPage.tsx`

### Current major files

- App shell:
  - `src/app/layout.tsx`
  - `src/app/globals.css`
- Theme/runtime:
  - `src/contexts/ThemeContext.tsx`
  - `src/hooks/usePreloadImages.ts`
- Home route:
  - `src/components/HomePage.tsx`
  - `src/components/HomeHero.tsx`
  - `src/components/ProfessionalProjectsBanner.tsx`
  - `src/components/ProjectPage.tsx`
  - `src/components/ProjectButtonArrow.tsx`
  - `src/components/AerotVideoOverlay.tsx`
  - `src/components/BishopVideoOverlay.tsx`
  - `src/components/SpartaVideoOverlay.tsx`
  - `src/components/RaiderVideoOverlay.tsx`
  - `src/components/ExodusVideoOverlay.tsx`
  - `src/components/CrusaderVideoOverlay.tsx`
  - `src/components/ThemeToggle.tsx`
  - `src/components/BubbleIn.tsx`
- Bishop route:
  - `src/components/BishopPage.tsx`
  - `src/components/BackToProjects.tsx`
  - `src/components/BishopCaseStudyHero.tsx`
  - `src/components/BishopMyRoleStack.tsx`
  - `src/components/BishopChallengeVision.tsx`
  - `src/components/BishopUsersSaw.tsx`
  - `src/components/BishopDiscover.tsx`
- Asset indirection:
  - `src/lib/assetPaths.ts`
- SVG path payloads:
  - `src/lib/svg-r3w32ldrgh.ts`
  - `src/lib/svg-pagdlx3wn8.ts`

### Current large-file hotspots

- `src/components/BishopDiscover.tsx`: 1090 lines
- `src/components/BishopDiscover.css`: 1372 lines
- `src/components/HomeHero.css`: 463 lines
- `src/components/BishopProposedProcess.css`: 431 lines
- `src/components/ProjectPage.css`: 367 lines

These are the primary structural risk areas.

### Current static assets

- Home assets:
  - `public/assets/images/home/*`
- Page/device assets:
  - `public/assets/images/pages/*`
- Bishop assets:
  - `public/assets/images/bishop/bishop-logo.png`
  - `public/assets/images/bishop/vision-sparkle.png`
  - `public/assets/images/bishop/vision-bubble-1.png`
  - `public/assets/images/bishop/vision-bubble-2.png`
  - `public/assets/images/bishop/vision-bubble-3.png`
  - `public/assets/images/bishop/vision-bubble-4.png`
  - `public/assets/images/bishop/vision-bubble-5.png`
  - `public/assets/images/bishop/persona-kyle.png`
  - `public/assets/images/bishop/persona-mandy.png`
  - `public/assets/images/bishop/persona-tyler.png`
- Videos:
  - `public/assets/videos/*`
- Fonts:
  - `public/assets/fonts/*`

### Current known technical debt

- Route assembly still lives in large client page components instead of route-feature folders.
- CSS is globally imported from `src/app/globals.css` instead of being scoped by feature.
- `BishopDiscover` is a monolith with multiple unrelated responsibilities:
  - sticky header behavior
  - context/research transition
  - persona carousel
  - “what we learned” cards
  - “reality today”
  - problem/success transition
  - proposed/proved transition
  - process video step tracker
- Home page project data is hardcoded directly inside `HomePage.tsx`.
- Asset paths are centralized in a single `assetPaths.ts` instead of feature-local modules.
- Theme handling works, but still lives under `contexts/` instead of a more explicit feature/runtime boundary.
- There are still some inline styles and effect-heavy components that should be isolated and simplified without changing visuals.
- `figma_bishop.html` is an ad hoc artifact and should not be part of the long-term app structure.
- `public/assets/images/bishop/sparkle.svg` is obsolete if `vision-sparkle.png` is the chosen source.
- `public/assets/images/pages/devices/laptop_old.png` may be obsolete and should be reviewed before deletion.

### Current verification state

- `npx tsc --noEmit` passes against the actual app.
- Next.js compile reaches successful compilation.
- Local `next dev` and final `next build` execution are blocked in this environment by Windows `spawn EPERM`.
- Treat this as an environment/runtime verification blocker, not necessarily an app code blocker.

## Rearchitecture Goals

1. Organize the app by route and feature instead of by a flat component dump.
2. Move long files into cohesive sections with explicit ownership.
3. Separate content/data from presentation and effects.
4. Reduce global CSS coupling while preserving exact rendering.
5. Make metadata, sitemap, structured data, and SEO work easier to add and maintain.
6. Make future routes and case studies straightforward to add without duplicating page architecture.

## Non-Goals

- No visual redesign.
- No copy rewrite unless explicitly requested.
- No route changes.
- No library/framework rewrite away from Next.js.
- No broad animation redesign.

## Target Architecture

Use a route-feature structure with shared UI and shared runtime separated clearly.

```text
src/
  app/
    layout.tsx
    globals.css
    page.tsx
    bishop/
      page.tsx
  features/
    home/
      components/
        HomeHero.tsx
        ProfessionalProjectsBanner.tsx
        ProjectShowcase.tsx
        ProjectCard.tsx
        DeviceFrame.tsx
        VideoOverlay.tsx
      data/
        projects.ts
      styles/
        home.css
        project-showcase.css
      index.ts
    bishop/
      components/
        BishopHero.tsx
        BishopRoleStack.tsx
        BishopChallengeVision.tsx
        BishopUsersSaw.tsx
        discover/
          DiscoverHeader.tsx
          ContextResearchSection.tsx
          PersonaLearnedSection.tsx
          RealitySection.tsx
          ProblemSuccessSection.tsx
          ProposedProvedSection.tsx
          ProcessStepper.tsx
      data/
        bishop-content.ts
        bishop-assets.ts
        bishop-metrics.ts
      hooks/
        useStickySection.ts
        useCrossfadeScroll.ts
        useVideoStepProgress.ts
      styles/
        bishop-hero.css
        bishop-role-stack.css
        bishop-challenge-vision.css
        bishop-users-saw.css
        bishop-discover.css
      index.ts
    theme/
      ThemeProvider.tsx
      ThemeToggle.tsx
      theme-storage.ts
    motion/
      BubbleIn.tsx
      useBubbleIn.ts
  shared/
    components/
      BackLink.tsx
      Section.tsx
      ExternalLink.tsx
    media/
      asset-paths.ts
    seo/
      metadata.ts
      jsonld.ts
    utils/
      dom.ts
      scroll.ts
  content/
    site.ts
    navigation.ts
```

## Directory Rules

- `app/` only owns route entry points, layout, metadata plumbing, and route-level server wrappers.
- `features/` owns route-specific UI, data, effects, and styles.
- `shared/` owns route-agnostic primitives and helpers.
- `content/` owns stable content models and page metadata that are not component concerns.
- `public/assets/` remains the source of static images, fonts, and videos.

## Recommended Work Sequence

This should be executed as a single controlled rearchitecture stream, but internally it should be done in the following order.

### 1. Stabilize feature boundaries

- Create `src/features/home` and `src/features/bishop`.
- Move route-specific components out of `src/components`.
- Keep file contents unchanged initially except for import path updates.
- Keep route pages thin:
  - `src/app/page.tsx` should render a home feature entry.
  - `src/app/bishop/page.tsx` should render a bishop feature entry.

### 2. Split route assemblers from content

#### Home

Replace hardcoded project definitions in `src/components/HomePage.tsx` with structured data:

- Create `src/features/home/data/projects.ts`.
- Define one object per project:
  - `id`
  - `number`
  - `title`
  - `subtitle`
  - `description`
  - `techStack`
  - `buttonText`
  - `buttonLink`
  - `device`
  - `media`
  - `seoPriority`

Then:

- Replace `HomePage.tsx` with a feature entry like `HomeRoute.tsx`.
- Map over `projects.ts`.
- Convert the duplicated project section wrappers into a single list-driven render.

#### Bishop

Create a bishop content module to hold static content:

- `src/features/bishop/data/bishop-content.ts`

Move into data:

- hero copy
- role copy
- users-saw stats
- discover/define labels
- learned cards
- success metrics
- proved cards
- process steps

Goal: `BishopDiscover.tsx` should stop owning content constants and become orchestration only.

### 3. Break apart `BishopDiscover`

This is the highest-priority refactor.

Split `BishopDiscover.tsx` into these pieces:

- `DiscoverHeader.tsx`
  - sticky header title/subtitle
  - centered transform behavior
- `ContextResearchSection.tsx`
  - “Why this started”
  - discovery interviews/workshops title
  - first carousel
- `PersonaLearnedSection.tsx`
  - persona carousel
  - learned cards
- `RealitySection.tsx`
  - “The Reality Today”
- `ProblemSuccessSection.tsx`
  - problem statement
  - success metric cards
- `ProposedProvedSection.tsx`
  - process stepper
  - process video
  - proved cards
- `ProcessStepper.tsx`
  - extracted from proposed/proved section

Then extract hooks:

- `useStickySection.ts`
  - sticky state
  - center shift computation
- `useCrossfadeScroll.ts`
  - generic scroll progress for sticky full-screen transitions
- `useVideoStepProgress.ts`
  - active step and progress from `timeupdate`

The refactor must preserve exact behavior before any cleanup of CSS values.

### 4. Replace global CSS imports with feature-level style ownership

Current problem:

- `src/app/globals.css` imports every component stylesheet globally.

Target:

- `globals.css` should only contain:
  - font-face definitions
  - Tailwind layers
  - app-wide resets
  - global typography tokens
  - truly shared utility classes

Move route/feature CSS ownership into feature entry points:

- Home feature entry imports:
  - home route styles
  - project showcase styles
  - theme toggle if still feature-local
- Bishop feature entry imports:
  - bishop route styles

If Next restrictions make CSS Modules the better path, convert incrementally:

- leave exact selector names intact initially
- then move from global CSS files to `*.module.css` where practical
- do not attempt to module-convert every file at once

Recommended order:

- first feature-level global CSS files
- then optional CSS Modules for smaller components

### 5. Unify repeated media and frame patterns

Current duplication:

- six separate video overlay components
- repeated device frame behavior inside `ProjectPage.tsx`
- repeated iPad video frame behavior inside bishop sections

Target components:

- `shared/components/DeviceFrame.tsx`
  - handles laptop/ipad/iphone/mmc/apple-display shell
- `shared/components/VideoOverlay.tsx`
  - renders autoplay muted looping video consistently
- `features/home/components/ProjectCard.tsx`
  - combines text + media + CTA

This should remove:

- `AerotVideoOverlay.tsx`
- `BishopVideoOverlay.tsx`
- `SpartaVideoOverlay.tsx`
- `RaiderVideoOverlay.tsx`
- `ExodusVideoOverlay.tsx`
- `CrusaderVideoOverlay.tsx`

Only delete those after the replacement is verified.

### 6. Rationalize asset ownership

Current state:

- `src/lib/assetPaths.ts` contains all asset paths for all routes.

Target:

- route-specific asset maps live with route features
- only truly shared assets stay in `shared/media/asset-paths.ts`

Recommended split:

- `src/features/home/data/home-assets.ts`
- `src/features/bishop/data/bishop-assets.ts`
- `src/shared/media/device-assets.ts`

Also review obsolete files:

- `public/assets/images/bishop/sparkle.svg`
- `public/assets/images/pages/devices/laptop_old.png`
- `figma_bishop.html`

Delete only after confirming they are unused.

### 7. Tighten theme/runtime boundaries

Current state:

- Theme is implemented in `src/contexts/ThemeContext.tsx`.
- `ThemeToggle` lives in flat components.

Target:

- Move theme code under `src/features/theme/`.
- Keep custom theme implementation unless there is a compelling reason to adopt another library.

Recommended result:

- `src/features/theme/ThemeProvider.tsx`
- `src/features/theme/ThemeToggle.tsx`
- `src/features/theme/theme-storage.ts`

Optional improvement:

- add a small inline theme initialization script in layout to prevent first-paint mismatch
- only do this if it does not alter visible behavior unexpectedly

### 8. Move metadata and SEO into explicit content/seo layers

Phase 1 already uses Next route metadata, but it is minimal.

Target:

- page metadata should be generated from content modules instead of being hardcoded inline
- add:
  - canonical URLs
  - Open Graph
  - Twitter cards
  - sitemap
  - robots
  - JSON-LD

Recommended files:

- `src/content/site.ts`
- `src/shared/seo/metadata.ts`
- `src/shared/seo/jsonld.ts`
- `src/app/sitemap.ts`
- `src/app/robots.ts`

The rearchitecture should make this trivial even if the actual SEO additions happen immediately after.

### 9. Normalize route files into thin server wrappers

Target route files:

- `src/app/page.tsx`
- `src/app/bishop/page.tsx`

These should eventually do little more than:

- import route metadata
- render a feature entry component
- remain server components where possible

Client boundaries should be pushed down into interactive feature sections only.

### 10. Reduce client surface area

Current client-marked files include most route-level components.

Target:

- keep client boundaries only where browser APIs are used
- likely client components:
  - `HomeHero`
  - `ProfessionalProjectsBanner`
  - `BubbleIn`
  - `ThemeToggle`
  - most bishop scroll-driven sections
- possible server wrappers:
  - route entry components
  - static content renderers
  - card containers without effects

The goal is not “server everything.” The goal is to avoid marking whole routes as client when only subtrees need it.

## Concrete Refactor Targets

### Home route

#### Replace

- `src/components/HomePage.tsx`

#### With

- `src/features/home/HomeRoute.tsx`
- `src/features/home/data/projects.ts`
- `src/features/home/components/ProjectShowcase.tsx`
- `src/features/home/components/ProjectCard.tsx`

#### Why

- Home page currently mixes route composition, content, and presentational concerns.
- Adding future projects will remain error-prone without a data layer.

### Bishop route

#### Replace

- `src/components/BishopPage.tsx`
- `src/components/BishopDiscover.tsx`

#### With

- `src/features/bishop/BishopRoute.tsx`
- `src/features/bishop/components/discover/*`
- `src/features/bishop/data/bishop-content.ts`
- `src/features/bishop/hooks/*`

#### Why

- `BishopDiscover.tsx` is too large to safely evolve.
- It mixes content, effects, video control, sticky layout behavior, and card rendering.

### Shared component extraction

#### Add

- `src/shared/components/DeviceFrame.tsx`
- `src/shared/components/VideoOverlay.tsx`
- `src/shared/components/Section.tsx`

#### Why

- Device shell rendering and autoplay video behavior repeat across the home and bishop surfaces.

## CSS Strategy

### Immediate target

- Remove component CSS imports from `src/app/globals.css`.
- Introduce one imported stylesheet per feature entry.

### Final target

- Global CSS:
  - reset
  - fonts
  - typography
  - tokens
  - shared utilities
- Feature CSS:
  - route-specific layout and animations
- Optional CSS Modules:
  - for smaller isolated widgets after visual stability is confirmed

### Do not do

- Do not rewrite all styling into Tailwind utility classes.
- Do not attempt a full CSS methodology migration during the same pass.

## Data Model Recommendations

### Home projects

Use a typed model:

```ts
type ProjectSummary = {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  techStack: string
  buttonText: string
  buttonLink: string
  device: "laptop" | "ipad" | "iphone" | "mmc" | "apple-display"
  media: {
    type: "video"
    src: string
  }
}
```

### Bishop content

Use typed slices:

- `hero`
- `role`
- `challengeVision`
- `usersSaw`
- `discover`
- `define`
- `processSteps`
- `successMetrics`
- `provedCards`

This reduces future content edits to data-only changes.

## Verification Requirements

Every major rearchitecture checkpoint should verify:

1. TypeScript passes:
   - `npx tsc --noEmit`
2. Next compile succeeds:
   - `next build`
3. Visual parity:
   - `/` matches before/after screenshots
   - `/bishop` matches before/after screenshots
4. Behavior parity:
   - theme toggle works
   - home hero typing animation works
   - banner scroll/fade works
   - project CTA links work
   - bishop scroll transitions work
   - bishop carousels work
   - bishop process video step sync works

Because this environment currently throws `spawn EPERM`, runtime verification may need to happen on the user’s local machine or after resolving that environment issue.

## Runtime Blocker Note

Current blocker in this environment:

- `next dev` and final `next build` fail with Windows `spawn EPERM`

Implication:

- Do not confuse environment failure with app structure failure.
- Use `npx tsc --noEmit` as the minimum local guard until runtime execution is available.
- Once runtime is unblocked, repeat screenshot and interaction verification.

## Cleanup Plan After Rearchitecture

Only after the new structure is stable:

- remove obsolete flat files from `src/components`
- remove obsolete helper files from `src/lib`
- remove unused assets from `public/assets`
- remove `figma_bishop.html`
- remove any duplicate CSS files left behind by the move

Do not delete old files until replacement imports are confirmed and typecheck passes.

## Recommended Execution Order for the Actual Work

1. Create `src/features/home`, `src/features/bishop`, `src/features/theme`, and `src/shared`.
2. Move files without changing behavior.
3. Update imports and keep `npx tsc --noEmit` green.
4. Extract home data from `HomePage.tsx`.
5. Split `BishopDiscover.tsx` into section components.
6. Extract bishop content constants and step data.
7. Extract scroll/video hooks.
8. Extract shared `DeviceFrame` and `VideoOverlay`.
9. Re-home CSS from `globals.css` into feature ownership.
10. Reduce route-level client boundaries.
11. Add explicit SEO/content plumbing.
12. Delete obsolete files only after verification.

## Definition of Done

The rearchitecture is complete when:

- route files are thin and easy to read
- feature code is grouped by route/domain
- no route depends on a giant monolithic component for multiple unrelated sections
- content is in typed data modules instead of hardcoded JSX blocks
- shared media and frame logic is deduplicated
- global CSS no longer imports every route stylesheet directly
- the app still looks and behaves the same to the end user
- adding a new project or new case study no longer requires copying an entire page structure

## Immediate Starting Point

If another agent picks this up next, start here:

1. Create the target directories under `src/features`, `src/shared`, and `src/content`.
2. Move `HomePage.tsx` to a home feature entry and extract project data.
3. Move `BishopPage.tsx` to a bishop feature entry.
4. Split `BishopDiscover.tsx` first, because it is the single largest source of structural risk.

