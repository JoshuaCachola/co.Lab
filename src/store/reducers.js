import { USER_LOGIN } from './action-types';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        user: action.type
      };
    };
    default: return state;
  }
};
