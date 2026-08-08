import { BASE_PATH } from '../../basePath';

export interface GalleryPhoto {
  src: string;
  alt: string;
  /** Intrinsic size of the source file. The lightbox never renders above this. */
  width: number;
  height: number;
  /**
   * Horizontal focal point, as an object-position value. Set only where the
   * subject sits off centre. Every source frame is 618×412 landscape and the
   * grid crops to portrait or square cells, so 34–51% of each photo's width is
   * discarded — a centre crop cuts the subject out of any off-centre frame.
   */
  focus?: string;
}

export const photos: GalleryPhoto[] = [
  {
    src: `${BASE_PATH}/images/home/1.webp`,
    alt: "Original leather barber chairs at Strack's Barbershop",
    width: 618,
    height: 412,
  },
  {
    src: `${BASE_PATH}/images/home/2.webp`,
    alt: 'Vintage Pinaud Clubman talc and shaving brush at the shaving station',
    width: 618,
    height: 412,
  },
  {
    src: `${BASE_PATH}/images/home/3.webp`,
    alt: 'Antique 1930s brass Michigan cash register',
    width: 618,
    height: 412,
    focus: '60%',
  },
  {
    src: `${BASE_PATH}/images/home/4.webp`,
    alt: "Vintage hair clippers resting on the barber's leather strop",
    width: 618,
    height: 412,
    focus: '65%',
  },
  {
    src: `${BASE_PATH}/images/home/5.webp`,
    alt: 'A straight razor resting on its leather strop',
    width: 618,
    height: 412,
  },
  {
    src: `${BASE_PATH}/images/home/6.webp`,
    alt: 'Illinois Razor Strop Co. leather strop, No. 127',
    width: 618,
    height: 412,
    focus: '65%',
  },
];
