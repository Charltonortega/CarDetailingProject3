
export const USER_REGISTERED = 'USER_REGISTERED';


export const userRegistered = (isRegistered) => {
  return {
    type: USER_REGISTERED,
    payload: isRegistered,
  };
};