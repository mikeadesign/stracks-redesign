import type { Metadata } from 'next';
import { Abril_Fatface, Playfair_Display, Source_Sans_3 } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import HashScroll from './components/HashScroll/HashScroll';
import ClickTracking from './components/ClickTracking/ClickTracking';
import './globals.scss';

// Same GA4 property as the live site (stracksbarbershop.com), carried over so
// launch doesn't break history on the property. The old UA-104086898-1 ID
// also present on the live site is Universal Analytics — GA stopped
// collecting on UA properties in July 2023, so it's dead weight and isn't
// ported. No GTM container on the live site, just a direct gtag.js install.
const GA_MEASUREMENT_ID = 'G-XZD2N6BFDS';

const abrilFatface = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stracksbarbershop.com'),
  alternates: {
    canonical: '/',
  },
  title: "Strack's Barbershop | Algonquin, IL",
  description:
    "Voted Best of the Fox — a classic barbershop in Algonquin, IL. Haircuts, beard trims, and old-school service at 150 S Main St. Call 847-658-6948.",
  openGraph: {
    title: "Strack's Barbershop",
    description: 'Classic barbershop in Algonquin, IL. Voted Best of the Fox.',
    url: 'https://www.stracksbarbershop.com',
    siteName: "Strack's Barbershop",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: "The storefront of Strack's Barbershop at 150 S Main St, Algonquin — barber pole, flag, and the shop name lettered on the door glass.",
      },
    ],
  },
  // Facebook is where this link actually gets shared, but Slack, Discord and
  // iMessage read the twitter tags in preference to OG. Next derives the rest
  // of them from openGraph; this just upgrades the crop from a small square
  // thumbnail to the full-width card.
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${abrilFatface.variable} ${playfairDisplay.variable} ${sourceSans3.variable}`}
    >
      {/*
        suppressHydrationWarning is here for browser extensions, not for
        anything this app renders. Extensions stamp attributes onto <body>
        before React loads — ColorZilla's cz-shortcut-listen is the usual
        culprit — and React reports the difference as a hydration mismatch on
        every page load. It suppresses only this element's own attributes, one
        level deep, so a real mismatch anywhere in the tree below still
        reports normally.
      */}
      <body suppressHydrationWarning>
        <HashScroll />
        <ClickTracking />
        {children}
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
