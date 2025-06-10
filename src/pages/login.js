// pages/Login.js
import React, { useEffect } from 'react';

const Login = () => {
  const handleLogin = async () => {
    const res = await fetch('http://localhost:4000/auth/google/url');
    const { url } = await res.json();
    window.location.href = url + '&state=temp'; // You can update state with roomId if needed
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
    <div style={{ padding: 20 }}>
      <h2>Login with Google</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
