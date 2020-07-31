import { getAccessToken } from 'services/storage';
import { ReduxAction } from 'interfaces/reduxAction';
import { Dispatch } from 'redux';
import { Playlist } from 'interfaces/playlist';
import { FilterParams } from 'interfaces/filterParams';
import axios from 'axios';
import { logout } from './auth';

export enum PlaylistActionTypes {
  FETCH_PLAYLISTS = 'PLAYLIST/FETCH_PLAYLISTS',
  FETCH_PLAYLISTS_SUCCESS = 'PLAYLIST/FETCH_PLAYLISTS_SUCCESS',
}

export interface PlaylistState {
  playlists: Playlist[];
  loading: boolean;
}

const initialState = {
  playlists: [],
  loading: false,
};

function reducer(state: PlaylistState = initialState, action: ReduxAction<PlaylistActionTypes>) {
  switch (action.type) {
    case PlaylistActionTypes.FETCH_PLAYLISTS:
      return { ...state, loading: true };
    case PlaylistActionTypes.FETCH_PLAYLISTS_SUCCESS:
      return { ...state, loading: false, playlists: action.payload };
    default:
      return state;
  }
}

export default reducer;

export const actionFetchPlaylists = () => ({
  type: PlaylistActionTypes.FETCH_PLAYLISTS,
});

export const actionFetchPlaylistsSuccess = (playlists: Playlist[]) => ({
  type: PlaylistActionTypes.FETCH_PLAYLISTS_SUCCESS,
  payload: playlists,
});

export const fetchPlaylists = (params: FilterParams = {}) => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
      params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    dispatch(actionFetchPlaylistsSuccess(data.playlists.items));
  } catch (error) {
    if (error.error?.status === 401) { logout()(dispatch); }
  }
};
