import { Merchant } from './types';

export const MERCHANTS: Merchant[] = [
  {
    id: '1',
    name: 'Kkoki Korean BBQ Denver',
    description: 'Casual restaurant featuring Korean BBQ and other dishes such as bibimbap, kimchi pancakes and tofu stew.',
    imageUrl: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=800&auto=format&fit=crop', // Better KBBQ spread image
    category: 'Korean BBQ',
    address: '2100 16th St Mall #145, Denver, CO 80202',
    phone: '(303) 953-2422',
    menuUrl: 'https://epipay.com'
  },
  {
    id: '2',
    name: 'Tofu House 1962',
    description: 'Local outpost of a global restaurant chain, specializing in traditional Korean BBQ & tofu soups.',
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800&auto=format&fit=crop', // Korean Stew/Tofu Image
    category: 'Korean Cuisine',
    address: '2353 S Havana St # D1, Aurora, CO 80014',
    phone: '(303) 751-2840',
    menuUrl: 'https://foodhere.co'
  },
  {
    id: '3',
    name: 'Waikiki POKE',
    description: 'Unfussy poke restaurant preparing fresh fish & vegetable bowls to dine in or take out.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop', // Poke Bowl Image
    category: 'Poke',
    address: '535 Zang St B, Broomfield, CO 80021',
    phone: '(720) 542-8872',
    menuUrl: 'https://foodhere.co'
  }
];

export const CHECKOUT_URL = "https://giftup.app/place-order/d50684a7-22af-4696-934b-08dab0fa3766";