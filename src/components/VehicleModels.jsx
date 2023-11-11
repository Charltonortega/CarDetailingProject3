import React, { useState } from 'react';
import vehicleData from '../data/vehicleData';

function VehicleModels() {
    const [selectedModel, setSelectedModel] = useState(vehicleData[0]);

    return (
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="col-span-3 text-center mb-4">
                <h1 className="text-3xl font-semibold">Vehicle Models</h1>
                <p className="text-lg text-gray-600">
                    Our rental fleet - Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
                </p>
            </div>

            <div className="col-span-1 p-4">
                <h2 className="text-2xl font-semibold mb-4">Vehicle Selection</h2>
                <div className="space-y-2">
                    {vehicleData.map((vehicle) => (
                        <button
                            key={vehicle.id}
                            className={`w-full p-2 text-left hover:bg-gray-200 transition duration-300 ${selectedModel.id === vehicle.id ? 'font-semibold bg-gray-200' : ''
                                }`}
                            onClick={() => setSelectedModel(vehicle)}
                        >
                            {vehicle.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="col-span-1 p-4">
                <img
                    src={`/images/${selectedModel.image}`}
                    alt={selectedModel.name}
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>

            <div className="col-span-1 p-4">
                <h2 className="text-2xl font-semibold mb-4">Vehicle Details</h2>
                <table className="table-auto">
                    <tbody>
                        <tr>
                            <td className="font-semibold pr-4">Select:</td>
                            <td className="capitalize">{selectedModel.name}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold pr-4">Model:</td>
                            <td className="capitalize">{selectedModel.model}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold pr-4">Make:</td>
                            <td className="capitalize">{selectedModel.make}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold pr-4">Year:</td>
                            <td>{selectedModel.year}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold pr-4">Transmission:</td>
                            <td>{selectedModel.transmission}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold pr-4">Fuel:</td>
                            <td>{selectedModel.fuel}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VehicleModels;
