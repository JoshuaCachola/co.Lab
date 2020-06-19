import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Room from './Room';
const Homepage = ({ history }) => {
  const handleEnterRoom = e => {
    // e.preventDefault();
    console.log(history);
    history.push('/room');
  };

  return (
    <>
      <button type='button' onClick={handleEnterRoom}>Enter room</button>
    </>
  );
};

export default Homepage;
