import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white py-4">
            <nav className="container mx-auto flex items-center justify-between">
                {/* Logo and navigation links */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img
                            src="../logo.png"
                            alt="Logo"
                            className="w-16 h-16"
                        />
                    </Link>

                    <div className="hidden md:flex">
                        <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2">Home</Link>
                        <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2">About</Link>

                        <Link to="/reviews" className="text-gray-600 hover:text-gray-900 px-3 py-2">Reviews</Link>
                        <Link to="/faq" className="text-gray-600 hover:text-gray-900 px-3 py-2">FAQ</Link>
                    </div>
                </div>

                {/* Search and user actions */}
                <div className="flex items-center">
                    <input type="text" placeholder="Search..." className="hidden sm:block form-input px-4 py-2 w-48 border rounded-full" />
                    <Link to="/login" className="text-gray-600 hover:text-gray-900 ml-4 px-3 py-2">Log in</Link>
                    <Link to="/register" className="ml-4 bg-black hover:bg-grey-700 text-white px-5 py-2 rounded-full">Sign up</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
