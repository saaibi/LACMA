import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './user.reducer';
import { client } from './client.reducer';
import { product } from './product.reducer';

const rootReducer = combineReducers({
  authentication,
  client,
  product,
  users
});

export default rootReducer;