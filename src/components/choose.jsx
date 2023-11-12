import React from 'react';
import { Icon } from '@iconify/react';

function WhyChooseUs() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Left Column */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Our commitment to providing the best car rental experience.
                    </p>
                    <a
                        href="#book-now"
                        className="bg-orange text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-primary-dark transition duration-300 ease-in-out"
                    >
                        Book Now
                    </a>
                </div>

                {/* Right Column */}
                <div className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-1 gap-8">
                    {/* Reason 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                        <div className="bg-primary text-white rounded-full p-3 mr-4">
                            <Icon icon="ph:gear-fill" color="black" width="75" height="75" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Reliability
                            </h3>
                            <p className="text-gray-600">
                                Our vehicles are well-maintained and reliable for your journey.
                            </p>
                        </div>
                    </div>

                    {/* Reason 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                        <div className="bg-primary text-white rounded-full p-3 mr-4">

                            <Icon icon="tabler:coin-filled" color="black" width="75" height="75" />

                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Affordability
                            </h3>
                            <p className="text-gray-600">
                                Competitive prices that won't break the bank.
                            </p>
                        </div>
                    </div>

                    {/* Reason 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                        <div className="bg-primary rounded-full p-3 mr-4">
                            <Icon icon="iconamoon:shield-yes" color="black" width="75" height="75" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Trustworthiness
                            </h3>
                            <p className="text-gray-600">
                                Our reputation is built on trust and exceptional service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
