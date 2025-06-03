import React, { useState } from 'react';
import ItineraryForm from './ItineraryForm';
import ItineraryDisplay from './ItineraryDisplay';
import { Itinerary, TripPreferences } from '../types';
import { generateItinerary } from '../utils/itineraryGenerator';
import { MapPin, Calendar, Wallet, Tag } from 'lucide-react';

interface ItineraryPlannerProps {
  preselectedDestination?: string;
}

const ItineraryPlanner: React.FC<ItineraryPlannerProps> = ({ preselectedDestination = '' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);

  const handleSubmit = async (preferences: TripPreferences) => {
    setIsLoading(true);
    try {
      const generatedItinerary = await generateItinerary(preferences);
      setItinerary(generatedItinerary);
    } catch (error) {
      console.error('Error generating itinerary:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setItinerary(null);
  };

  return (
    <section id="itinerary" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Perfect India Trip</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI travel planner creates personalized itineraries based on your preferences. Just tell us where you want to go and what you like.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!itinerary ? (
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-orange-800">How It Works</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-3">
                        <MapPin className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Choose Destination</h4>
                        <p className="text-sm text-gray-600">Select from popular Indian destinations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-3">
                        <Calendar className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Set Duration</h4>
                        <p className="text-sm text-gray-600">Choose how many days for your trip</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-3">
                        <Wallet className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Select Budget</h4>
                        <p className="text-sm text-gray-600">Choose budget, mid-range, or luxury</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full mr-3">
                        <Tag className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Add Interests</h4>
                        <p className="text-sm text-gray-600">Tell us what you enjoy doing while traveling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3">
                <ItineraryForm 
                  onSubmit={handleSubmit} 
                  isLoading={isLoading} 
                  preselectedDestination={preselectedDestination}
                />
              </div>
            </div>
          ) : (
            <ItineraryDisplay itinerary={itinerary} onReset={handleReset} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ItineraryPlanner;