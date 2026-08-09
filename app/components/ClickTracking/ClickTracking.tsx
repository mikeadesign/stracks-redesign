'use client';

import { useEffect } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

/**
 * GA4's Enhanced Measurement auto-tracks outbound clicks, but only for
 * http(s) links to another domain — tel: and mailto: links are explicitly
 * excluded. Click-to-call is the primary conversion for a cash-only,
 * no-booking barbershop, so it's tracked manually here via one delegated
 * listener rather than an onClick prop on every phone number/email link
 * (Hero, Header desktop nav, Header mobile menu, Hours).
 */
export default function ClickTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest('a[href]');
      const href = link?.getAttribute('href');
      if (!href) return;

      if (href.startsWith('tel:')) {
        sendGAEvent('event', 'click_to_call', { link_url: href });
      } else if (href.startsWith('mailto:')) {
        sendGAEvent('event', 'click_to_email', { link_url: href });
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
