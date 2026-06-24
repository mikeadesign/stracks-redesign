import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background photo — decorative, aria-hidden via empty alt */}
      <Image
        src="/images/shop-outside.jpg"
        alt=""
        fill
        className={styles.heroBg}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.award}>Voted Best of the Fox · Algonquin, IL</p>

        <h1 className={styles.headline}>
          Strack&rsquo;s<br />Barber&shy;shop
        </h1>

        <div className={styles.divider} aria-hidden="true" />

        <p className={styles.estLine}>Est.&thinsp;2011 &middot; 150&nbsp;S&nbsp;Main&nbsp;St &middot; Algonquin,&nbsp;IL</p>

        <p className={styles.tagline}>
          A proper barbershop on South Main Street — classic cuts,
          straight-razor precision, and the kind of shop that&rsquo;s
          hard to find anymore.
        </p>

        <div className={styles.cta}>
          <a href="tel:8476586948" className={styles.ctaCall}>
            Call to Book &mdash; 847-658-6948
          </a>
          <span className={styles.ctaNote}>Walk-ins welcome when time permits</span>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
