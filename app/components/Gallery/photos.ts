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
    alt: 'The leather barber chairs — antiques, collected over the years and still in daily use',
    width: 618,
    height: 412,
  },
  {
    src: `${BASE_PATH}/images/home/2.webp`,
    alt: "A shaving brush and tin of Pinaud Clubman talc, tucked in among the shop's memorabilia",
    width: 618,
    height: 412,
  },
  {
    src: `${BASE_PATH}/images/home/3.webp`,
    alt: 'The brass Michigan cash register from the 1930s, still ringing up every haircut',
    width: 618,
    height: 412,
    focus: '60%',
  },
  {
    src: `${BASE_PATH}/images/home/4.webp`,
    alt: 'Vintage hair clippers, one of the old tools on display around the shop',
    width: 618,
    height: 412,
    focus: '65%',
  },
  {
    src: `${BASE_PATH}/images/home/5.webp`,
    alt: 'A straight razor resting on its strop, part of the antiques lining the shop',
    width: 618,
    height: 412,
  },
  {
    src: `${BASE_PATH}/images/home/6.webp`,
    alt: "Illinois Razor Strop Co. strop, No. 127 — one more piece of the shop's collected history",
    width: 618,
    height: 412,
    focus: '65%',
  },
];
