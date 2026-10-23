# Patrick Sherlund portfolio

Build on the existing app in `portfolio/patrick-sherlund-portfolio/`, relative to the workspace root. Run project commands here. Preserve Patrick's thoughtful, personal voice and senior product/full-stack focus.

## Design and user experience

Visual quality, user experience, and accessibility are equal acceptance criteria. A change is unfinished if any of them fails.

- Create a distinctive, beautiful composition through typography, proportion, deliberate spacing, aligned edges, and project-specific imagery. Give each section a purpose and focal point. Avoid repetitive card grids and decoration that competes with the story.
- Make the path through selected work, project evidence, and contact obvious. Use descriptive headings, clear navigation, and recognizable controls. Keep essential information visible and optional detail easy to reach.
- Refine the existing identity consistently across pages and light/dark themes. Reuse spacing, type, color, and component patterns. Requested design improvements may change presentation within scope; implementation-only refactors should preserve it.
- Present product screens and diagrams at readable sizes with purposeful crops and captions. Keep related text and media together. Motion should explain behavior or provide feedback without delaying reading or navigation.
- Use [Portfolio-structure](../../.agents/skills/portfolio-structure/SKILL.md) for case studies, [Hallmark](../../.agents/skills/hallmark/SKILL.md) for UI design, and [Humanizer](../../.agents/skills/humanizer/SKILL.md) for copy. Apply them within the existing app and requested scope. Preserve factual ownership and outcomes.

## Responsive composition

- Design mobile, tablet, and desktop arrangements deliberately. Choose breakpoints when the content needs them.
- On mobile, stack related content in story order and keep navigation/actions reachable. On tablets, rebalance columns before they become cramped. On desktop, use grids and wider media while keeping text lines comfortable to read.
- Keep DOM, visual, and keyboard reading order consistent. Reposition side navigation and sticky elements when space is limited; they must not obscure content or focus.
- Use fluid sizing, Grid/Flexbox, and intrinsic media dimensions. Fix overflow at its source. Preserve useful content through reflow, zoom, and orientation changes.

## Accessibility

Meet [WCAG 2.2 AA](https://www.w3.org/WAI/WCAG22/quickref/) by default. The existing accessibility settings supplement an already accessible page.

- Use semantic landmarks, a descriptive page heading, ordered headings, a skip link, native buttons/links, and labeled controls. Give informative images useful alternatives; hide decorative images from assistive technology.
- Support keyboard and touch operation, visible unobscured focus, and logical tab order. Manage and restore focus in dialogs; support Escape to dismiss them. Provide alternatives to hover-only and drag-only interactions.
- Maintain contrast in both themes: 4.5:1 for normal text, 3:1 for large text and meaningful control boundaries/graphics. Do not communicate state through color alone.
- Support reflow at 320 CSS pixels and 200% text enlargement. Prefer 44-by-44 CSS pixel touch targets; satisfy WCAG minimum target size or spacing requirements.
- Respect reduced motion. Provide playback controls and appropriate captions/text alternatives for meaningful media. Keep the story understandable without animation or video playback.
- Define applicable hover, focus, pressed, disabled, loading, error, and success states. Associate errors with their controls and announce meaningful status changes when needed.

## Development

- Keep Next.js App Router, React, strict TypeScript, npm, Tailwind, and existing feature CSS. Preserve static-export compatibility and public URLs. Add dependencies only for a concrete need.
- Keep `src/app/` for routes, layouts, and metadata; `src/features/<feature>/` for feature UI, hooks, styles, and data; `src/shared/` for reused code; `src/content/` for site-wide content. Use the existing `@/` alias.
- Default route wrappers to server components; isolate state, effects, and browser APIs in client components. Reuse existing providers and media components. Keep state local and abstractions proportional to actual reuse.
- Keep styles with their feature and global styles for shared foundations. Ensure Tailwind scans directories containing new utilities. Avoid conflicting overrides.
- Compress media, reserve layout space, and defer offscreen media. Preserve metadata and working links. Prefer local assets.
- Preserve unrelated work. Avoid speculative reorganizations, destructive Git operations, and commit amendments unless requested. Do not add code comments unless requested.

## Verification

- Scale checks to the change. Review diffs/links for documentation. For code, prefer `npx tsc --noEmit`; run relevant existing tests or lint when useful. Add tests for consequential behavior, not static copy or cosmetic changes.
- For UI changes, inspect the affected flow on mobile, tablet, and desktop, including keyboard use, zoom, reduced motion, and relevant themes. Reuse an available preview; start a temporary local preview when needed and stop it afterward. Automated checks do not replace visual inspection.
- Run `npm run build` for routing, configuration, rendering, dependency, or export changes. Avoid full suites for small styling edits and repeated attempts at known unrelated failures.
- Report what changed, what was checked, and any remaining gaps. Do not claim visual or accessibility checks that were not performed.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
