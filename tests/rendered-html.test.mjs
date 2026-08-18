import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const expectedPaths = [
  "/",
  "/guides/quick-start",
  "/guides/core-loop",
  "/guides/progression",
  "/guides/common-mistakes",
  "/faq",
];

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://anomalyclinicsandboxx-wiki.wiki${path}`, {
      headers: { accept: path.endsWith(".xml") ? "application/xml" : "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the beginner-first homepage with verified listing facts", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.match(response.headers.get("strict-transport-security") ?? "", /max-age=31536000/);

  const html = await response.text();
  assert.match(html, /<title>Anomaly Clinic: SANDBOXX Beginner Guide<\/title>/i);
  assert.match(html, /Your first shift starts/);
  assert.match(html, /Begin quick start/);
  assert.match(html, /89294506890787/);
  assert.match(html, /Up to 50 players/);
  assert.match(html, /Facts verified\. Gaps left visible\./);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("serves every public guide route with unique SEO metadata", async () => {
  for (const path of expectedPaths) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should return 200`);
    const html = await response.text();
    const canonicalMatches = html.match(/rel="canonical"/g) ?? [];
    assert.equal(canonicalMatches.length, 1, `${path} should emit one canonical`);
    assert.match(html, /<meta name="description" content="[^"]+"/i, `${path} needs a description`);
    assert.match(html, /<meta property="og:title" content="[^"]+"/i, `${path} needs an OG title`);
    assert.match(html, /<meta name="twitter:title" content="[^"]+"/i, `${path} needs an X title`);
  }

  const quickStartHtml = await (await render("/guides/quick-start")).text();
  const faqHtml = await (await render("/faq")).text();
  assert.match(quickStartHtml, /<title>Quick start \| Anomaly Clinic Guide<\/title>/i);
  assert.match(faqHtml, /<title>FAQ \| Anomaly Clinic Guide<\/title>/i);
  assert.doesNotMatch(quickStartHtml, /Anomaly Clinic: SANDBOXX Guide \| Anomaly Clinic Guide/i);
});

test("publishes FAQ and WebSite structured data in initial HTML", async () => {
  const homeHtml = await (await render("/")).text();
  const faqHtml = await (await render("/faq")).text();
  assert.match(homeHtml, /"@type":"WebSite"/);
  assert.match(faqHtml, /"@type":"FAQPage"/);
  assert.match(faqHtml, /Is Anomaly Clinic: SANDBOXX free to enter\?/);
});

test("robots and sitemap use the production canonical domain", async () => {
  const robots = await render("/robots.txt");
  assert.equal(robots.status, 200);
  const robotsText = await robots.text();
  assert.match(robotsText, /Allow: \//);
  assert.match(robotsText, /Sitemap: https:\/\/anomalyclinicsandboxx-wiki\.wiki\/sitemap\.xml/);

  const sitemap = await render("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  for (const path of expectedPaths) {
    const url = path === "/"
      ? "https://anomalyclinicsandboxx-wiki.wiki"
      : `https://anomalyclinicsandboxx-wiki.wiki${path}`;
    assert.match(xml, new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.equal((xml.match(/<url>/g) ?? []).length, expectedPaths.length);
});

test("removes all disposable starter-preview code", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.doesNotMatch(`${page}\n${layout}\n${packageJson}`, /codex-preview|SkeletonPreview|react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  assert.match(packageJson, /"name": "anomaly-clinic-sandboxx-guide"/);
});

test("does not present cross-experience similarity as verified evidence", async () => {
  const source = await readFile(new URL("../app/_content/site.ts", import.meta.url), "utf8");
  const home = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(`${source}\n${home}`, /strong evidence|asset trail|related Animal Hospital/i);
});
