import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      console.log('Logged in:', res.data);
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/profile');
      
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 flex items-center justify-center p-4'>
      <div className='relative w-full max-w-md'>
        <div className="relative z-10">
            {/* Header */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-green-200/50 p-8 relative overflow-hidden">
      <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600">
                Sign in to your account
              </p>
            </div>
      <form onSubmit={handleLogin}>
        <div className='space-y-3'>
          <div className="raltive">
        <input className="w-full pl-12 pr-12 py-3 bg-white/70 border border-green-300/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div className="relative">
        <input className="w-full pl-12 pr-12 py-3 bg-white/70 border border-green-300/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm" cd value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
        </div>
        <div className="relative">
        <button className="w-full py-3 bg-gradient-to-r from-green-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 transform hover:scale-105"
 type="submit">Login</button>
        </div>
        </div>
      </form>
      </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
