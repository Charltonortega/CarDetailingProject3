import React, { useState } from 'react';
import vehicleData from '../data/vehicleData';

function VehicleModels() {
    const [selectedModel, setSelectedModel] = useState(vehicleData[0]);

    return (
        <section id="vehicleSelection" className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold my-6">Vehicle Models</h1>
                    <p className="mb-6">Our rental fleet - Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.</p>
                </div>

                <div className="flex flex-wrap -mx-4 items-center">
                    {/* List of vehicle models */}
                    <div className="w-full md:w-1/3 px-4 mb-6">
                        <div className="shadow-lg rounded-lg p-6">
                            {vehicleData.map((vehicle) => (
                                <button
                                    key={vehicle.id}
                                    className={`block w-full p-2 my-2 text-center capitalize transition duration-300 font-bold rounded-lg ${selectedModel.id === vehicle.id
                                        ? 'bg-red-600 text-white'
                                        : 'bg-white text-gray-800 hover:bg-red-600 hover:text-white'
                                        }`}
                                    onClick={() => setSelectedModel(vehicle)}
                                >
                                    {vehicle.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Car image */}
                    <div className="w-full md:w-1/3 px-4 mb-6">
                        <img
                            src={selectedModel.image}
                            alt={selectedModel.name}
                            className="rounded-lg mx-auto w-full h-auto max-w-xs md:max-w-sm" // Control image size here
                        />
                    </div>

                    {/* Vehicle details */}
                    <div className="w-full md:w-1/3 px-4 mb-6 align">
                        <div className="shadow-lg rounded-lg p-6 bg-white text-center">
                            <h3 className="text-lg font-bold mb-2">{selectedModel.name}</h3>
                            <table className="table-auto w-full text-sm mb-4">
                                <tbody>
                                    <tr>
                                        <td className="font-semibold pr-2">Model:</td>
                                        <td>{selectedModel.model}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold pr-2">Make:</td>
                                        <td>{selectedModel.make}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold pr-2">Year:</td>
                                        <td>{selectedModel.year}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold pr-2">Transmission:</td>
                                        <td>{selectedModel.transmission}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold pr-2">Fuel:</td>
                                        <td>{selectedModel.fuel}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="w-full bg-red-600 text-white rounded-lg py-2 uppercase font-bold hover:bg-red-700 transition duration-300">Reserve now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VehicleModels;
