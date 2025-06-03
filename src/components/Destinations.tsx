import React from 'react';
import DestinationCard from './DestinationCard';
import { popularDestinations } from '../data/destinations';

interface DestinationsProps {
  onSelectDestination: (destinationName: string) => void;
}

const Destinations: React.FC<DestinationsProps> = ({ onSelectDestination }) => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of India's most captivating destinations. Click on any destination to start planning your trip.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onClick={() => {
                onSelectDestination(destination.name);
                document.getElementById('itinerary')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;