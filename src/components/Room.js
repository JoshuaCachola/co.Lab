import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import socket from '../websocket';

const Room = ({ room, history }) => {
  const currentUser = useSelector(state => state.authorization.user);

  const handleLeaveRoom = () => {
    socket.emit('leave', {
      'username': currentUser.username,
      room
    });
    history.push('/');
  };

  useEffect(() => {
    if (currentUser) {
      socket.emit('join', {
        'username': currentUser.username,
        room
      })
    }
  }, [currentUser, room]);

  return (
    <>
      <h1>Room</h1>
      <button onClick={handleLeaveRoom}>Leave Room</button>
    </>
  )
};

export default Room;
