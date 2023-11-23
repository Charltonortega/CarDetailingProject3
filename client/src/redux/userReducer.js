import { USER_REGISTERED } from './userActions';

const initialState = {
  isRegistered: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTERED:
      return {
        ...state,
        isRegistered: action.payload,
        
      };
    default:
      return state;
  }
};

export default userReducer;