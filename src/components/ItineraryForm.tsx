import React, { useState } from 'react';
import { TripPreferences, TripDuration, TripBudget } from '../types';
import { allDestinations, interests } from '../data/destinations';

interface ItineraryFormProps {
  onSubmit: (preferences: TripPreferences) => void;
  isLoading: boolean;
  preselectedDestination?: string;
}

const ItineraryForm: React.FC<ItineraryFormProps> = ({ 
  onSubmit, 
  isLoading,
  preselectedDestination = ''
}) => {
  const [destination, setDestination] = useState(preselectedDestination);
  const [duration, setDuration] = useState<TripDuration>(5);
  const [budget, setBudget] = useState<TripBudget>('mid-range');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleInterestToggle = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      if (selectedInterests.length < 5) {
        setSelectedInterests([...selectedInterests, interest]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      destination,
      duration,
      budget,
      interests: selectedInterests
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">
          Destination
        </label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          required
        >
          <option value="" disabled>Select a destination</option>
          {allDestinations.map((dest) => (
            <option key={dest.id} value={dest.name}>
              {dest.name}, {dest.state}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="duration" className="block text-gray-700 font-medium mb-2">
          Trip Duration (Days)
        </label>
        <select
          id="duration"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value) as TripDuration)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        >
          <option value={3}>3 Days</option>
          <option value={5}>5 Days</option>
          <option value={7}>7 Days</option>
          <option value={10}>10 Days</option>
          <option value={14}>14 Days</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Budget</label>
        <div className="grid grid-cols-3 gap-3">
          {['budget', 'mid-range', 'luxury'].map((b) => (
            <button
              key={b}
              type="button"
              className={`px-4 py-2 border rounded-lg ${
                budget === b
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setBudget(b as TripBudget)}
            >
              {b.charAt(0).toUpperCase() + b.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Interests (Select up to 5)
        </label>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <button
              key={interest}
              type="button"
              className={`px-3 py-1 rounded-full text-sm ${
                selectedInterests.includes(interest)
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleInterestToggle(interest)}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || !destination || selectedInterests.length === 0}
        className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Generating Itinerary...
          </div>
        ) : (
          'Generate AI Itinerary'
        )}
      </button>
    </form>
  );
};

export default ItineraryForm;