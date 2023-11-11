import React from 'react';

function choose() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                    Why Choose Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Reason 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Quality Vehicles
                        </h3>
                        <p className="text-gray-600">
                            We offer a wide range of high-quality vehicles to suit your needs.
                        </p>
                    </div>

                    {/* Reason 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Competitive Prices
                        </h3>
                        <p className="text-gray-600">
                            Our rental rates are affordable and competitive in the market.
                        </p>
                    </div>

                    {/* Reason 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Excellent Service
                        </h3>
                        <p className="text-gray-600">
                            Our dedicated team is here to provide you with the best service.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default choose;
