import React from 'react';

const VehicleList = ({ vehicles }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {vehicles.map(vehicle => (
                <div key={vehicle.id} className="border rounded shadow-lg overflow-hidden">
                    <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                        <p>{vehicle.description}</p>
                        <div className="mt-2">
                            <span className="text-sm font-semibold">Price:</span>
                            <span className="text-sm">${vehicle.pricePerDay} / day</span>
                        </div>
                        <button className="mt-4 bg-red-600 text-white p-2 rounded hover:bg-red-700">
                            Reserve Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VehicleList;