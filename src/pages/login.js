// pages/Login.js
import React, { useEffect, useState } from 'react';
import URL from "../config/url.json";

const Login = () => {
  const [role, setRole] = useState("host");

  const handleLogin = async () => {
    const res = await fetch(URL?.baseUrl + '/auth/google/url');
    const { url } = await res.json();
    // Append role in state if needed on backend
    window.location.href = `${url}&state=${role}`;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const email = params.get('email');
    if (token && email) {
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      window.location.href = '/dashboard';
    }
  }, []);

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to right, #667eea, #764ba2)',
      fontFamily: 'sans-serif',
      color: '#fff'
    }}>
      <div style={{
        backgroundColor: '#ffffff20',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(8px)',
        minWidth: '300px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>Login to Jam Player</h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px' }}>
            <input
              type="radio"
              name="role"
              value="host"
              checked={role === 'host'}
              onChange={() => setRole('host')}
              style={{ marginRight: '5px' }}
            />
            Host
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="client"
              checked={role === 'client'}
              onChange={() => setRole('client')}
              style={{ marginRight: '5px' }}
            />
            Client
          </label>
        </div>

        <button
          onClick={handleLogin}
          style={{
            backgroundColor: '#fff',
            color: '#333',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
