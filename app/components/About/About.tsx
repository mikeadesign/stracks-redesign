import Image from 'next/image';
import Reveal from '../Reveal/Reveal';
import styles from './About.module.scss';

const badges = [
  {
    icon: '✂️',
    title: 'Award-Winning',
    desc: 'Voted Best of the Fox by Northwest Herald readers',
  },
  {
    icon: '💈',
    title: 'Old-School Craft',
    desc: 'Original barbershop seating, straight-razor service, and time-tested technique',
  },
  {
    icon: '📍',
    title: '150 S Main St, Algonquin',
    desc: 'Right in the heart of downtown — easy to find, worth the trip',
  },
];

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
            <p className="eyebrow">South Main Street &middot; Algonquin</p>
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

          <div className={styles.badges}>
            {badges.map((b, i) => (
              <Reveal key={b.title} delay={i * 120}>
                <div className={styles.badge}>
                  <span className={styles.badgeIcon}>{b.icon}</span>
                  <div className={styles.badgeText}>
                    <strong>{b.title}</strong>
                    <span>{b.desc}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
