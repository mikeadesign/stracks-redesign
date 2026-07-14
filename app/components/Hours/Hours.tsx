import Schedule from './Schedule';
import styles from './Hours.module.scss';

export default function Hours() {
  return (
    <section id="hours" className={styles.hours}>
      <div className={styles.inner}>
        <div className={styles.block}>
          <h2>Hours</h2>
          <Schedule />
          <p className={styles.note}>
            Call ahead — appointments fill up fast. Walk-ins welcome if
            there&rsquo;s an opening.
          </p>
        </div>

        <div id="contact" className={styles.block}>
          <h2>Contact &amp; Location</h2>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <div className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.contactText}>
                <strong>Address</strong>
                <a
                  href="https://maps.google.com/?q=150+S+Main+St+Algonquin+IL+60102"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  150 S Main St<br />Algonquin, IL 60102
                </a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </div>
              <div className={styles.contactText}>
                <strong>Phone</strong>
                <a href="tel:8476586948">847-658-6948</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </div>
              <div className={styles.contactText}>
                <strong>Email</strong>
                <a href="mailto:stracksbarbershop@yahoo.com">stracksbarbershop@yahoo.com</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.contactIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
                </svg>
              </div>
              <div className={styles.contactText}>
                <strong>Facebook</strong>
                <a
                  href="https://www.facebook.com/stracksbarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook.com/stracksbarbershop
                </a>
              </div>
            </li>
          </ul>
          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.2522325300783!2d-88.29593442339895!3d42.166285947320894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f0db7a339b573%3A0x6d1005b1562901b0!2s150%20S%20Main%20St%2C%20Algonquin%2C%20IL%2060102!5e0!3m2!1sen!2sus!4v1724209997268!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Strack's Barbershop location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
