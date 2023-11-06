import React from 'react';

function Pricing() {
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Pricing Cards */}
                {/* Example Pricing Card */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Supreme Detailing</h3>
                    <p className="text-gray-600">Our premium detailing service to make your car shine.</p>
                    <p className="text-2xl font-semibold text-gray-800 mt-4">$299</p>
                    <div className="mt-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Book Now</button>
                    </div>
                </div>
                {/* Add more pricing cards here */}
            </div>
        </div>
    );
}

export default Pricing;
