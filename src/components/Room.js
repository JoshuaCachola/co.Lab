import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import socket from '../websocket';

const Room = ({ history }) => {
  const currentUser = useSelector(state => state.authentication.user);
  const [message, setMessage] = useState({});
  const handleLeaveRoom = () => {
    console.log(currentUser);
    socket.emit('leave', {
      'username': 'cacholaj',
      'room': 'cacholaj'
    });
    history.push('/');
  };

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      socket.emit('join', {
        'username': 'cacholaj',
        'room': 'cacholaj'
      })
    }
  }, [currentUser]);

  return (
    <>
      <h1>{message.msg}</h1>
      <button onClick={handleLeaveRoom}>Leave Room</button>
    </>
  )
};

export default Room;
