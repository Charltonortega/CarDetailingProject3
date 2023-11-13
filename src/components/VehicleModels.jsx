import React, { useState } from 'react';
import vehicleData from '../data/vehicleData';

function VehicleModels() {
    const [selectedModel, setSelectedModel] = useState(vehicleData[0]);

    return (
        <div className="container mx-auto px-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold my-6">Vehicle Models</h1>
                <p className="mb-6">Our rental fleet - Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.</p>
            </div>

            <div className="flex flex-wrap -mx-4 items-center justify-center">
                {/* List of vehicle models */}
                <div className="w-full md:w-1/3 px-4 mb-6">
                    <div className="shadow-lg rounded-lg p-6">
                        {vehicleData.map((vehicle) => (
                            <button
                                key={vehicle.id}
                                className={`block w-full p-2 font-bold text-center capotalize  ${selectedModel.id === vehicle.id
                                    ? 'bg-red-600 text-white rounded-lg'
                                    : 'hover:bg-red-600 hover:text-white rounded-lg '
                                    } transition duration-300 mb-2`}
                                onClick={() => setSelectedModel(vehicle)}
                            >
                                {vehicle.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Car image */}
                <div className="w-full md:w-1/3 px-4 mb-6">
                    <div className="CarCover">
                        <img
                            src={`/images/${selectedModel.image}`}
                            alt={selectedModel.name}
                            className="rounded-lg mx-auto w-full h-auto max-w-lg" // Increase the max width here
                        />
                    </div>
                </div>

                {/* Vehicle details */}
                <div className="w-full md:w-1/3 px-4 mb-4">
                    <div className="shadow-lg rounded-lg p-6 bg-gray-100 text-center">
                        <h3 className="text-lg font-bold mb-">{selectedModel.name}</h3>
                        <table className="table-auto w-full text-left mb-2">
                            <tbody>
                                <tr>
                                    <td className="font-semibold pr-2 text-center">Model:</td>
                                    <td>{selectedModel.model}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-2 text-center">Make:</td>
                                    <td>{selectedModel.make}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-2 text-center">Year:</td>
                                    <td>{selectedModel.year}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-2 text-center">Transmission:</td>
                                    <td>{selectedModel.transmission}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold pr-2 text-center">Fuel:</td>
                                    <td>{selectedModel.fuel}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="w-full bg-red-600 text-white rounded-lg p-4 uppercase font-bold hover:bg-red-700 mt-4">Reserve now</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default VehicleModels;
