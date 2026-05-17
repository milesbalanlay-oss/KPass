# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure

This is a pnpm workspaces monorepo with two apps:

- `apps/backend` — PocketBase v0.28.0 server with JS hooks and migrations
- `apps/mobile` — Expo v54 / React Native 0.81 mobile app (bundle ID: `com.kpass.app`)

## Commands

Run all commands from the repo root unless noted.

```bash
# Backend
pnpm dev              # Download PocketBase binary (if missing) and start dev server
pnpm build            # Download PocketBase binary only
pnpm start            # Start PocketBase in production mode (port 8090)

# Mobile
pnpm mobile           # Start Expo dev server
pnpm mobile:android   # Start on Android
pnpm mobile:ios       # Start on iOS
```

To re-download the PocketBase binary or type definitions:
```bash
node apps/backend/scripts/download-pocketbase.mjs --force
```

## Backend Architecture

The backend is a **PocketBase** instance (no Node.js runtime in production). Logic lives in two directories:

- `pb_hooks/` — JS hooks that run inside PocketBase's JSVM. Files must be named `*.pb.js`. The `main.pb.js` file registers custom REST routes (e.g. `GET /api/hello`).
- `pb_migrations/` — Schema migrations. Each file exports an `up` and `down` function via `migrate((app) => {}, (app) => {})`. Migrations run automatically on startup.

The `pocketbase.d.ts` file (auto-downloaded) provides TypeScript types for hook/migration authoring. The `jsconfig.json` enables type checking for `.pb.js` and migration files.

### Data Model

| Collection | Key fields |
|---|---|
| `user` | `first_name`, `last_name`, `middle_name`, `role_id` (→ `role`) |
| `role` | `name`, `value` (unique), `description` |
| `event` | `title`, `description`, `date`, `location`, `facilitator_id` (→ `user`), `invite_only` |
| `event_invite_code` | `event_id` (→ `event`, cascade), `invite_code` (unique) |
| `attendee` | `event_id` (→ `event`, cascade), `user_id` (→ `user`, cascade), `created_at` |
| `invited` | `event_id` (→ `event`, cascade), `user_id` (→ `user`, cascade) |

## Mobile Architecture

The mobile app is an **Expo SDK 54** app using the new architecture (`newArchEnabled: true`). Currently in initial scaffolding — entry point is `index.ts` → `App.tsx`.

> **Important:** Always read the Expo v54 docs at https://docs.expo.dev/versions/v54.0.0/ before writing any Expo-specific code, as APIs may have changed from previous versions.

## Writing Migrations

New migration files go in `apps/backend/pb_migrations/`. Name them with a Unix timestamp prefix (use `Date.now()` in seconds), e.g. `1779009000_add_field.js`. Always implement both the forward and rollback functions.
