import { services, serviceSchemaName } from './services';
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
  // schema.org has no dedicated "barbershop" type — HairSalon is the closest
  // real subtype. This points at Wikidata's distinct "barbershop" entity
  // (explicitly different from a hair salon) for a more specific signal.
  additionalType: 'https://www.wikidata.org/wiki/Q21980641',
  name: "Strack's Barbershop",
  description:
    "Voted Best of the Fox — a classic barbershop in Algonquin, IL offering men's haircuts, beard trims, fades, and old-school straight-razor service.",
  url: 'https://www.stracksbarbershop.com',
  // Reuses the Open Graph share image rather than a separate asset — same
  // storefront photo, already the site's one "official" representative
  // picture. Google lists `image` as a recommended LocalBusiness field for
  // Knowledge Panel / rich-result matching; it was missing entirely before.
  image: 'https://www.stracksbarbershop.com/images/og.jpg',
  // Same animated sign badge used in the About section (About.tsx).
  logo: 'https://www.stracksbarbershop.com/images/stracks-barbershop-sign-2024.gif',
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
  // Same URL the "Address" contact-list link uses in Hours.tsx.
  hasMap: 'https://maps.google.com/?q=150+S+Main+St+Algonquin+IL+60102',
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
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: serviceSchemaName(service) },
      price: service.price.toFixed(2),
      priceCurrency: 'USD',
    })),
  },
  sameAs: [
    'https://www.facebook.com/stracksbarbershop',
    'https://www.yelp.com/biz/stracks-barber-shop-algonquin',
    'https://www.instagram.com/stracksbarbershop/',
  ],
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
        <About />
        <Gallery />
        <Services />
        <Hours />
      </main>
      <Footer />
    </>
  );
}
