import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { CREATE_RESERVATION, GET_VEHICLES } from '../utilis/queries';
import { createReservationSuccess, createReservationFailure } from '../redux/reservationActions';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        vehicleId: '',
        pickupDate: '',
        dropOffDate: '',
    });

    const dispatch = useDispatch();

    // Access userId from the Redux store using useSelector
    const userId = useSelector((state) => state.auth.user.userId);
    console.log('userId from Redux:', userId);

    const [createReservation] = useMutation(CREATE_RESERVATION);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleReserve = async (e) => {
        e.preventDefault();

        try {
            const reservationInput = {
                userId: userId,
                vehicleId: formData.vehicleId,
                pickupDate: formData.pickupDate,
                dropOffDate: formData.dropOffDate,
            };

            const { data } = await createReservation({
                variables: {
                    input: reservationInput,
                },
            });

            if (data.createReservation) {
                dispatch(createReservationSuccess(data.createReservation));
                console.log('Reservation created successfully');
            } else {
                dispatch(createReservationFailure('Failed to create reservation'));
                console.error('Failed to create reservation');
            }
        } catch (error) {
            dispatch(createReservationFailure(error.message));
            console.error('Error creating reservation', error);
        }
    };

    const { loading, error, data } = useQuery(GET_VEHICLES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading vehicles</p>;

    const { vehicles } = data;
    return (
        <div className="bg-white p-6 rounded-md shadow-md mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Reservation Form</h2>
            <form onSubmit={handleReserve} className="flex flex-col gap-4">
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label htmlFor="vehicleId" className="block text-gray-700 font-bold">
                            Select a Vehicle:
                        </label>
                        <select
                            name="vehicleId"
                            id="vehicleId"
                            onChange={handleChange}
                            value={formData.vehicleId}
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 border-gray-300"
                        >
                            {vehicles.map((vehicle) => (
                                <option key={vehicle._id} value={vehicle._id}>
                                    {vehicle.model}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className="flex-1">
                        <label htmlFor="pickupDate" className="block text-gray-700 font-bold">
                            Pickup Date:
                        </label>
                        <input
                            type="date"
                            name="pickupDate"
                            id="pickupDate"
                            onChange={handleChange}
                            value={formData.pickupDate}
                            required
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 border-gray-300"
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="dropOffDate" className="block text-gray-700 font-bold">
                            Drop Off Date:
                        </label>
                        <input
                            type="date"
                            name="dropOffDate"
                            id="dropOffDate"
                            onChange={handleChange}
                            value={formData.dropOffDate}
                            required
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 border-gray-300"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md self-center"
                >
                    Reserve Now
                </button>
            </form>
        </div>
    );
};

export default ReservationForm;
