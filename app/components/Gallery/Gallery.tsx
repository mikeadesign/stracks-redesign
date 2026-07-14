import Image from 'next/image';
import styles from './Gallery.module.scss';

const photos = [
  { src: '/images/home/1.jpg', alt: "Original leather barber chairs at Strack's Barbershop" },
  { src: '/images/home/2.jpg', alt: 'Vintage Pinaud Clubman talc and shaving brush at the shaving station' },
  { src: '/images/home/3.jpg', alt: "Antique brass cash register with the shop's engraved drawer" },
  { src: '/images/home/4.jpg', alt: "Vintage hair clippers resting on the barber's leather strop" },
  { src: '/images/home/5.jpg', alt: 'A straight razor resting on its leather strop' },
  { src: '/images/home/6.jpg', alt: 'Illinois Razor Strop Co. leather strop, No. 127' },
];

export default function Gallery() {
  return (
    <section className={styles.gallery} aria-label="Shop photos">
      <h2 className={styles.heading}>Inside the Shop</h2>
      <div className={styles.strip}>
        {photos.map((photo) => (
          <div key={photo.src} className={styles.photo}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 17vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
