import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-4xl font-bold">
                    <Link to="/">Supreme Auto Care</Link> {/* Use Link for navigation */}
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/services">Services</Link> {/* Use Link for navigation */}
                    </li>
                    <li>
                        <Link to="/about">About</Link> {/* Use Link for navigation */}
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link> {/* Use Link for navigation */}
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link> {/* Use Link for navigation */}
                    </li>
                    <li>
                        <Link to="/reviews">Reviews</Link> {/* Use Link for navigation */}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
