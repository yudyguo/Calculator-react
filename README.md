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