import type { Metadata } from 'next';
import styles from './not-found.module.scss';

export const metadata: Metadata = {
  title: "Page Not Found | Strack's Barbershop",
  robots: { index: false, follow: true },
};

/**
 * Served for real by Apache, not just by Next: the static export writes this
 * out as 404.html and public/.htaccess points ErrorDocument at it, so this is
 * what a stale link or a typo'd URL on the live domain lands on. It can't
 * assume the homepage's sections exist around it, so every link here is
 * root-relative rather than a bare fragment.
 *
 * Plain <a> rather than next/link, which is what the lint rule below wants:
 * <Link> makes these soft route changes, and HashScroll only runs on mount,
 * so a soft change to /#services arrives at the top of the page with the
 * section 3000px further down. A full load is correct here and costs nothing
 * on an error page.
 */
/* eslint-disable @next/next/no-html-link-for-pages */
export default function NotFound() {
  return (
    <main className={styles.wrap}>
      <div className={styles.inner}>
        <p className={styles.wordmark}>
          Strack<span className={styles.mark}>&rsquo;</span>s Barbershop
        </p>

        <div className={styles.stripe} aria-hidden="true" />

        <h1 className={styles.headline}>That page moved out.</h1>

        <p className={styles.body}>
          The site was rebuilt and this address didn&rsquo;t come with it.
          Everything&rsquo;s on the homepage now — hours, prices, and where to
          find us.
        </p>

        <div className={styles.actions}>
          <a href="/" className={styles.primary}>
            Back to the shop
          </a>
          <a href="tel:8476586948" className={styles.secondary}>
            Or call &mdash; 847-658-6948
          </a>
        </div>

        <nav className={styles.links} aria-label="Site sections">
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/#hours">Hours &amp; Info</a>
        </nav>
      </div>
    </main>
  );
}
