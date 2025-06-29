'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar/Navbar';
import './login.css';
import { redirect } from 'next/dist/server/api-utils';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/login', { email, password }, {"Content-Type": "application/json"});
      localStorage.setItem('token', data.token);
      redirect('/');
    } catch (err) {
      console.error('Login error:', err.response.data || err.message);
      setError('Invalid credentials');
    }
  };
  return (
    <div>
      <Navbar />
      <div className="login__container">
        <div className="login__card">
          <form onSubmit={handleSubmit}>
            <div className="login__input-group">
              <label htmlFor="emailInput">Email: </label>
              <input id="emailInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="login__input-group">
              <label htmlFor="passwordInput">Password:</label>
              <input id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <br />
            <button type="submit" id="loginButton">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}