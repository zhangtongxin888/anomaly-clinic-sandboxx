# Launch evidence — 2026-08-18

Status: blocked before DNS cutover. The production deployment is ready, but the formal-domain and Google Search Console completion gates are not met.

## Source and deployment

- Sole maintenance repository: `https://github.com/zhangtongxin888/anomaly-clinic-sandboxx`
- Vercel project: `anomaly-clinic-sandboxx` (`prj_ctBlH71Ju8dPYZIm9BFA8omjmzkT`)
- Production deployment: `dpl_7Zp3Ge4BMR7jYNVe6Jto3c2h9TxU`
- Deployment state recorded by Vercel: `READY`, target `production`
- Vercel Git link: organization `zhangtongxin888`, repository `anomaly-clinic-sandboxx`, branch `main`

## DNS rollback snapshot

Authoritative nameservers: `launch1.spaceship.net`, `launch2.spaceship.net`.

- Previous apex A: `34.216.117.25`
- Previous apex A: `54.149.79.189`
- Previous www A/AAAA/CNAME: none
- MX/TXT/CAA: none

Vercel's highest-priority project-specific records requested on 2026-08-18:

- apex A: `216.198.79.1`
- apex A: `64.29.17.1`
- www CNAME: `2eb138fa9617d6e7.vercel-dns-017.com.`

## Browser blocker and recovery point

The exact Spaceship DNS page was opened twice. Both attempts exceeded the 30-second browser-control deadline before a page state could be read, so no DNS record was changed. Per the one-safe-retry limit, browser work stopped. The created Spaceship and blank tabs were closed; the controlled tab list was empty after cleanup.

Resume from the Spaceship Advanced DNS page for `anomalyclinicsandboxx-wiki.wiki`: replace only the two previous apex A records with the two Vercel A records above, add the www CNAME, and preserve all unrelated records. Then verify both hosts and TLS before creating the exact GSC Domain property, adding Google's returned verification record, verifying ownership, and submitting `https://anomalyclinicsandboxx-wiki.wiki/sitemap.xml` until GSC reports success.

## Four required live gates

1. Formal-domain HTTPS correct guide: **not met** — authoritative DNS still points to the Spaceship parking service.
2. Formal-domain sitemap valid and readable: **not met** — the Vercel deployment serves the correct XML, but the formal domain has not been cut over.
3. Exact GSC property ownership verified: **not attempted** — requires the successful DNS cutover first.
4. Exact sitemap submitted with GSC success: **not attempted** — requires verified ownership first.
