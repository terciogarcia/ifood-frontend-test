import { combineReducers } from 'redux';

import auth, { AuthState } from './auth';
import playlist, { PlaylistState } from './playlist';

export interface ApplicationState {
  auth: AuthState;
  playlist: PlaylistState;
}

const reducers = combineReducers({
  auth,
  playlist,
});

export default reducers;
