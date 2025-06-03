import { Itinerary, TripPreferences, ItineraryDay } from '../types';
import { allDestinations } from '../data/destinations';

// Mock function to simulate AI-generated itineraries
export const generateItinerary = (preferences: TripPreferences): Promise<Itinerary> => {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      const destination = allDestinations.find(d => d.name.toLowerCase() === preferences.destination.toLowerCase()) || 
                         allDestinations.find(d => d.id.toLowerCase() === preferences.destination.toLowerCase());
      
      const destinationName = destination ? destination.name : preferences.destination;
      const days: ItineraryDay[] = [];
      
      // Generate activities based on interests and destination
      for (let i = 1; i <= preferences.duration; i++) {
        days.push(generateDay(i, destinationName, preferences));
      }
      
      // Calculate estimated cost based on budget and duration
      const costPerDay = {
        'budget': 2000,
        'mid-range': 5000,
        'luxury': 15000
      }[preferences.budget];
      
      const totalEstimatedCost = `₹${(costPerDay * preferences.duration).toLocaleString()}`;
      
      const itinerary: Itinerary = {
        id: `itin-${Date.now()}`,
        destination: destinationName,
        duration: preferences.duration,
        budget: preferences.budget,
        interests: preferences.interests,
        days: days,
        totalEstimatedCost
      };
      
      resolve(itinerary);
    }, 2000); // 2-second delay to simulate processing
  });
};

// Helper function to generate a day's activities
const generateDay = (day: number, destination: string, preferences: TripPreferences): ItineraryDay => {
  const activityTemplates = {
    'budget': {
      morning: [
        'Early morning walk exploring the local area',
        'Visit to a free public garden or park',
        'Self-guided walking tour of historic district'
      ],
      afternoon: [
        'Visit to a government museum with nominal entry fee',
        'Explore local markets and street food stalls',
        'Relax at a public beach or riverside'
      ],
      evening: [
        'Sunset viewing from a public viewpoint',
        'Stroll through evening bazaars',
        'Street food dinner at a popular local spot'
      ],
      accommodation: [
        'Stay at a budget hostel',
        'Affordable guesthouse accommodation',
        'Basic hotel room'
      ],
      transportation: [
        'Local bus travel',
        'Shared auto-rickshaw',
        'Walking to nearby attractions'
      ]
    },
    'mid-range': {
      morning: [
        'Guided half-day tour of main attractions',
        'Visit to a popular museum or historical site',
        'Cooking class featuring local cuisine'
      ],
      afternoon: [
        'Lunch at a well-reviewed local restaurant',
        'Shopping at boutique stores',
        'Visit to a cultural performance or workshop'
      ],
      evening: [
        'Dinner at a popular restaurant',
        'Evening cultural show or performance',
        'Sunset boat ride or similar experience'
      ],
      accommodation: [
        'Comfortable 3-star hotel',
        'Mid-range heritage property',
        'Well-rated bed and breakfast'
      ],
      transportation: [
        'Private auto-rickshaw for the day',
        'Combination of taxis and walking',
        'Rented scooter or motorcycle'
      ]
    },
    'luxury': {
      morning: [
        'Private guided tour with expert local guide',
        'Exclusive early access to popular attraction',
        'Gourmet breakfast followed by spa treatment'
      ],
      afternoon: [
        'Lunch at an acclaimed restaurant',
        'Private cultural experience or workshop',
        'VIP access to attractions'
      ],
      evening: [
        'Fine dining experience at top-rated restaurant',
        'Private sunset cruise or special experience',
        'Exclusive evening cultural program'
      ],
      accommodation: [
        'Luxury 5-star hotel',
        'Heritage palace or luxury resort',
        'Boutique luxury accommodation'
      ],
      transportation: [
        'Private car with driver for the day',
        'Premium taxi service',
        'Private guided tour with transportation'
      ]
    }
  };

  const destinationSpecificActivities = {
    'Jaipur': {
      morning: [
        'Visit the magnificent Amber Fort',
        'Explore the City Palace complex',
        'Tour of the astronomical wonders at Jantar Mantar'
      ],
      afternoon: [
        'Shopping for textiles and handicrafts in the bazaars of the Pink City',
        'Visit the stunning Hawa Mahal (Palace of Winds)',
        'Explore the Albert Hall Museum'
      ],
      evening: [
        'Sunset view from Nahargarh Fort',
        'Cultural performance at Jawahar Kala Kendra',
        'Dinner at a rooftop restaurant overlooking the illuminated city'
      ]
    },
    'Goa': {
      morning: [
        'Relaxing beach time at Palolem or Agonda',
        'Water sports at Baga or Calangute Beach',
        'Visit to the historic Basilica of Bom Jesus'
      ],
      afternoon: [
        'Exploration of Old Goa\'s Portuguese architecture',
        'Shopping at the Anjuna Flea Market (Wednesdays)',
        'Spice plantation tour with lunch'
      ],
      evening: [
        'Sunset cruise on the Mandovi River',
        'Fresh seafood dinner at a beach shack',
        'Experience Goa\'s famous nightlife in Baga or Anjuna'
      ]
    }
  };

  // Get budget-specific templates
  const templates = activityTemplates[preferences.budget];
  
  // Try to get destination-specific activities or use generic ones
  const destinationActivities = destinationSpecificActivities[destination as keyof typeof destinationSpecificActivities];
  
  // Random selection helpers
  const getRandomItem = (array: string[]) => array[Math.floor(Math.random() * array.length)];
  
  // Build the day with some variety based on day number
  const morningActivity = destinationActivities?.morning && day <= destinationActivities.morning.length 
    ? destinationActivities.morning[day - 1] 
    : getRandomItem(templates.morning);
  
  const afternoonActivity = destinationActivities?.afternoon && day <= destinationActivities.afternoon.length 
    ? destinationActivities.afternoon[day - 1] 
    : getRandomItem(templates.afternoon);
  
  const eveningActivity = destinationActivities?.evening && day <= destinationActivities.evening.length 
    ? destinationActivities.evening[day - 1] 
    : getRandomItem(templates.evening);
  
  return {
    day,
    activities: {
      morning: morningActivity,
      afternoon: afternoonActivity,
      evening: eveningActivity
    },
    accommodation: getRandomItem(templates.accommodation),
    transportation: getRandomItem(templates.transportation)
  };
};