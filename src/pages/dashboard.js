// pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (!email) navigate('/');
  }, []);

  const handleContinue = () => {
    if (!roomId.trim()) return alert('Enter Room ID');
    localStorage.setItem('roomId', roomId);
    navigate('/room');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Enter Room ID</h2>
      <input value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Room ID" />
      <button onClick={handleContinue}>Join Room</button>
    </div>
  );
};

export default Dashboard;
