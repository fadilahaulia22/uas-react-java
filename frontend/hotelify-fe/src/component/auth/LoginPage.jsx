import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import ApiService from "../../service/ApiService";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

  const from = location.state?.from?.pathname || '/home';


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields.');
            setTimeout(() => setError(''), 5000);
            return;
        }

        try {
            const response = await ApiService.loginUser({email, password});
            if (response.statusCode === 200) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('role', response.role);
                navigate(from, { replace: true });
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-100">
            <div className="w-full max-w-md">
                            {error && <p className="text-red-500 text-center">{error}</p>}
                            <div 
                    className="bg-white shadow-md rounded-lg p-8 space-y-6 transition-transform duration-300 ease-in-out 
                    transform hover:scale-105 hover:shadow-xl hover:bg-pink-50"
                >
                    <h2 className="text-2xl font-bold text-pink-600 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                    <label className="block text-pink-600 font-semibold">Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-pink-600 font-semibold">Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400"

                    />
                </div>
                <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">Login</button>
            </form>

            <p className="text-center text-pink-600">
                Don't have an account? <a href="/register" className="text-pink-500 hover:text-pink-700 font-semibold">Register</a>
            </p>
            </div>
            </div>
        </div>
    );
}

export default LoginPage;