# White Lake Food Pantry

Static SvelteKit 2 / Svelte 5 starter site for a community food pantry. The project uses Runes mode, pnpm, Tailwind CSS v4, Flowbite Svelte, and `@sveltejs/adapter-static` so it can be deployed to GitHub Pages.

## Development

```sh
pnpm install
pnpm run dev
```

## Quality Checks

```sh
pnpm run check
pnpm run lint
pnpm run build
```

## Pantry Content

Most editable pantry details live in `src/lib/site.ts`:

- Pantry name, description, email, phone, and canonical URL
- Address and hours
- Donation needs and volunteer needs

The current values are launch placeholders. Replace them with confirmed pantry-owner details before publishing.

## GitHub Pages

The included workflow at `.github/workflows/deploy.yml` builds and deploys the static `build/` folder on pushes to `main`.

For a project page, the workflow sets:

```sh
BASE_PATH=/<repository-name>
PUBLIC_SITE_URL=https://<owner>.github.io/<repository-name>
```

For a custom domain or GitHub user/org root page, update those values in the workflow and `.env.example`.

## Static SEO

The app prerenders all routes and includes:

- Page title, meta description, canonical URL, Open Graph, and Twitter card tags
- JSON-LD organization data
- Prerendered `robots.txt` and `sitemap.xml`
- Local pantry hero image at `static/images/pantry-volunteers.jpg`
