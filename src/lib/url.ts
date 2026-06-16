// Prefix internal, root-relative links with Astro's configured `base` so the
// site works when served from a subpath (e.g. GitHub Pages at /odysseia/).
// External links, mailto:, and in-page anchors are returned unchanged.
const BASE_URL = import.meta.env.BASE_URL;

export function withBase(path: string): string {
	if (!path.startsWith('/')) return path;
	const base = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
	return `${base}${path}`;
}
