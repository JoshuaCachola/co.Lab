import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { handleUserSignUp } from '../store/actions';

const SignUp = ({ history }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(''),
    [firstName, setFirstName] = useState(''),
    [lastName, setLastName] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = e => {
    e.preventDefault();
    console.log(history);
    if (password === confirmPassword) {
      dispatch(handleUserSignUp(
        username,
        firstName,
        lastName,
        email,
        password));
    } else {
      alert('Passwords do not match...');
    }
    history.push('/');
  };

  return (
    <>
      <form onSubmit={handleSignUp}>
        <label>Username</label>
        <input
          type='text'
          onChange={e => setUsername(e.target.value)}
          required
        />
        <label>First name</label>
        <input
          type='text'
          onChange={e => setFirstName(e.target.value)}
          required
        />
        <label>Last name</label>
        <input
          type='text'
          onChange={e => setLastName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type='email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type='password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        <label>ConfirmPassword</label>
        <input
          type='password'
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
        <button type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUp;
