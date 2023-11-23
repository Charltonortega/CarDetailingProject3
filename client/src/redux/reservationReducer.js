import {
  CREATE_RESERVATION_SUCCESS,
  CREATE_RESERVATION_FAILURE,
  FETCH_RESERVATIONS_SUCCESS,
  FETCH_RESERVATIONS_FAILURE,

} from './reservationActions';


const initialState = {
  reservations: [],
  error: null,
  loading: false,
  
};


const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
      case CREATE_RESERVATION_SUCCESS:
          return {
              ...state,
              reservations: [...state.reservations, action.payload],
              error: null,
          };
      case CREATE_RESERVATION_FAILURE:
          return {
              ...state,
              error: action.payload,
          };
      case FETCH_RESERVATIONS_SUCCESS:
          return {
              ...state,
              reservations: action.payload,
              error: null,
          };
      case FETCH_RESERVATIONS_FAILURE:
          return {
              ...state,
              error: action.payload,
          };
      default:
          return state;
  }
};

export default reservationReducer;
