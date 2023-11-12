import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Reservation from './components/reservation';
import VehicleModel from './components/VehicleModels';
import Choose from './components/choose';
import Reviews from './components/ReviewSection';


function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Reservation />
      <VehicleModel />
      <Choose />
      <Reviews />

    </div>
  );
}

export default App;