import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utilis/queries';
import { loginSuccess, loginFailure } from '../../redux/authActions';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/nobg_logo.png';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginError = useSelector((state) => state.auth.error);

    const [loginUser] = useMutation(LOGIN_USER);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await loginUser({
                variables: { username: formData.username, password: formData.password },
            });

            if (data && data.login && data.login.token && data.login.userId) {
                const token = data.login.token;
                const userId = data.login.userId;
                dispatch(loginSuccess(token, userId));
                console.log('Login successful: userId=' + userId);
                
            }
        } catch (error) {
            console.error('Login failed:', error);
            dispatch(loginFailure(error.message));
        }
    };



    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="flex justify-center">
                    <img src={logo} alt="Logo" className="h-40 w-auto" />
                </div>
                <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Sign in to your account</h2>
                    {loginError && <p className="text-red-500 mb-4">Error: {loginError}</p>}
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
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <p className="text-center mt-4"><a href="/register" className="text-blue-600">Don't have an account?</a></p>
        </div>
    );
};

export default LoginForm;
