import Link from "next/link";
import { navigation } from "../_content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Link className="wordmark" href="/" aria-label="Anomaly Clinic guide home">
        <span className="wordmark-mark" aria-hidden="true">A/C</span>
        <span className="wordmark-long">Anomaly Clinic Field Guide</span>
        <span className="wordmark-short">AC: SANDBOXX</span>
      </Link>
      <nav className="desktop-nav" aria-label="Guide sections">
        {navigation.map((item) => <Link href={item.href} key={item.href}>{item.short}</Link>)}
      </nav>
      <Link className="header-link" href="/guides/quick-start">Start here</Link>
    </header>
  );
}
