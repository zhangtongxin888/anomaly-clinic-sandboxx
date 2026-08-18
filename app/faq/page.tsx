import type { Metadata } from "next";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { faqItems, officialSources, SITE_URL, verifiedSnapshot } from "../_content/site";

const title = "FAQ";
const socialTitle = "FAQ | Anomaly Clinic: SANDBOXX Guide";
const description = "Verified answers about access, player count, passes, badges, private servers, and the identity of Anomaly Clinic: SANDBOXX.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: { title: socialTitle, description, url: `${SITE_URL}/faq`, type: "article", images: [] },
  twitter: { card: "summary", title: socialTitle, description, images: [] },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main>
      <SiteHeader />
      <section className="guide-hero faq-hero" id="main-content">
        <p className="eyebrow">CASE 05 // VERIFIED ANSWERS</p>
        <h1>FAQ</h1>
        <p>Direct answers for this exact place ID, with uncertainty left visible instead of filled with guesses.</p>
        <div className="fact-line"><span>UNIVERSE {verifiedSnapshot.universeId}</span><span>CHECKED {verifiedSnapshot.checkedOn.toUpperCase()}</span></div>
      </section>

      <section className="faq-layout">
        <div className="faq-intro">
          <p className="section-label">OPEN CASES</p>
          <h2>What public data can—and cannot—answer.</h2>
          <p>Expand a question. Every gameplay limitation is intentional: the exact listing has almost no public instructions.</p>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<b aria-hidden="true">+</b></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="sources-section">
        <div><p className="section-label">EVIDENCE DESK</p><h2>Primary Roblox sources</h2></div>
        <div className="source-list">
          {officialSources.map((source) => <a href={source.href} key={source.href}>{source.label}<span>↗</span></a>)}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <SiteFooter />
    </main>
  );
}
