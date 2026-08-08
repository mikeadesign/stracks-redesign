'use client';

import { useClientValue } from '../../useClientValue';
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

export default function Schedule() {
  // Computed after hydration so the highlight is the visitor's "today" in the
  // shop's timezone — a server render would freeze it at build time. Until
  // then it's null, so the static HTML highlights no row at all rather than
  // the wrong one.
  const todayName = useClientValue(
    () =>
      new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        timeZone: 'America/Chicago',
      }).format(new Date()),
    null as string | null
  );

  return (
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
  );
}
