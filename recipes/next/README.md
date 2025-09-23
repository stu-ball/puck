# `next` recipe

The `next` recipe showcases one of the most powerful ways to implement Puck to provide an authoring tool for any route in your Next app.

## Demonstrates

- Next.js App Router implementation
- JSON database implementation with HTTP API
- Catch-all routes to use Puck for any route on the platform
- Incremental static regeneration (ISR) for all Puck pages

## Usage

Generate a new app (choose `next` when prompted):

```bash
npx create-puck-app my-app
```

Run locally (npm)

1. At the repo root, install workspace dependencies and ensure Next's native binaries are present:
```bash
npm install
```

Note: if Next patches the lockfile for swc dependencies you may see a message asking you to run `npm install` again—run it if prompted.

2. Start the demo app:
```bash
cd apps/demo
npm run dev
```

Open:
- App: http://localhost:3000
- Puck editor: http://localhost:3000/edit

You can author pages for any route, even if the page doesn't yet exist. For example:
- Visit http://localhost:3000/hello/world — will 404 initially.
- Visit http://localhost:3000/hello/world/edit — create and publish the page, then reload the original URL to see it.

If you prefer Yarn, the repository historically used Yarn. Either:
- Use Yarn: restore yarn.lock and run `yarn` then `cd apps/demo && yarn dev`, or
- Use npm: ensure all package.json prepare/postinstall scripts do not invoke `yarn` (this project has been updated to support npm).

## Environment / Security

- Editor and API routes that modify content require a shared secret to prevent public editing.
  - The demo enforces this by checking the `PUCK_SECRET` value in headers/cookies for `/edit` and API write routes.
  - Set it locally before starting the dev server:
    ```bash
    export PUCK_SECRET="your-secret"
    cd apps/demo
    npm run dev
    ```
  - Or on a single command:
    ```bash
    PUCK_SECRET="your-secret" npm --prefix apps/demo run dev
    ```
- IMPORTANT: Do not deploy the editor routes publicly without adding proper authentication. See:
  - [`apps/demo/app/puck/api/route.ts`](apps/demo/app/puck/api/route.ts:1)
  - [`apps/demo/app/puck/[...puckPath]/page.tsx`](apps/demo/app/puck/[...puckPath]/page.tsx:1)

## Adopting this recipe

To adopt this in your app:
- Add authentication to `/edit` routes (server-side guard or middleware).
- Integrate your persistent database in the API handler at `/app/puck/api/route.ts`.
- Customize Puck via `puck.config.tsx` in your app.

## Notes

- By default the catch-all page uses static rendering (`dynamic: "force-static"`) to produce static output for published pages. Remove that setting if you need SSR-like behavior or need headers/cookies.
- If you receive warnings about multiple lockfiles or patched lockfiles, remove the obsolete lockfile (for example `yarn.lock` or an extra `package-lock.json`) and run `npm install` again to ensure native binaries (like `@next/swc`) are installed.
