'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import type { GalleryPhoto } from './photos';
import styles from './Lightbox.module.scss';

interface LightboxProps {
  photos: GalleryPhoto[];
  /** null when closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const SWIPE_THRESHOLD = 40;

export default function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const frameRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  const open = index !== null;

  // showModal() rather than the open attribute: it's what puts the dialog in
  // the top layer and gives us the focus trap, page inertness and Esc for free.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      // showModal focuses the first tabbable descendant, which is the close
      // button — so a screen reader opens on "Close" instead of on the photo.
      // Move it to the figure. React's autoFocus prop won't do this: it only
      // applies to form controls, so on a <figure> it's silently dropped.
      frameRef.current?.focus({ preventScroll: true });
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // showModal blocks interaction behind the dialog but does not stop the page
  // scrolling underneath on iOS.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    // Clear outright rather than restoring a captured previous value. This is
    // the only thing on the page that touches body overflow, and capturing was
    // fragile: an open/close pair that overlapped could record 'hidden' as the
    // value to "restore", locking scroll permanently.
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      // Wrap rather than disable at the ends: with a visible "n of 6" counter
      // the position is never ambiguous, and a dead button is a worse answer
      // than a loop for someone tapping through on a phone.
      onNavigate((index + delta + photos.length) % photos.length);
    },
    [index, onNavigate, photos.length]
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (photos.length < 2) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      step(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      step(-1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      onNavigate(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      onNavigate(photos.length - 1);
    }
  };

  const photo = index === null ? null : photos[index];

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label="Shop photo viewer"
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        // Only the backdrop area of the dialog itself, never the frame inside.
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const delta = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(delta) > SWIPE_THRESHOLD) step(delta < 0 ? 1 : -1);
      }}
    >
      <button
        type="button"
        className={styles.close}
        onClick={() => dialogRef.current?.close()}
        aria-label="Close photo viewer"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {photo && (
        // Capped at the file's intrinsic width. The originals are 618×412, so
        // anything larger is upscaling — the point of this view is the full
        // uncropped frame, not a bigger soft one.
        <figure
          ref={frameRef}
          className={styles.frame}
          // Focus target on open (see the showModal effect), so the first
          // thing announced is the picture and its caption, not the way out.
          tabIndex={-1}
          style={{ '--lightbox-width': `${photo.width}px` } as React.CSSProperties}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 680px) 100vw, 618px"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <p className={styles.captionText} aria-live="polite">
              {photo.alt}
            </p>

            {photos.length > 1 && (
              <div className={styles.controls}>
                <button
                  type="button"
                  className={styles.navButton}
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                <span className={styles.counter}>
                  {index! + 1} of {photos.length}
                </span>

                <button
                  type="button"
                  className={styles.navButton}
                  onClick={() => step(1)}
                  aria-label="Next photo"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </figcaption>
        </figure>
      )}
    </dialog>
  );
}
