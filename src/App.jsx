import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Reservation from './components/reservation';
import VehicleModel from './components/VehicleModels';
import Choose from './components/choose';
import Review from './components/ReviewSection';
import FAQ from './components/faq';


function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Reservation />
      <VehicleModel />
      <Choose />
      <Review />
      <FAQ />

    </div>
  );
}

export default App;