import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Services from './components/Services/Services';
import Hours from './components/Hours/Hours';
import Footer from './components/Footer/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: "Strack's Barbershop",
  description:
    "Voted Best of the Fox — a classic barbershop in Algonquin, IL offering men's haircuts, beard trims, fades, and old-school straight-razor service.",
  url: 'https://www.stracksbarbershop.com',
  telephone: '+18476586948',
  email: 'stracksbarbershop@yahoo.com',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '150 S Main St',
    addressLocality: 'Algonquin',
    addressRegion: 'IL',
    postalCode: '60102',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.166286,
    longitude: -88.295934,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Saturday'],
      opens: '09:00',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Barbershop Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: "Men's Haircut" },
        price: '35.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: "Men's Haircut with Beard" },
        price: '50.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: "Senior's Haircut (65+)" },
        price: '30.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: "Senior's Haircut with Beard (65+)" },
        price: '40.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Beard Trim' },
        price: '25.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: "Kid's Haircut (10 & under)" },
        price: '30.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Bald / Skin Fade' },
        price: '40.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Buzz Cut' },
        price: '25.00',
        priceCurrency: 'USD',
      },
    ],
  },
  sameAs: ['https://www.facebook.com/stracksbarbershop'],
  award: 'Best of the Fox — Northwest Herald',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <div className="pole-divider" aria-hidden="true" />
        <About />
        <Gallery />
        <Services />
        <Hours />
      </main>
      <Footer />
    </>
  );
}
