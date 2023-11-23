import React from 'react';


function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Section for CAR Rental */}
                <div>
                    <h2 className="text-xl font-bold mb-4">CAR Rental</h2>
                    <p className="mb-4">We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                    <p className="flex items-center mb-2">
                        <span className="mr-2"><i className="fas fa-phone-alt"></i></span>
                        (123) 456-789
                    </p>
                    <p className="flex items-center">
                        <span className="mr-2"><i className="fas fa-envelope"></i></span>
                        carrental@gmail.com
                    </p>

                </div>

                {/* Section for COMPANY */}
                <div>
                    <h2 className="text-xl font-bold mb-4">COMPANY</h2>
                    <ul>
                        <li className="mb-2">New York</li>
                        <li className="mb-2">Careers</li>
                        <li className="mb-2">Mobile</li>
                        <li className="mb-2">Blog</li>
                        <li>How we work</li>
                    </ul>
                </div>

                {/* Section for WORKING HOURS */}
                <div>
                    <h2 className="text-xl font-bold mb-4">WORKING HOURS</h2>
                    <p className="mb-2">Mon - Fri: 9:00AM - 9:00PM</p>
                    <p className="mb-2">Sat: 9:00AM - 19:00PM</p>
                    <p>Sun: Closed</p>
                </div>

                {/* Section for SUBSCRIPTION */}
                <div>
                    <h2 className="text-xl font-bold mb-4">SUBSCRIPTION</h2>
                    <p className="mb-4">Subscribe your Email address for latest news & updates.</p>
                    <div className="flex">
                        <input type="email" placeholder="Enter Email Address" className="p-2 rounded-l-lg flex-1" />
                        <button className="bg-red-500 text-white px-4 rounded-r-lg">Submit</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;