import Link from "next/link";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { navigation, officialSources, passes, verifiedSnapshot } from "./_content/site";

const firstShift = [
  ["Match the ID", `Confirm place ${verifiedSnapshot.placeId}.`],
  ["Join before buying", "Entry is free; learn the default controls first."],
  ["Test one change", "Observe, compare, and reset before the next control."],
] as const;

const pathNotes = [
  "Confirm the right listing and map the live interface.",
  "Use a clean learn, test, compare, reset routine.",
  "Separate learning milestones from optional purchases.",
  "Avoid wrong-place guides and assumed pass effects.",
  "Get direct answers from exact-ID public data.",
] as const;

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero" id="main-content">
        <div className="home-hero-copy">
          <p className="eyebrow">SANDBOXX // NEW PLAYER FILE</p>
          <h1>Your first shift starts <em>here.</em></h1>
          <p className="lede">
            A practical beginner route for Anomaly Clinic: SANDBOXX, built around
            exact-ID Roblox data and honest limits where the game is undocumented.
          </p>

          <div className="first-shift-list" aria-label="First shift checklist">
            {firstShift.map(([title, body], index) => (
              <div key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p><strong>{title}</strong><small>{body}</small></p>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <Link className="primary-action" href="/guides/quick-start">Begin quick start <span>→</span></Link>
            <a className="text-action" href="#case-path">See the full case path</a>
          </div>
        </div>

        <aside className="intake-card" aria-label="Verified experience summary">
          <div className="intake-topline">
            <span>PATIENT INTAKE / AC-SBX</span>
            <span className="verified-badge"><i /> VERIFIED ID</span>
          </div>
          <div className="intake-title">
            <span className="intake-cross" aria-hidden="true">+</span>
            <div><small>EXPERIENCE FILE</small><strong>Anomaly Clinic:<br />SANDBOXX</strong></div>
          </div>
          <dl className="case-data">
            <div><dt>Place ID</dt><dd>{verifiedSnapshot.placeId}</dd></div>
            <div><dt>Category</dt><dd>{verifiedSnapshot.genre}</dd></div>
            <div><dt>Capacity</dt><dd>Up to {verifiedSnapshot.maxPlayers}</dd></div>
            <div><dt>Access</dt><dd>{verifiedSnapshot.access}</dd></div>
            <div><dt>Creator</dt><dd>{verifiedSnapshot.creator}</dd></div>
          </dl>
          <a className="intake-source" href={officialSources[1].href}>View primary Roblox data <span>↗</span></a>
        </aside>
      </section>

      <section className="evidence-banner">
        <span>RESEARCH STATUS</span>
        <strong>Facts verified. Gaps left visible.</strong>
        <p>The public description is only “Scaryz.” This guide never fills missing mechanics with guesses from another game ID.</p>
      </section>

      <section className="case-path-section" id="case-path">
        <div className="section-heading">
          <div><p className="section-label">NEW PLAYER CASE PATH</p><h2>Read in this order.</h2></div>
          <p>Each page ends at the next useful step, so you can move from first join to informed sandbox testing without losing the thread.</p>
        </div>
        <div className="path-grid">
          {navigation.map((item, index) => (
            <Link href={item.href} className="path-card" key={item.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{item.label}</h3><p>{pathNotes[index]}</p></div>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="verified-section">
        <div className="section-heading light">
          <div><p className="section-label">VERIFIED SNAPSHOT</p><h2>What the listing confirms.</h2></div>
          <p>Exact public data for Universe {verifiedSnapshot.universeId}, checked {verifiedSnapshot.checkedOn}. Dynamic prices and settings can change.</p>
        </div>
        <div className="snapshot-grid">
          <div className="snapshot-facts">
            <div><span>01</span><p><small>ENTRY</small><strong>Free to join</strong></p></div>
            <div><span>02</span><p><small>SERVER SIZE</small><strong>Up to 50 players</strong></p></div>
            <div><span>03</span><p><small>ROBLOX CATEGORY</small><strong>Survival</strong></p></div>
            <div><span>04</span><p><small>VIP SERVERS</small><strong>Creation disabled</strong></p></div>
            <div><span>05</span><p><small>BADGES</small><strong>None listed</strong></p></div>
          </div>

          <div className="pass-panel">
            <div className="panel-heading">OPTIONAL PASS CATALOG <span>NAMES + PRICES ONLY</span></div>
            {passes.map((pass) => (
              <div className="pass-row" key={pass.id}>
                <div><strong>{pass.name}</strong><small>Public effect description: blank</small></div>
                <span>{pass.price}</span>
              </div>
            ))}
            <p>Never infer a pass’s duration or exact effect from its name. Confirm the live purchase dialog before spending Robux.</p>
          </div>
        </div>
      </section>

      <section className="identity-note">
        <div><span>!</span><p className="section-label">IDENTITY CHECK</p></div>
        <h2>Similar is not the same.</h2>
        <p>
          Similar names, thumbnails, or guide topics do not prove that two Roblox places use the same controls.
          Match place ID {verifiedSnapshot.placeId} before following any instruction, and treat every other
          place ID as a separate build until the live interface confirms otherwise.
        </p>
        <Link href="/guides/common-mistakes">Review the evidence rules →</Link>
      </section>

      <section className="closing-cta">
        <p className="section-label">ORIENTATION READY</p>
        <h2>Start with the facts.<br />Learn the live build.</h2>
        <Link className="primary-action inverse" href="/guides/quick-start">Open Case 01 <span>→</span></Link>
        <a className="quiet-external" href={officialSources[0].href}>Official Roblox listing ↗</a>
      </section>
      <SiteFooter />
    </main>
  );
}
