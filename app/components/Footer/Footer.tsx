import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <>
      <div className="pole-divider" aria-hidden="true" />
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <p className={styles.wordmark}>Strack&rsquo;s</p>
          <p className={styles.tagline}>150 S Main St · Algonquin, IL · 847-658-6948</p>
          <nav className={styles.links}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#hours">Hours &amp; Info</a>
            <a
              href="https://www.facebook.com/stracksbarbershop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </nav>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()}{' '}Strack&rsquo;s Barbershop. Cash only.
          </p>
        </div>
      </footer>
    </>
  );
}
