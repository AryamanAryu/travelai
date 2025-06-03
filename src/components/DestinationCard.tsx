import React from 'react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onClick: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onClick }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={destination.imageUrl} 
          alt={destination.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
        <p className="text-sm text-gray-200 mb-2">{destination.state}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {destination.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-white/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-sm line-clamp-2 text-gray-200">{destination.description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;