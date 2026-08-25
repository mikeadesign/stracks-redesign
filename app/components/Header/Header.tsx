'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

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

  // While the panel is open: lock scroll, close on Escape, make the page
  // behind it inert so keyboard/AT focus can't land on covered content, move
  // focus into the panel, and restore it to the trigger on close.
  useEffect(() => {
    if (!menuOpen) return;

    // Captured now rather than read in the cleanup. The node never changes —
    // the hamburger renders unconditionally and is only display:none above
    // $bp-sm — so this is equivalent, and it keeps react-hooks/exhaustive-deps
    // from flagging a ref read in a cleanup that runs later.
    const menuButton = menuButtonRef.current;

    document.body.style.overflow = 'hidden';

    const behind = document.querySelectorAll('main, footer');
    behind.forEach((el) => el.setAttribute('inert', ''));

    // The panel transitions from visibility:hidden; a .focus() on a
    // still-hidden element silently no-ops. Force a style flush so the
    // .panelOpen class (visibility:visible) is applied before focusing.
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      behind.forEach((el) => el.removeAttribute('inert'));
      window.removeEventListener('keydown', onKey);
      menuButton?.focus();
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Strack<span>&rsquo;</span>s<span className={styles.logoWord}> Barbershop</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary">
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
            ref={menuButtonRef}
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
        aria-label="Site sections"
        aria-hidden={!menuOpen}
      >
        {MENU_LINKS.map(({ href, label, id }, i) => (
          <a
            key={id}
            ref={i === 0 ? firstLinkRef : undefined}
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
