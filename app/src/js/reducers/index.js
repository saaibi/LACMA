import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './user.reducer';
import { client } from './client.reducer';
import { product } from './product.reducer';
import { sample } from './sample.reducer';

const rootReducer = combineReducers({
  authentication,
  client,
  product,
  sample,
  users
});

export default rootReducer;