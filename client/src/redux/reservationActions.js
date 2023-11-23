export const CREATE_RESERVATION_SUCCESS = 'CREATE_RESERVATION_SUCCESS';
export const CREATE_RESERVATION_FAILURE = 'CREATE_RESERVATION_FAILURE';
export const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS';
export const FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE';

export const createReservationSuccess = (reservation) => ({
    type: CREATE_RESERVATION_SUCCESS,
    payload: reservation,
});

export const createReservationFailure = (error) => ({
    type: CREATE_RESERVATION_FAILURE,
    payload: error,
});

export const fetchReservationsSuccess = (reservations) => ({
    type: FETCH_RESERVATIONS_SUCCESS,
    payload: reservations,
});

export const fetchReservationsFailure = (error) => ({
    type: FETCH_RESERVATIONS_FAILURE,
    payload: error,
});


