// pages/Room.js
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const socket = io('http://localhost:4000');

const Room = () => {
  const [joined, setJoined] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const roomIdFromStorage = localStorage.getItem('roomId');
    if (!roomIdFromStorage) {
      navigate('/dashboard');
      return;
    }
    setRoomId(roomIdFromStorage);

    socket.emit('join-room', roomIdFromStorage);
    setJoined(true);

    const hostConfirmation = window.confirm("Are you the host?");
    setIsHost(hostConfirmation);

    if (hostConfirmation) {
      fetch('http://localhost:4000/drive/videos')
        .then(res => res.json())
        .then(data => setVideos(data.files));
    }

    socket.on('video-selected', (videoUrl) => {
      setCurrentVideo(videoUrl);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleVideoSelect = async (fileId) => {
    const res = await fetch(`http://localhost:4000/video/stream/${fileId}`);
    const data = await res.json();
    const videoUrl = data.url;

    setCurrentVideo(videoUrl);
    socket.emit('video-selected', { roomId, videoUrl });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Room: {roomId}</h1>

      {isHost && (
        <>
          <h3>Select a video to play</h3>
          <ul>
            {videos.map((video) => (
              <li key={video.id}>
                <button onClick={() => handleVideoSelect(video.id)}>{video.name}</button>
              </li>
            ))}
          </ul>
        </>
      )}

      {currentVideo && (
        <div>
          <h3>Now Playing:</h3>
          <ReactPlayer url={currentVideo} controls playing width="100%" height="480px" />
        </div>
      )}
    </div>
  );
};

export default Room;
