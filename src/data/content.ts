import type { ImageMetadata } from 'astro';

import roomLookout from '../assets/images/room-lookout.jpg';
import roomGarden from '../assets/images/room-garden.jpg';
import roomSnug from '../assets/images/room-snug.jpg';
import roomPool from '../assets/images/room-pool.jpg';
import avatarMarianne from '../assets/images/avatar-marianne.jpg';
import avatarThomas from '../assets/images/avatar-thomas.jpg';
import avatarPriya from '../assets/images/avatar-priya.jpg';

export const navigation = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Dining', href: '#dining' },
  { label: 'Location', href: '#location' },
  { label: 'Journal', href: '#voices' },
];

export const press = ['Coastal Review', 'The Quiet List', 'Field Notes', 'Slow Travel', 'The Long Weekend'];

export const stats = [
  { value: '9', label: 'Rooms' },
  { value: '1', label: "Table d'hote" },
  { value: '4', label: 'Years building' },
  { value: '1 mile', label: 'Coast path' },
];

export interface Room {
  name: string;
  detail: string;
  price: string;
  image: ImageMetadata;
  alt: string;
}

export const rooms: Room[] = [
  {
    name: 'The Lookout',
    detail: 'Top floor · sea view',
    price: 'From £240 / night',
    image: roomLookout,
    alt: 'Round lounge with a curved wooden bar and red armchairs',
  },
  {
    name: 'The Garden Room',
    detail: 'Ground floor · private terrace',
    price: 'From £180 / night',
    image: roomGarden,
    alt: 'Plaster wall and a tall window opening onto a green garden',
  },
  {
    name: 'The Snug',
    detail: 'Compact double · reading nook',
    price: 'From £150 / night',
    image: roomSnug,
    alt: 'Dim bedroom with a low lamp above the bed and closed blinds',
  },
  {
    name: 'The Pool House',
    detail: 'Standalone · private plunge pool',
    price: 'From £320 / night',
    image: roomPool,
    alt: 'Lit swimming pool at dusk with palm trees and mountains behind',
  },
];

export const diningDetails = ['Seating from 7pm', 'Six courses', 'Natural wine list', 'Last booking Sunday'];

export const distances = [
  { place: 'Station', time: '40 min drive' },
  { place: 'Village', time: '8 min walk' },
  { place: 'Nearest beach', time: '12 min walk' },
  { place: 'Airport', time: '2h 10m drive' },
];

export const testimonials = [
  {
    quote: 'We came for two nights and stayed for five. Nobody mentioned checkout.',
    name: 'Marianne Lund',
    avatar: avatarMarianne,
  },
  {
    quote: 'The kind of quiet that makes you talk slower.',
    name: 'Thomas Okafor',
    avatar: avatarThomas,
  },
  {
    quote: 'Breakfast alone was worth the drive.',
    name: 'Priya Nandan',
    avatar: avatarPriya,
  },
];

export type Availability = 'yes' | 'partial' | 'no';

export const amenities: { label: string; status: Availability }[][] = [
  [
    { label: 'Sea-view rooms', status: 'yes' },
    { label: 'Spa and sauna', status: 'yes' },
    { label: 'Electric car charging', status: 'yes' },
  ],
  [
    { label: 'Pet friendly, four rooms', status: 'partial' },
    { label: 'Late checkout, by request', status: 'partial' },
    { label: 'Conference facilities', status: 'no' },
  ],
];

export const faqs = [
  { question: 'What time is check-in?', answer: 'From 3pm. Early arrival is sometimes possible, ask ahead.' },
  {
    question: 'Is the hotel suitable for children?',
    answer: 'From age twelve. We keep the dining room quiet in the evening.',
  },
  { question: 'Do you offer transfers from the station?', answer: 'Yes, by arrangement, for a small fee.' },
  { question: 'Can I bring my dog?', answer: 'In four of our nine rooms, yes. Let us know when booking.' },
];

export const footerColumns = [
  {
    title: 'Hotel',
    links: [
      { label: 'Rooms', href: '#rooms' },
      { label: 'Dining', href: '#dining' },
      { label: 'Journal', href: '#voices' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Visit',
    links: [
      { label: 'Location', href: '#location' },
      { label: 'Getting here', href: '#getting-here' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#cta' },
    ],
  },
];
