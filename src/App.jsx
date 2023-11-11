import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Reservation from './components/reservation';
import VehicleModel from './components/VehicleModels';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Reservation />
      <VehicleModel />
    </div>
  );
}

export default App;