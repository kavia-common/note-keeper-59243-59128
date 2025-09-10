# Note Keeper - Nuxt 3 Frontend

A simple notes UI built with Nuxt 3. Features:
- List notes
- Create a new note
- View a note
- Edit a note
- Delete a note

The app consumes a REST backend with endpoints:
- GET    /notes
- GET    /notes/:id
- POST   /notes
- PUT    /notes/:id
- DELETE /notes/:id

## Environment

Set the public API base via `.env`:
```
NUXT_PUBLIC_API_BASE=http://localhost:4000
```
If you proxy the API through the same origin, you can set:
```
NUXT_PUBLIC_API_BASE=/api
```
See `.env.example`.

## Development

Install deps and run:
```
npm install
npm run dev
```
The app runs at http://localhost:3000

## Build

```
npm run build
npm run preview
```

## Routes
- /                   -> list notes
- /notes/new          -> create note
- /notes/:id          -> view a note
- /notes/:id/edit     -> edit a note
- /notes              -> redirects to /

## Notes

- Basic styling is included inline in `app.vue` to avoid extra dependencies.
- API base URL is configured via `runtimeConfig.public.apiBase` (see `nuxt.config.ts`).
- API integration is implemented in `composables/useNotesApi.ts`.
