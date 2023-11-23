import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import carIcon from '@iconify/icons-ic/baseline-directions-car';
import calendarIcon from '@iconify/icons-ic/baseline-event-note';
import thumbUpIcon from '@iconify/icons-ic/baseline-thumb-up';

import ReviewsSection from '../components/reviews/ReviewSection';
import VehicleModels from '../components/VehicleModels';
import ReservationForm from '../components/ReservationForm';
import FAQ from '../components/FAQ';




const HomePage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-blue-500 text-white text-center py-20">
                <h1 className="text-4xl font-bold">Find the Perfect Rental Car for Your Next Journey</h1>


                <p className="mt-4 mb-8">Explore our wide range of vehicles and convenient rental options.</p>
                <Link to="/vehiclesmodel" className="bg-white text-blue-500 py-2 px-6 rounded hover:bg-gray-100">Browse Cars</Link>
            </section>

            <ReservationForm />

            {/* How It Works Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* Step 1: Choose a Car */}
                        <div>
                            <Icon icon={carIcon} className="text-red-500 mx-auto text-5xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Choose a Car</h3>
                            <p>Select from a variety of models to suit your needs.</p>
                        </div>

                        {/* Step 2: Pick a Date */}
                        <div>
                            <Icon icon={calendarIcon} className="text-green-500 mx-auto text-5xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Pick a Date</h3>
                            <p>Choose your rental dates for pickup and return.</p>
                        </div>

                        {/* Step 3: Enjoy Your Ride */}
                        <div>
                            <Icon icon={thumbUpIcon} className="text-blue-500 mx-auto text-5xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Enjoy Your Ride</h3>
                            <p>Experience a smooth ride with full customer support.</p>
                        </div>
                    </div>
                </div>
            </section>



            <VehicleModels />

            {/* Why Choose Us Section */}
            <section id="why-choose-us" className="bg-gray-200 py-16">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    {/* Left Column */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Why Choose Us
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Our commitment to providing the best car rental experience.
                        </p>
                        <a
                            href="about"
                            className="bg-red-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-primary-dark transition duration-300 ease-in-out"
                        >
                            Learn More
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
                                    Competitive prices that wont break the bank.
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

            <FAQ />

            <ReviewsSection />



        </div>
    );
};

export default HomePage;
