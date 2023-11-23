const mongoose = require('mongoose');
const Vehicle = require('../models/Vehicle');

mongoose.connect('mongodb://127.0.0.1:27017/car-rental-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// pre seed data
const vehiclesData = [
  {
    model: 'Volkswagen Golf',
    make: 'Golf R',
    year: 2022,
    transmissionType: 'Automatic DSG',
    fuelType: 'Gasoline',
  },
  {
    model: 'Honda Civic',
    make: 'Civic',
    year: 2023,
    transmissionType: 'Automatic CVT', 
    fuelType: 'Gasoline',
  },
  {
    model: 'Toyota Corolla',
    make: 'Corolla',
    year: 2022,
    transmissionType: 'Automatic',
    fuelType: 'Gasoline',
  },
  {
    model: 'Tesla Model 3',
    make: 'Model 3',
    year: 2022,
    transmissionType: 'Electric',
    fuelType: 'Electricity',
  },
  {
    model: 'Mazda CX-5',
    make: 'CX-5',
    year: 2022,
    transmissionType: 'Automatic',
    fuelType: 'Gasoline',
  },
  {
    model: 'Mercedes-Benz C-Class',
    make: 'C-Class',
    year: 2022,
    transmissionType: 'Automatic',
    fuelType: 'Gasoline',
  }
  
];

const seedVehicles = async () => {
  try {

    for (const vehicleData of vehiclesData) {
      const vehicle = new Vehicle(vehicleData);
      await vehicle.save();
      console.log(`Vehicle saved: ${vehicle.model}`);
    }
    console.log('Seed data completed.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {

    mongoose.disconnect();
  }
};


seedVehicles();
