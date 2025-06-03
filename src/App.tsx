import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import ItineraryPlanner from './components/ItineraryPlanner';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [selectedDestination, setSelectedDestination] = useState('');

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations onSelectDestination={setSelectedDestination} />
      <ItineraryPlanner preselectedDestination={selectedDestination} />
      <About />
      <Footer />
    </div>
  );
}

export default App;