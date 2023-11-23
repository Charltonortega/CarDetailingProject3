// ProfileDashboard.js

import React from 'react';
import { useSelector } from 'react-redux';

const ProfileDashboard = () => {
    const user = useSelector((state) => state.user);

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-600 p-4 text-white">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-semibold">
                        {user ? `${user.name}'s Profile Dashboard` : 'Loading...'}
                    </h1>

                </div>
            </header>
            <main className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Profile Info */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Profile Information</h2>
                        <p>Name: John Doe</p>
                        <p>Email: johndoe@example.com</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                            Edit Profile
                        </button>
                    </div>

                    {/* Booking Management */}
                    <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Booking Management</h2>
                        <table className="w-full mt-4">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2023-11-25</td>
                                    <td>New York</td>
                                    <td>Confirmed</td>
                                    <td>
                                        <button className="text-blue-500 hover:underline">View</button>
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfileDashboard;
