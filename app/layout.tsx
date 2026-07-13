import type { Metadata } from 'next';
import { Abril_Fatface, Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.scss';

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
      <body>{children}</body>
    </html>
  );
}
