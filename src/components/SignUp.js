import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState(''),
    [firstName, setFirstName] = useState(''),
    [lastName, setLastName] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState('');

  return (
    <h1>Sign Up</h1>
  );
};

export default SignUp;
