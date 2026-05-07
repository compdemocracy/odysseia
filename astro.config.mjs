// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const site = process.env.SITE_URL ?? (isGitHubActions && repositoryOwner ? `https://${repositoryOwner}.github.io` : undefined);
const base = process.env.BASE_PATH ?? (isGitHubActions && repositoryName ? `/${repositoryName}` : '/');

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});
