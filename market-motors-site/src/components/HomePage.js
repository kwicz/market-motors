import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import FeaturedVehicles from './FeaturedVehicles';
import Resources from './Resources';
import Contact from './Contact';

function HomePage() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <FeaturedVehicles />
      <Resources />
      <Contact />
    </React.Fragment>
  );
}

export default HomePage;