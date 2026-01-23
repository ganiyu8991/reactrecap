

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import userStore from '../Store/userStore';
import Loader from './loader';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const {login} = userStore()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await login(email, password)
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
        } finally{
            setLoading(false)
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-900 text-white px-4">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
                <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">Join the Secret</h2>
                {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition"
                            required
                        />
                    </div>
                    {loading ? <Loader/> : (
                        <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-[1.02]"
                    >
                        Login
                    </button>

                    )}
                    
                </form>
                <p className="mt-4 text-center text-gray-400">
                  Don't have an account yet? <Link to="/signUp" className="text-purple-400 hover:underline">Signup</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;