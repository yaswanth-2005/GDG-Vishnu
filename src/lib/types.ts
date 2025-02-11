import { StaticImageData } from 'next/image';

export interface EventTypes {
  bannerImage: StaticImageData;
  images: StaticImageData[];
  title: string;
  slug: string;
  description: string;
  text: string;
  date: string;
  location: string;
}

export type Variant = 'green' | 'blue' | 'red' | 'yellow';

export interface TeamMember {
  avatar?: StaticImageData;
  name: string;
  surname: string;
  title: string;
  variant: Variant;
  linkedinUrl?: string;
  instagramUsername?: string;
}
