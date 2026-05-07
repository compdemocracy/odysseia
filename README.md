# Odysseia

Public-facing marketing site for Polis, built with Astro + Tailwind.

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## GitHub Pages deployment

The repository includes a GitHub Actions workflow at:

`.github/workflows/deploy.yml`

It deploys to GitHub Pages on pushes to `main`.

## Preview password gate

This project supports a lightweight client-side preview gate for internal testing.

Environment variables:

- `PREVIEW_GATE_ENABLED=true` enables the gate.
- `PREVIEW_PASSWORD_SHA256=<sha256 hex digest>` sets the accepted password hash.

### Generate a SHA-256 hash

```sh
node -e "const crypto=require('crypto');console.log(crypto.createHash('sha256').update(process.argv[1]).digest('hex'))" "your-strong-password"
```

### GitHub configuration

1. In repository settings, add a secret named `PREVIEW_PASSWORD_SHA256` containing the hash.
2. Enable GitHub Pages and set source to **GitHub Actions**.

The gate is intentionally lightweight and suitable only for low-risk preview protection.
