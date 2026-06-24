import styles from './Hours.module.scss';

const schedule = [
  { day: 'Sunday',    hours: 'Closed',    open: false },
  { day: 'Monday',    hours: 'Closed',    open: false },
  { day: 'Tuesday',   hours: '9am – 4pm', open: true  },
  { day: 'Wednesday', hours: '9am – 4pm', open: true  },
  { day: 'Thursday',  hours: '9am – 7pm', open: true  },
  { day: 'Friday',    hours: '9am – 7pm', open: true  },
  { day: 'Saturday',  hours: '9am – 4pm', open: true  },
];

const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export default function Hours() {
  const todayName = DAY_NAMES[new Date().getDay()];

  return (
    <section id="hours" className={styles.hours}>
      <div className={styles.inner}>
        <div className={styles.block}>
          <p className="eyebrow">When We&rsquo;re Open</p>
          <h2>Hours</h2>
          <div className={styles.schedule}>
            {schedule.map(({ day, hours, open }) => (
              <div
                key={day}
                className={[
                  styles.day,
                  !open ? styles.closed : '',
                  day === todayName ? styles.today : '',
                ].join(' ')}
              >
                <span className={styles.dayName}>{day}</span>
                <span className={styles.dayHours}>{open ? hours : 'Closed'}</span>
              </div>
            ))}
          </div>
          <p className={styles.note}>
            Appointments recommended — call ahead. Walk-ins are welcome when
            time permits.
          </p>
        </div>

        <div id="contact" className={styles.block}>
          <p className="eyebrow">Find Us</p>
          <h2>Contact &amp; Location</h2>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <div className={styles.contactIcon}>📍</div>
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
              <div className={styles.contactIcon}>📞</div>
              <div className={styles.contactText}>
                <strong>Phone</strong>
                <a href="tel:8476586948">847-658-6948</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.contactIcon}>✉️</div>
              <div className={styles.contactText}>
                <strong>Email</strong>
                <a href="mailto:stracksbarbershop@yahoo.com">stracksbarbershop@yahoo.com</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.contactIcon}>👍</div>
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
