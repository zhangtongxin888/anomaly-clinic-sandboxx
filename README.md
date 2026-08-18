# Anomaly Clinic: SANDBOXX Guide

Independent beginner guide for Roblox place `89294506890787` / universe `10610105255`.

Production domain: <https://anomalyclinicsandboxx-wiki.wiki>

## Content policy

- Exact-ID Roblox data is treated as verified.
- Guidance for related Animal Hospital builds is not presented as fact for this listing.
- Unknown mechanics remain explicitly unknown until they can be checked in the live experience.
- The primary experience is the on-site beginner route; the Roblox link is secondary.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm test
npm run deploy:dry-run
```

The automated checks render every indexable route, verify canonical metadata, structured data, security headers, `robots.txt`, and the production-domain sitemap.

## Cloudflare deployment

The production Worker is configured in `wrangler.jsonc`. After the site receives exclusive release approval:

```bash
npm run deploy:production
```

Domain binding, DNS, Google Search Console ownership verification, and sitemap submission are intentionally performed only after that approval. A launch is complete only when HTTPS, the production sitemap, the exact GSC property, and successful sitemap submission have fresh evidence from the same run.
