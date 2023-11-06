import React from "react";

function Home() {
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Supreme Auto Care</h2>
            <p className="text-gray-600">
                Your go-to destination for professional car detailing services. We take pride in making your vehicle look its
                best.
            </p>
            <div className="mt-6">
                <img
                    src="placeholder-image.jpg"
                    alt="Car Detailing"
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </div>
    );
}

export default Home;
