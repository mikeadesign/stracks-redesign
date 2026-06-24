'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';

const NAV_LINKS = [
  { href: '#services', label: 'Services',     id: 'services' },
  { href: '#hours',    label: 'Hours & Info', id: 'hours'    },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);

    // '-50% 0px -50% 0px' means a section is "active" when its midpoint
    // crosses the vertical center of the viewport — only one fires at a time.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Strack<span>&rsquo;</span>s Barbershop
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
              aria-current={activeSection === id ? 'true' : undefined}
            >
              {label}
            </a>
          ))}
          <a href="tel:8476586948" className={styles.phone}>847-658-6948</a>
        </nav>
      </div>
    </header>
  );
}
