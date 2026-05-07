No code comments (ABSOLUTE): Never add comments to code—no //, /* */, KDoc/Javadoc, TODOs, or commented-out code—under any circumstance unless the user explicitly requests it.

File hygiene: Delete files that become truly obsolete due to your change. Do not delete files to “fix” lint/type errors—stop and ask the user first.

Coordinate before undoing others: Don’t revert/delete work you didn’t author. If unsure about in-flight work, stop and coordinate.

No destructive git ops: Never run git reset --hard, git restore/checkout to older commits, or rm as a “fix” unless the user explicitly instructs it in this chat.

No reverting others’ files: Never use git restore (or similar) to revert files you didn’t author.

Observe the folder / file architecture for the project, ensure that you always follow that consistently for all feature work.

No amend: Never amend commits unless explicitly approved in writing.

Rebase without editors: Use GIT_EDITOR=: and GIT_SEQUENCE_EDITOR=: (or --no-edit) to avoid interactive editors.

Migration priority: Preserve the current user-facing behavior and visual output exactly unless the user explicitly approves a change. Framework, architecture, and asset changes must be implementation-only by default.

Port before refactor: For framework migrations, first produce a fully working port with matching routes, styling, interactions, and media behavior before doing broader reorganization or cleanup.

No unapproved visual drift: Do not change layout, spacing, typography, colors, animation timing, responsive behavior, copy, or interaction patterns unless explicitly requested in this chat.

Mobile-first compatibility: Ensure the portfolio/case study website is fully responsive and production-quality on mobile, tablet, and desktop, preserving readability, navigation, media behavior, interaction quality, touch targets, spacing, and visual polish across viewport sizes.

SEO changes must be non-invasive: Improve indexing, metadata, rendering strategy, sitemap, robots, structured data, and page semantics without changing the visible UI unless required and approved.

Prefer minimal-risk migrations: When moving frameworks or build systems, preserve existing component logic where practical. Avoid rewrites into a different UI paradigm if a lower-risk migration path exists.

Keep routes stable: Preserve existing public URLs and navigation behavior unless the user explicitly approves route changes.

Asset handling: Prefer local, production-safe static assets over external raw GitHub/Figma-hosted asset URLs during migrations. Do not change the rendered asset appearance without approval.

SSR/SSG safety: When migrating to a server-rendered framework, identify and isolate browser-only logic so the app renders safely on the server without changing client behavior.

Architecture changes must follow the app domain: Reorganize code by route, feature, and shared responsibility. Do not introduce folders, abstractions, or helpers that are not justified by repeated usage.

No speculative cleanup: Do not rename, move, split, or delete files purely for style or preference. Structural cleanup must support the migration, maintainability, or a confirmed project direction.

Verification required for migrations: After significant framework or architecture changes, run the relevant build/tests if available and report what was verified and what could not be verified.

Document assumptions in the final response: If any behavior had to be inferred during migration, state the assumption clearly instead of silently changing implementation details.