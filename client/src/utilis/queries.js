import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($input: CreateUserInput!) {
    register(input: $input) {
      _id
      username
      email
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      userId
      token
    }
  }
`;


export const GET_VEHICLES = gql`
  query GetVehicles {
    vehicles {
      _id
      model
      make
      year
      transmissionType
      fuelType
    }
  }
`;


export const GET_RESERVATIONS = gql`
  query {
    reservations {
      _id
      user {
        _id
        username
      }
      vehicle {
        _id
        model
      }
      pickupDate
      dropOffDate
    }
  }
`;

export const CREATE_RESERVATION = gql`
mutation CreateReservation($userId: ID!, $input: CreateReservationInput!) {
  createReservation(userId: $userId, input: $input) {
    _id
    user {
      _id
      username
    }
    vehicle {
      _id
      model
    }
    pickupDate
    dropOffDate
  }
}

`;
