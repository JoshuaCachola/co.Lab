import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleUserLogIn } from '../store/actions';

const LogIn = ({ history }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(''),
    [password, setPassword] = useState('');

  const handleLogIn = e => {
    e.preventDefault();
    dispatch(handleUserLogIn(username, password));
    history.push('/');
  };

  return (
    <>
      <form onSubmit={handleLogIn}>
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
