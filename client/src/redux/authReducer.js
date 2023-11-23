import { LOGIN_SUCCESS } from './authActions';

const initialState = {
  user: {
    userId: null,
    // other user-related properties
  },
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          userId: action.payload.userId,
        },
        error: null,
      };
    // Handle other action types if necessary
    default:
      return state;
  }
};

export default authReducer;
