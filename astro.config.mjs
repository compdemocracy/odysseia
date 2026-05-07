// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const site = process.env.SITE_URL ?? (repositoryOwner ? `https://${repositoryOwner}.github.io` : undefined);
const base = process.env.BASE_PATH ?? (repositoryName ? `/${repositoryName}` : '/');

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});
