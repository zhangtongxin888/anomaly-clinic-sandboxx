import Link from "next/link";
import { navigation, officialSources, verifiedSnapshot } from "../_content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="wordmark-mark" aria-hidden="true">A/C</span>
        <div>
          <strong>Anomaly Clinic Field Guide</strong>
          <p>Independent, fact-checked player guide. Not affiliated with Roblox or the experience creator.</p>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <strong>Case path</strong>
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <strong>Primary sources</strong>
          {officialSources.slice(0, 3).map((source) => (
            <a href={source.href} key={source.href} rel="noreferrer">{source.label}</a>
          ))}
        </div>
      </div>
      <p className="footer-note">Facts last checked {verifiedSnapshot.checkedOn}. Live prices and settings may change.</p>
    </footer>
  );
}
