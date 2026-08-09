import Year from './Year';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <p className={styles.wordmark}>
            Strack<span className={styles.mark}>&rsquo;</span>s Barbershop
          </p>
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
            <a
              href="https://www.yelp.com/biz/stracks-barber-shop-algonquin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yelp
            </a>
            <a
              href="https://www.instagram.com/stracksbarbershop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </nav>
          <p className={styles.copy}>
            &copy; <Year />{' '}Strack&rsquo;s Barbershop. Cash only.
          </p>
        </div>
      </footer>
    </>
  );
}
