import { LOGIN, REGISTER, LOGOUT } from '../constants/user.constans';

let user = JSON.parse(localStorage.getItem('user'));
let users = JSON.parse(localStorage.getItem('users')) || [];

const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  const { type, user } = action;
  switch (type) {
    case REGISTER.SUCCESS:
    case REGISTER.FAILURE:
    case LOGIN.FAILURE:
    case LOGOUT.REQUEST:
      return {};
    case REGISTER.REQUEST:
      return {
        registering: true
      };
    case LOGIN.REQUEST:
      return {
        loggingIn: true,
        user: user
      };
    case LOGIN.SUCCESS:
      return {
        loggedIn: true,
        user: user
      };
    case LOGOUT.SUCCESS:
      return {
        loggingIn: false
      };
    default:
      return state
  }
}