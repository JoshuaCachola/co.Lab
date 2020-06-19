import { USER_LOGIN } from '../action-types';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        user: action.user
      };
    }
    default: return state
  }
};
