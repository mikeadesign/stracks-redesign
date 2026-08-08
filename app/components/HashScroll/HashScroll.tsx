'use client';

import { useEffect } from 'react';

/**
 * Makes a cold load of /#services (or #about, #hours, #contact) actually land
 * on the section, then turns smooth scrolling on for in-page nav clicks.
 *
 * Those hash URLs are the redirect targets for the old site's services.html,
 * location.html, contact.html, hours.html and rick.html — see public/.htaccess
 * — so arrivals on them have to work, and out of the box they don't. Two
 * things get in the way: `scroll-behavior: smooth` on <html> turns the arrival
 * into an animation, which never runs at all if the page loaded in a
 * background tab (opening a search result in a new tab is exactly how people
 * land here); and in the production build something during startup returns the
 * page to the top after the browser's own fragment scroll.
 *
 * So smooth is scoped to a class this component adds once the arrival is over,
 * and the jump is done here explicitly and instantly, re-applied for a short
 * settle window to survive that reset and any late reflow from fonts or the
 * hero image. Retries stop the moment the visitor scrolls, so they can never
 * fight a real gesture.
 */
const SETTLE_MS = 600;
const RETRY_MS = 50;
const GESTURES = ['wheel', 'touchstart', 'keydown'] as const;

export default function HashScroll() {
  useEffect(() => {
    const enableSmooth = () =>
      document.documentElement.classList.add('smoothScroll');

    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;

    if (!target) {
      enableSmooth();
      return;
    }

    // block: 'start' honours the scroll-padding-top that keeps the section
    // heading clear of the fixed header.
    const jump = () =>
      target.scrollIntoView({ behavior: 'instant', block: 'start' });

    // Smooth is turned on only after the last jump — enabling it earlier would
    // animate the arrival, which is the thing this component exists to avoid.
    const finish = () => {
      cleanup();
      enableSmooth();
    };

    const cleanup = () => {
      clearInterval(retry);
      clearTimeout(settle);
      GESTURES.forEach((e) => window.removeEventListener(e, finish));
    };

    jump();
    const retry = setInterval(jump, RETRY_MS);
    const settle = setTimeout(finish, SETTLE_MS);
    GESTURES.forEach((e) =>
      window.addEventListener(e, finish, { passive: true })
    );

    return cleanup;
  }, []);

  return null;
}
