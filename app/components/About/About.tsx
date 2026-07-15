import Image from 'next/image';
import Reveal from '../Reveal/Reveal';
import { BASE_PATH } from '../../basePath';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>

        <Reveal className={styles.logoHeader}>
          <Image
            src={`${BASE_PATH}/images/stracks-barbershop-sign-2024.gif`}
            alt="Strack's Barbershop — Est. 2011"
            width={600}
            height={490}
            className={styles.logoHeaderImg}
          />
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.text}>
            <h2>
              The kind of shop<br />
              they don&rsquo;t build<br />
              anymore.
            </h2>
            <p>
              Strack&rsquo;s has been the go-to barbershop in Algonquin for years —
              original leather chairs, walls full of memorabilia, and a barber who
              actually listens. Whether you want a classic pompadour, a clean fade,
              or a straight-razor beard trim, you leave looking sharp.
            </p>
            <p>
              No apps. No subscriptions. No corporate nonsense. Just a
              proper haircut from someone who takes pride in the craft.
            </p>
          </Reveal>

          <div className={styles.credentials}>

            <Reveal>
              <div className={styles.award}>
                <Image
                  src={`${BASE_PATH}/images/vendor/NWH-2019-BOF-Logo.webp`}
                  alt="Northwest Herald Readers' Choice — Best of the Fox 2019"
                  width={120}
                  height={120}
                  className={styles.awardSeal}
                />
                <p className={styles.awardTitle}>Best of the Fox</p>
                <p className={styles.awardSub}>Northwest Herald Readers&rsquo; Choice</p>
              </div>
            </Reveal>

            <Reveal delay={120} className={styles.factItem}>
              <p className={styles.factTitle}>Serving Algonquin since 2011</p>
              <p className={styles.factDesc}>
                More than a decade of regulars, referrals, and the same
                attention to detail on every visit.
              </p>
            </Reveal>

            <Reveal delay={240} className={styles.factItem}>
              <a
                className={styles.factTitle}
                href="https://maps.google.com/?q=150+S+Main+St+Algonquin+IL+60102"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={styles.factIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                150 S Main St, Algonquin
              </a>
              <p className={styles.factDesc}>
                Right in the heart of downtown. Easy to find, easy to park,
                worth the trip.
              </p>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  );
}
