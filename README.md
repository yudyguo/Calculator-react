# Calculator (reactlab)

This repository is a simple React application used to document and demonstrate my JavaScript/React learning progress. It contains a small React project (under `src/`) where I add notes, commit history and learning logs to show experiments, findings and step-by-step improvements.

## Project Overview

- Name: Calculator (package name: `reactlab`)
- Tech stack: React, react-scripts
- Purpose: Serve as a learning log and code sample repository to illustrate concepts and incremental improvements from basic to advanced topics.

## Quick Start (macOS, zsh)

This repo includes a `pnpm-lock.yaml`, so I recommend using pnpm for installs, but npm or yarn also work.

Install dependencies:

```bash
pnpm install
# or
npm install
```

Start the dev server:

```bash
pnpm start
# or
npm start
```

Build for production:

```bash
pnpm build
# or
npm run build
```

Run tests (if present):

```bash
pnpm test
# or
npm test
```

Package.json scripts (for reference):

- start: react-scripts start
- build: react-scripts build
- test: react-scripts test
- eject: react-scripts eject

## Project Structure

```
/(repo root)
├─ public/           # static files (index.html)
├─ src/              # source code (React components)
│  ├─ App.js
│  ├─ index.js
│  └─ ...
├─ package.json
├─ pnpm-lock.yaml
└─ README.md
```

## Learning Log (example)

I keep a Learning Log to record what I learn, experiments I run, and key takeaways. You can keep logs in this `README.md` or create a `docs/learning/` folder with date-stamped Markdown files.

Example entries:

- 2025-10-26 — Learned basic React usage and component state; created the Calculator starter app.
- 2025-10-27 — Practiced event handlers and controlled components.

Entry template you can reuse:

```
### YYYY-MM-DD — Title

- Goal: What I intended to learn today
- Actions: What I changed or experimented with (include commit links when possible)
- Takeaways: Key points, problems and solutions
- Next steps: What to learn or improve next
```

Attach small code snippets, screenshots, or terminal outputs to each log entry to make the learning traceable and reproducible.

## Branching & Contribution Suggestions

- Use feature branches for experiments (e.g. `feature/new-ui`, `feature/controlled-inputs`).
- Keep each learning topic small and focused so commits are easy to read and revert if needed.

Commit message hints (simple convention):

- feat: new feature
- fix: bug fix
- docs: documentation changes
- chore: build/tooling changes

## License

I typically use the MIT license for personal learning projects. If you want, I can add a `LICENSE` file with the full MIT text.

```
MIT License
```

---

Next steps I can take for you:

- Create a `docs/learning/` folder and add the first dated log entry.
- Add a `CONTRIBUTING.md` and/or `LICENSE` file (MIT or another license you prefer).
- Translate this README to another language or create a bilingual version.

Tell me which of the above you'd like me to do next (for example: add `LICENSE` with MIT, or create `docs/learning/2025-10-26.md`).