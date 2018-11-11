import { USERS_GETALL, USERS_DELETE } from '../constants/user.constans';

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
      return {
        ...state,
        ...payload,
      }
    case USERS_DELETE.SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case USERS_DELETE.FAILURE:
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
}