import { USER_LOGIN } from './action-types';

export const userLogin = user => {
  return {
    type: USER_LOGIN,
    user
  }
};

export const handleUserLogin = () => async dispatch => {
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
