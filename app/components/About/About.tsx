import Image from 'next/image';
import Reveal from '../Reveal/Reveal';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>

        <Reveal className={styles.logoHeader}>
          <Image
            src="/images/stracks-barbershop-sign-2024.gif"
            alt="Strack's Barbershop — Est. 2011"
            width={600}
            height={490}
            className={styles.logoHeaderImg}
            style={{ height: 'auto' }}
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
                  src="/images/vendor/NWH-2019-BOF-Logo.jpg"
                  alt="Northwest Herald Readers' Choice — Best of the Fox 2019"
                  width={120}
                  height={120}
                  className={styles.awardSeal}
                  style={{ objectFit: 'contain' }}
                />
                <p className={styles.awardTitle}>Best of the Fox</p>
                <p className={styles.awardSub}>Northwest Herald Readers&rsquo; Choice</p>
              </div>
            </Reveal>

            <Reveal delay={120} className={styles.factItem}>
              <p className={styles.factTitle}>Classic craft, no shortcuts</p>
              <p className={styles.factDesc}>
                Original leather chairs, straight-razor service, walls full of
                memorabilia. The kind of shop that takes pride in what it does.
              </p>
            </Reveal>

            <Reveal delay={240} className={styles.factItem}>
              <p className={styles.factTitle}>150 S Main St, Algonquin</p>
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
