import React from 'react';

function Services() {
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Service Cards */}
                {/* Example Service Card */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Exterior Detailing</h3>
                    <p className="text-gray-600">Restore your car's shine with our exterior detailing service.</p>
                    <div className="mt-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Services;
