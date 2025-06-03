import React, { useState } from 'react';
import { Itinerary } from '../types';
import { Download, Share2 } from 'lucide-react';

interface ItineraryDisplayProps {
  itinerary: Itinerary;
  onReset: () => void;
}

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ itinerary, onReset }) => {
  const [activeDay, setActiveDay] = useState(1);

  const getShareText = () => {
    return `Check out my ${itinerary.duration}-day ${itinerary.budget} trip to ${itinerary.destination}, India! #TravelAI`;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `My ${itinerary.destination} Itinerary`,
        text: getShareText(),
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(getShareText())
        .then(() => alert('Share text copied to clipboard!'))
        .catch(console.error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-orange-600 text-white p-6">
        <h3 className="text-2xl font-bold mb-1">Your {itinerary.duration}-Day Trip to {itinerary.destination}</h3>
        <p className="text-orange-100">
          {itinerary.budget.charAt(0).toUpperCase() + itinerary.budget.slice(1)} budget • 
          {itinerary.interests.join(', ')}
        </p>
      </div>
      
      <div className="p-4 md:p-6">
        {/* Day selector */}
        <div className="flex overflow-x-auto space-x-2 pb-4 mb-4">
          {itinerary.days.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                activeDay === day.day
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Day {day.day}
            </button>
          ))}
        </div>
        
        {/* Active day details */}
        {itinerary.days.map((day) => (
          <div 
            key={day.day} 
            className={`transition-opacity duration-300 ${
              activeDay === day.day ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Day {day.day} Activities</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-medium text-orange-800 mb-2">Morning</h5>
                    <p className="text-gray-700">{day.activities.morning}</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-medium text-orange-800 mb-2">Afternoon</h5>
                    <p className="text-gray-700">{day.activities.afternoon}</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-medium text-orange-800 mb-2">Evening</h5>
                    <p className="text-gray-700">{day.activities.evening}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Accommodation</h5>
                  <p className="text-gray-700">{day.accommodation}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Transportation</h5>
                  <p className="text-gray-700">{day.transportation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-gray-600 text-sm">Estimated total cost</p>
              <p className="text-2xl font-bold text-gray-900">{itinerary.totalEstimatedCost}</p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
              <button
                onClick={onReset}
                className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Save PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDisplay;