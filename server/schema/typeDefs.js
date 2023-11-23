const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    isAdmin: Boolean!
    userId: String!
    token: String!
    createdAt: String!
    updatedAt: String!
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }

  input UpdateUserInput {
    username: String
    email: String
    password: String
  }

  type Vehicle {
    _id: ID!
    model: String!
    make: String!
    year: Int!
    transmissionType: String!
    fuelType: String!
    createdAt: String!
    updatedAt: String!
  }

  input CreateVehicleInput {
    model: String!
    make: String!
    year: Int!
    transmissionType: String!
    fuelType: String!
  }

  input UpdateVehicleInput {
    model: String
    make: String
    year: Int
    transmissionType: String
    fuelType: String
  }

  type Reservation {
    _id: ID!
    user: User!        
    vehicle: Vehicle!  
    pickupDate: String!
    dropOffDate: String!
    createdAt: String!
    updatedAt: String!
  }

  createReservation(input: CreateReservationInput!): Reservation!
}

input CreateReservationInput {
  vehicleId: ID!
  pickupDate: Date!
  dropOffDate: Date!
}
  
  input UpdateReservationInput {
    pickupDate: String
    dropOffDate: String
  }
  
  
  type Query {
    users: [User!]!
    user(_id: ID!): User
    vehicles: [Vehicle!]!
    vehicle(_id: ID!): Vehicle
    reservations: [Reservation!]!
    reservation(_id: ID!): Reservation
  }

  type Mutation {
    register(input: CreateUserInput!): User!
    login(username: String!, password: String!): User!
    updateUser(_id: ID!, input: UpdateUserInput!): User!
    deleteUser(_id: ID!): User!

    createVehicle(input: CreateVehicleInput!): Vehicle!
    updateVehicle(_id: ID!, input: UpdateVehicleInput!): Vehicle!
    deleteVehicle(_id: ID!): Vehicle!

    createReservation(input: CreateReservationInput!): Reservation!
    updateReservation(_id: ID!, input: UpdateReservationInput!): Reservation!
    deleteReservation(_id: ID!): Reservation!

  }
`;


module.exports = typeDefs