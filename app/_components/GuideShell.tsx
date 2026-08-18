import Link from "next/link";
import type { GuidePage } from "../_content/site";
import { navigation, officialSources, verifiedSnapshot } from "../_content/site";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function GuideShell({ guide }: { guide: GuidePage }) {
  return (
    <main>
      <SiteHeader />
      <div className="mobile-rail" aria-label="Guide sections">
        {navigation.map((item) => <Link href={item.href} key={item.href}>{item.short}</Link>)}
      </div>

      <section className="guide-hero" id="main-content">
        <p className="eyebrow">{`${guide.code} // ${guide.eyebrow}`}</p>
        <h1>{guide.title}</h1>
        <p>{guide.summary}</p>
        <div className="fact-line">
          <span>PLACE {verifiedSnapshot.placeId}</span>
          <span>CHECKED {verifiedSnapshot.checkedOn.toUpperCase()}</span>
        </div>
      </section>

      <div className="guide-layout">
        <aside className="section-rail">
          <span>CASE PATH</span>
          {navigation.map((item, index) => (
            <Link href={item.href} className={item.href.includes(guide.slug) ? "active" : ""} key={item.href}>
              <b>{String(index + 1).padStart(2, "0")}</b>{item.label}
            </Link>
          ))}
        </aside>

        <article className="guide-article">
          <section className="verified-panel">
            <div className="panel-heading"><span className="status-dot" /> VERIFIED FOR THIS LISTING</div>
            <ul>{guide.verified.map((fact) => <li key={fact}>{fact}</li>)}</ul>
          </section>

          <section className="step-section">
            <p className="section-label">OPERATING PROCEDURE</p>
            <div className="steps-list">
              {guide.steps.map((step, index) => (
                <div className="step-row" key={step.title}>
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="step-title-line">
                      <h2>{step.title}</h2>
                      {step.tag ? <span className="fact-badge">{step.tag}</span> : null}
                    </div>
                    <p>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="caution-box">
            <span>CAUTION</span>
            <p>{guide.caution}</p>
          </aside>

          <section className="source-strip">
            <div>
              <p className="section-label">SOURCE NOTE</p>
              <h2>Exact-ID research only.</h2>
            </div>
            <p>
              Facts above were checked against Roblox data for Universe {verifiedSnapshot.universeId}.
              Related builds are not treated as proof. <a href={officialSources[1].href}>Open metadata source</a>.
            </p>
          </section>

          <Link className="next-case" href={guide.next.href}>
            <span>NEXT CASE</span>
            <div><strong>{guide.next.label}</strong><small>{guide.next.note}</small></div>
            <b aria-hidden="true">→</b>
          </Link>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
