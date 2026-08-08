'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import Lightbox from './Lightbox';
import type { GalleryPhoto } from './photos';
import styles from './Gallery.module.scss';

export default function GalleryStrip({ photos }: { photos: GalleryPhoto[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  // <dialog> returns focus to the invoker on close, but that's the thumbnail
  // the visitor opened — not the one they arrowed to. Restoring it here lands
  // them on the photo they were actually looking at. Deliberately not wrapped
  // in useCallback with an empty dep list: this needs the openIndex from the
  // latest render, and a stale closure is exactly the bug that produces.
  const close = () => {
    if (openIndex !== null) triggers.current[openIndex]?.focus();
    setOpenIndex(null);
  };

  return (
    <>
      <div className={styles.strip}>
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className={styles.photo}
            onClick={() => setOpenIndex(i)}
            ref={(el) => {
              triggers.current[i] = el;
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 30vw"
              style={photo.focus ? { objectPosition: `${photo.focus} center` } : undefined}
            />
          </button>
        ))}
      </div>

      <Lightbox
        photos={photos}
        index={openIndex}
        onClose={close}
        onNavigate={setOpenIndex}
      />
    </>
  );
}
