import Reveal from '../Reveal/Reveal';
import styles from './Services.module.scss';

const services = [
  { name: "Men's Haircut", price: '$35' },
  { name: "Men's Haircut with Beard", price: '$50' },
  { name: "Senior's Haircut", note: 'Ages 65+', price: '$30' },
  { name: "Senior's Haircut with Beard", note: 'Ages 65+', price: '$40' },
  { name: 'Beard Trim', price: '$25' },
  { name: "Kid's Haircut", note: 'Ages 10 & under', price: '$30' },
  { name: 'Bald / Skin Fade', price: '$40' },
  { name: 'Buzz Cut', price: '$25' },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <h2>Services &amp; Pricing</h2>
          <p>
            Straightforward pricing, no upsells. Cash only — bring your wallet,
            leave looking sharp.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className={styles.grid}>
            {services.map((s) => (
              <div key={s.name} className={styles.item}>
                <span className={styles.itemName}>
                  {s.name}
                  {s.note && <span>{s.note}</span>}
                </span>
                <span className={styles.leader} aria-hidden="true" />
                <span className={styles.price}>{s.price}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className={styles.footer}>
            <div className={styles.footerItem}>
              <strong>Gift Certificates</strong>
              <p>Available in any amount &mdash; ask at the shop.</p>
            </div>
            <div className={styles.footerItem}>
              <strong>Call Ahead</strong>
              <p>
                Appointments fill up fast &mdash; walk-ins welcome if
                there&rsquo;s an opening.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
