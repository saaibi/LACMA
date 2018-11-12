import { USERS_GETALL, USERS_DELETE, REGISTER } from '../constants/user.constans';

const initialState = {
  users: [],
  user: '',
  isLoading: false,
  error: '',
};

export function users(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USERS_GETALL.REQUEST:
    case USERS_GETALL.SUCCESS:
    case USERS_GETALL.FAILURE:
    case USERS_DELETE.REQUEST:
    case USERS_DELETE.FAILURE:
    case REGISTER.REQUEST:
    case REGISTER.FAILURE:
      return {
        ...state,
        ...payload,
      }
    case REGISTER.SUCCESS: {
      const { user } = action;
      return {
        ...state,
        users: [...state.users, user]
      };
    }
    case USERS_DELETE.SUCCESS:
      const { index } = payload;
      return {
        ...state,
        users: [
          ...state.users.slice(0, index),
          ...state.users.slice(index + 1),
        ],
      };
    default:
      return state
  }
}