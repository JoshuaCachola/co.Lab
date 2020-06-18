import React from 'react';
import io from 'socket.io-client';
import api from '../config';

const socket = io.connect(`${api.url}`);

const Room = () => {
  return (
    <h1>Room</h1>
  )
};

export default Room;
