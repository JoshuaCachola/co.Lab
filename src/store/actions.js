import api from '../utils';
import { USER_LOGIN } from './action-types';

// action creators
export const userLogin = user => {
  return {
    type: USER_LOGIN,
    user
  }
};

// thunks
export const handleUserLogIn = (username, password) => async dispatch => {
  try {
    let res = await fetch();

    if (!res.ok) {
      throw res;
    }

    res = await res.json();
    dispatch(userLogin(res));
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

    res = await res.json();
    dispatch(userLogin(res));
  } catch (err) {
    console.error(err);
  }
};