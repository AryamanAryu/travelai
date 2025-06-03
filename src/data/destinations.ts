import { Destination } from '../types';

export const popularDestinations: Destination[] = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    description: 'Known as the "Pink City", Jaipur is famous for its stunning palaces, colorful bazaars, and rich cultural heritage.',
    imageUrl: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['heritage', 'architecture', 'shopping']
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    description: 'India\'s beach paradise with golden sands, vibrant nightlife, and Portuguese-influenced architecture.',
    imageUrl: 'https://images.pexels.com/photos/1057313/pexels-photo-1057313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['beaches', 'nightlife', 'seafood']
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    description: 'One of the world\'s oldest continuously inhabited cities and a spiritual hub on the banks of the Ganges.',
    imageUrl: 'https://images.pexels.com/photos/11396795/pexels-photo-11396795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['spiritual', 'historical', 'cultural']
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    state: 'Kerala',
    description: 'Serene network of canals, rivers, and lakes with houseboats offering an unforgettable experience.',
    imageUrl: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['nature', 'relaxation', 'cuisine']
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    description: 'Breathtaking hill station known for its tea plantations and panoramic views of the Himalayas.',
    imageUrl: 'https://images.pexels.com/photos/4406292/pexels-photo-4406292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['mountains', 'tea', 'scenic']
  },
  {
    id: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    description: 'Home to the iconic Taj Mahal, one of the Seven Wonders of the World.',
    imageUrl: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['monument', 'historical', 'architecture']
  }
];

export const allDestinations = [
  ...popularDestinations,
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    description: 'India\'s financial capital and home to Bollywood, offering a mix of colonial architecture, beaches, and vibrant street life.',
    imageUrl: 'https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['metropolitan', 'food', 'entertainment']
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    description: 'The "City of Lakes" known for its romantic setting, luxurious palaces, and beautiful lakes.',
    imageUrl: 'https://images.pexels.com/photos/12186830/pexels-photo-12186830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['lakes', 'palaces', 'romantic']
  }
];

export const interests = [
  'Adventure',
  'Architecture',
  'Art',
  'Beaches',
  'Cuisine',
  'Culture',
  'History',
  'Mountains',
  'Nature',
  'Photography',
  'Shopping',
  'Spiritual',
  'Wildlife'
];