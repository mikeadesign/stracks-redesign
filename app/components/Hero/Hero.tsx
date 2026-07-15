import Image from 'next/image';
import { BASE_PATH } from '../../basePath';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background photo — decorative, aria-hidden via empty alt */}
      <Image
        src={`${BASE_PATH}/images/shop-outside.webp`}
        alt=""
        fill
        className={styles.heroBg}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <h1 className={styles.headline}>
          Strack&rsquo;s<br />Barber&shy;shop
        </h1>

        <div className={styles.poleRibbon} aria-hidden="true" />

        <p className={styles.location}>150 S. Main Street &middot; Algonquin, Illinois</p>

        <p className={styles.tagline}>
          A proper barbershop — classic cuts, straight-razor precision,
          and the kind of shop that&rsquo;s hard to find anymore.
        </p>

        <div className={styles.cta}>
          <a href="tel:8476586948" className={styles.ctaCall}>
            Call &mdash; 847-658-6948
          </a>
          <span className={styles.ctaNote}>Cash only &middot; Walk-ins welcome when time permits</span>
        </div>
      </div>
    </section>
  );
}
