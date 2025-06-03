export interface Destination {
  id: string;
  name: string;
  state: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface ItineraryDay {
  day: number;
  activities: {
    morning: string;
    afternoon: string;
    evening: string;
  };
  accommodation: string;
  transportation: string;
}

export interface Itinerary {
  id: string;
  destination: string;
  duration: number;
  budget: 'budget' | 'mid-range' | 'luxury';
  interests: string[];
  days: ItineraryDay[];
  totalEstimatedCost: string;
}

export type TripDuration = 3 | 5 | 7 | 10 | 14;
export type TripBudget = 'budget' | 'mid-range' | 'luxury';

export interface TripPreferences {
  destination: string;
  duration: TripDuration;
  budget: TripBudget;
  interests: string[];
}