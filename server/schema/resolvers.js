const User = require('../models/User');
const Vehicle = require('../models/Vehicle');
const Reservation = require('../models/Reservation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretToken = process.env.SECRET_TOKEN;

const resolvers = {
    Query: {
      users: async () => {
        try {
          const users = await User.find();
          return users;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      user: async (_, { _id }) => {
        try {
          const user = await User.findById(_id);
          return user;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      vehicles: async () => {
        try {
          const vehicles = await Vehicle.find();
          return vehicles;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      vehicle: async (_, { _id }) => {
        try {
          const vehicle = await Vehicle.findById(_id);
          return vehicle;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      reservations: async () => {
        try {
          const reservations = await Reservation.find();
          return reservations;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      reservation: async (_, { _id }) => {
        try {
          const reservation = await Reservation.findById(_id);
          return reservation;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    },
  
  Mutation: {
    register: async (_, { input }) => {
      const { username, email, password } = input;
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error('User with this email already exists.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
          username,
          email,
          password: hashedPassword,
        });

        const savedUser = await newUser.save();

        // Generate and return a token for the newly registered user
        const token = jwt.sign({ userId: savedUser._id }, secretToken, {
          expiresIn: '1h',
        });

        console.log('Registration successful for user:', savedUser.username);
        return { ...savedUser.toObject(), token }; // Include the token in the response
      } catch (error) {
        console.error('Registration failed:', error.message);
        throw new Error(error.message);
      }
    },

      login: async (_, { username, password }) => {
        try {
          const user = await User.findOne({ username });
          if (!user) {
            throw new Error('User not found.');
          }
    
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error('Invalid password.');
          }
    
          const token = jwt.sign({ userId: user._id }, secretToken, {
            expiresIn: '1h',
          });
    
          return { userId: user._id, token }; 
        } catch (error) {
          throw new Error(error.message);
        }
      },
    

      updateUser: async (_, { _id, input }) => {
        try {
          const updatedUser = await User.findByIdAndUpdate(_id, input, { new: true });
          if (!updatedUser) {
            throw new Error('User not found.');
          }

          return updatedUser;
        } catch (error) {
          throw new Error(error.message);
        }
      },

      deleteUser: async (_, { _id }) => {
        try {
          const deletedUser = await User.findByIdAndDelete(_id); // Use findByIdAndDelete instead of findByIdAndRemove
          if (!deletedUser) {
            throw new Error('User not found.');
          }
      
          return deletedUser;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      

      createVehicle: async (_, { input }) => {
        const { model, make, year, transmissionType, fuelType } = input;
        try {
          const newVehicle = new Vehicle({
            model,
            make,
            year,
            transmissionType,
            fuelType,
          });

          const savedVehicle = await newVehicle.save();
          return savedVehicle;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      updateVehicle: async (_, { _id, input }) => {
        try {
          const updatedVehicle = await Vehicle.findByIdAndUpdate(_id, input, { new: true });
          if (!updatedVehicle) {
            throw new Error('Vehicle not found.');
          }

          return updatedVehicle;
        } catch (error) {
          throw new Error(error.message);
        }
      },
     
      updateReservation: async (_, { _id, input }) => {
        try {
          const updatedReservation = await Reservation.findByIdAndUpdate(
            _id,
            input,
            { new: true }
          );
    
          if (!updatedReservation) {
            throw new Error('Reservation not found.');
          }
    
          return updatedReservation;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      deleteReservation: async (_, { _id }) => {
        try {
          const deletedReservation = await Reservation.findByIdAndDelete(_id);
    
          if (!deletedReservation) {
            throw new Error('Reservation not found.');
          }
    
          return deletedReservation;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    },
  };
  
  module.exports = resolvers;
