import api from '../utils';
import { USER_LOGIN } from './action-types';

// action creators
export const userLogin = (username, auth_token) => {
  return {
    type: USER_LOGIN,
    user: {
      username,
      authToken: auth_token
    }
  }
};

// thunks
export const handleUserLogIn = (username, password) => async dispatch => {
  try {
    let res = await fetch(`${api.url}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (!res.ok) {
      throw res;
    }

    const { auth_token } = await res.json();
    localStorage.setItem('username', username);
    localStorage.setItem('authToken', auth_token);
    dispatch(userLogin(auth_token, username));
  } catch (err) {
    console.error(err);
  }
};

export const handleUserSignUp = (
  username,
  firstName,
  lastName,
  email,
  password
) => async dispatch => {
  try {
    const body = {
      username,
      first_name: firstName,
      last_name: lastName,
      email,
      password
    };

    let res = await fetch(`${api.url}/api/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      throw res;
    }

    const { auth_token } = await res.json();
    localStorage.setItem('username', username);
    localStorage.setItem('authToken', res.auth_token);
    dispatch(userLogin(auth_token, username));
  } catch (err) {
    console.error(err);
  }
};
