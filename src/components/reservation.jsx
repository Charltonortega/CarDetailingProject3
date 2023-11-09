import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { FaCar, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const carOptions = [
    { value: 'car1', label: 'Car 1' },
    { value: 'car2', label: 'Car 2' },
    { value: 'car3', label: 'Car 3' },
    // Add more car options as needed
];

function Reservation() {
    const [car, setCar] = useState(null);
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropOffLocation, setDropOffLocation] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleCarChange = (selectedOption) => {
        setCar(selectedOption);
    };

    const handleSubmit = () => {
        // Handle form submission here
        // You can access selected car, pickupLocation, dropOffLocation, startDate, and endDate here
    };

    return (
        <div className="container mx-auto py-12">
            <h2 className="text-2xl font-semibold mb-6">Make a Car Reservation</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">
                        <FaCar className="inline-block mr-2" />
                        Select Car:
                    </label>
                    <Select
                        options={carOptions}
                        value={car}
                        onChange={handleCarChange}
                        placeholder="Select a car..."
                        className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-teal-400"
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">
                        <FaMapMarkerAlt className="inline-block mr-2" />
                        Pickup Location:
                    </label>
                    <input
                        type="text"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-teal-400"
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">
                        <FaMapMarkerAlt className="inline-block mr-2" />
                        Drop-off Location:
                    </label>
                    <input
                        type="text"
                        value={dropOffLocation}
                        onChange={(e) => setDropOffLocation(e.target.value)}
                        className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-teal-400"
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">
                        <FaCalendarAlt className="inline-block mr-2" />
                        Pickup Date:
                    </label>
                    <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                        dateFormat="MM/dd/yyyy"
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-teal-400"
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">
                        <FaCalendarAlt className="inline-block mr-2" />
                        Drop-off Date:
                    </label>
                    <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                        dateFormat="MM/dd/yyyy"
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-teal-400"
                    />
                </div>
            </div>

            <button
                onClick={handleSubmit}
                className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-400"
            >
                Submit Reservation
            </button>
        </div>
    );
}

export default Reservation;
