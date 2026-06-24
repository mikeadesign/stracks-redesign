import Image from 'next/image';
import styles from './Gallery.module.scss';

const photos = [
  { src: '/images/home/1.jpg', alt: "Inside Strack's Barbershop" },
  { src: '/images/home/2.jpg', alt: "Classic barber chairs at Strack's" },
  { src: '/images/home/3.jpg', alt: "Strack's Barbershop interior" },
  { src: '/images/home/4.jpg', alt: "Barber at work at Strack's" },
  { src: '/images/home/5.jpg', alt: "Strack's Barbershop Algonquin" },
  { src: '/images/home/6.jpg', alt: "The shop at Strack's" },
];

export default function Gallery() {
  return (
    <section className={styles.gallery} aria-label="Shop photos">
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
