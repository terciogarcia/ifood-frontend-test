import { combineReducers } from 'redux';

import auth, { AuthState } from './auth';
import playlist, { PlaylistState } from './playlist';
import filter, { FilterState } from './filter';

export interface ApplicationState {
  auth: AuthState;
  playlist: PlaylistState;
  filter: FilterState
}

const reducers = combineReducers({
  auth,
  playlist,
  filter,
});

export default reducers;
