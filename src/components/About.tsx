import React from 'react';
import { LineChart, Brain, Trophy, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About BharatBrahma</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we're using artificial intelligence to transform the way you plan your travels in India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Choose BharatBrahma?</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Brain className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">AI-Powered Personalization</h4>
                  <p className="text-gray-600">
                    Our advanced AI understands your preferences and creates tailor-made itineraries that match your interests, budget, and travel style.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <LineChart className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Local Expertise</h4>
                  <p className="text-gray-600">
                    Our system is trained on thousands of real travel experiences and local knowledge to provide authentic and meaningful recommendations.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Trophy className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Time-Saving</h4>
                  <p className="text-gray-600">
                    Create comprehensive travel plans in seconds instead of spending hours researching and planning your trip to India.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Sustainable Tourism</h4>
                  <p className="text-gray-600">
                    We promote responsible travel by recommending sustainable options and supporting local communities throughout India.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Indian travel experience" 
                className="w-full h-auto" 
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-gray-700 italic text-sm">
                "BharatBrahma helped me discover hidden gems in Kerala that I never would have found on my own. The personalized itinerary was perfect!"
              </p>
              <p className="text-right text-orange-600 font-medium mt-2">— Sarah T.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;