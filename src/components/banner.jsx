import React from 'react';

function Banner() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat"

        >
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="font-extrabold sm:text-5xl text-black">
                        Plan Your Trip Now
                        <strong className="block font-extrabold text-black">
                            Your Journey Awaits
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-sm text-lg text-black">
                        {/* Experience the Ultimate Car Rental Adventure: Unlock Your Dream Ride at Unbeatable Prices with Unlimited Miles and Flexible Pickup Options. Discover a World of Possibilities on the Road to Your Next Adventure. */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="block w-full rounded bg-rose-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Book Now
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-gray-100 px-6 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
