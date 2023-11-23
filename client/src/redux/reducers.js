
import { combineReducers } from 'redux';
import userReducer from './userReducer'
import authReducer from './authReducer';
import reservationReducer from './reservationReducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  reservation: reservationReducer
});

export default rootReducer;