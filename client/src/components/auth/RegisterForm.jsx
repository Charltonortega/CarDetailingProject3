import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../utilis/queries';
import { registerSuccess, registerFailure } from '../../redux/authActions';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/nobg_logo.png';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [registerUser] = useMutation(REGISTER_USER);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await registerUser({
                variables: { input: formData },
            });

            if (data && data.register) {
                dispatch(registerSuccess());
                console.log('Registration successful');
                navigate('/login');
            }
        } catch (error) {
            console.error('Registration failed:', error);
            dispatch(registerFailure(error.message));
        }
    };

    const registrationError = useSelector((state) => state.auth.error);


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">

                <div className="flex justify-center">
                    <img src={logo} alt="Logo" className="h-40 w-auto" />
                </div>

                <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Create an Account</h2>
                    {registrationError && <p className="text-red-500 mb-4">Error: {registrationError}</p>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="text-sm font-medium text-gray-700 block">Username:</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                onChange={handleChange}
                                value={formData.username}
                                required
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 block">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                value={formData.email}
                                required
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-700 block">Password:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                value={formData.password}
                                required
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <p className="text-center mt-4"><a href="/login" className="text-blue-600">Already have an account? Login here</a></p>
        </div>
    );
};

export default RegistrationForm;