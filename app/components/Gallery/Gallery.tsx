import GalleryStrip from './GalleryStrip';
import { photos } from './photos';
import styles from './Gallery.module.scss';

export default function Gallery() {
  return (
    <section className={styles.gallery} aria-label="Shop photos">
      <h2 className={styles.heading}>Inside the Shop</h2>
      <GalleryStrip photos={photos} />
    </section>
  );
}
