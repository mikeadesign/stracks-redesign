export type Service = {
  name: string;
  /** Qualifier shown under the name, e.g. 'Ages 65+'. Appears parenthesized in structured data. */
  note?: string;
  /** Whole US dollars. */
  price: number;
};

export const services: Service[] = [
  { name: "Men's Haircut", price: 35 },
  { name: "Men's Haircut with Beard", price: 50 },
  { name: "Senior's Haircut", note: 'Ages 65+', price: 30 },
  { name: "Senior's Haircut with Beard", note: 'Ages 65+', price: 45 },
  { name: 'Beard Trim', price: 25 },
  { name: "Kid's Haircut", note: 'Ages 10 & under', price: 30 },
  { name: 'Bald / Skin Fade', price: 40 },
  { name: 'Buzz Cut', price: 25 },
];

export function serviceSchemaName({ name, note }: Service): string {
  return note ? `${name} (${note})` : name;
}
