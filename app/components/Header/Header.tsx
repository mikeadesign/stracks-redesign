'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';

const NAV_LINKS = [
  { href: '#services', label: 'Services',     id: 'services' },
  { href: '#hours',    label: 'Hours & Info', id: 'hours'    },
];

// The mobile panel also gets About — desktop keeps the tighter two-link nav
const MENU_LINKS = [
  { href: '#about',    label: 'About',        id: 'about'    },
  ...NAV_LINKS,
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = MENU_LINKS.map((l) => l.id);

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

  // Lock page scroll while the panel is open; close on Escape
  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Strack<span>&rsquo;</span>s<span className={styles.logoWord}> Barbershop</span>
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
          <button
            type="button"
            className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuBar} aria-hidden="true" />
            <span className={styles.menuBar} aria-hidden="true" />
            <span className={styles.menuBar} aria-hidden="true" />
          </button>
        </nav>
      </div>

      <nav
        id="mobile-menu"
        className={`${styles.panel} ${menuOpen ? styles.panelOpen : ''}`}
        aria-label="Section navigation"
        aria-hidden={!menuOpen}
      >
        {MENU_LINKS.map(({ href, label, id }) => (
          <a
            key={id}
            href={href}
            className={`${styles.panelLink} ${activeSection === id ? styles.panelLinkActive : ''}`}
            aria-current={activeSection === id ? 'true' : undefined}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <div className={styles.panelStripe} aria-hidden="true" />
        <a
          href="tel:8476586948"
          className={styles.panelPhone}
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        >
          Call &mdash; 847-658-6948
        </a>
        <span className={styles.panelNote}>Cash only &middot; Walk-ins welcome</span>
      </nav>
    </header>
  );
}
