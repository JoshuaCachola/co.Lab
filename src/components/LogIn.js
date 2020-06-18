import React, { useState } from 'react';

const LogIn = () => {
  const [username, setUsername] = useState(''),
    [password, setPassword] = useState('');

  return (
    <>
      <form>
        <label>Username</label>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>Log In</button>
      </form>
    </>
  );
};

export default LogIn;
