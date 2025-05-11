import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios'; // use your axiosInstance
import '../styles/styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('/auth/login', { email, password });

      // Save token in localStorage
      localStorage.setItem('token', res.data.token);

      // Optional: Show a message or update auth state
      console.log('Login successful!');
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      alert('Login failed! Check your credentials.');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
