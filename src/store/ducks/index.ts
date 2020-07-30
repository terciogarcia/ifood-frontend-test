import { combineReducers } from 'redux';

import auth, { AuthState } from './auth';

export interface ApplicationState {
  auth: AuthState;
}

const reducers = combineReducers({
  auth,
});

export default reducers;
