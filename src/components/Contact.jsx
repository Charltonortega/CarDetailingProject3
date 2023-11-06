import React from 'react';

function Contact() {
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">Have questions or need assistance? Contact our team below:</p>
            <div className="mt-4">
                <form>
                    {/* Contact Form Fields */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Your Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    {/* Add more form fields here */}
                    <div className="mt-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
