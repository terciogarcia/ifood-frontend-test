import { getAccessToken } from "services/storage"
import { ReduxAction } from "interfaces/reduxAction";
import { Dispatch } from 'redux';
import { Playlist } from "interfaces/playlist";

export enum PlaylistActionTypes {
  FETCH_PLAYLISTS = 'AUTH/FETCH_PLAYLISTS',
  FETCH_PLAYLISTS_SUCCESS = 'AUTH/FETCH_PLAYLISTS_SUCCESS',
}

export interface PlaylistState {
  playlists: Playlist[];
  loading: boolean;
}

const initialState = {
  playlists: [],
  loading: false
};

export default function (state: PlaylistState = initialState, action: ReduxAction<PlaylistActionTypes>) {
  switch (action.type) {
    case PlaylistActionTypes.FETCH_PLAYLISTS:
      return { ...state, loading: true }
      case PlaylistActionTypes.FETCH_PLAYLISTS_SUCCESS:
        return { ...state, loading: false, playlists: action.payload }
    default:
      return state;
  }
}

export const actionFetchPlaylists = () => ({
  type: PlaylistActionTypes.FETCH_PLAYLISTS
})

export const actionFetchPlaylistsSuccess = (playlists: Playlist[]) => ({
  type: PlaylistActionTypes.FETCH_PLAYLISTS_SUCCESS,
  payload: playlists
})

export const fetchPlaylists = () => async (dispatch: Dispatch) => {
  const data = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAccessToken()}`
    },
  }).then(response => response.json())
  dispatch(actionFetchPlaylistsSuccess(data.playlists.items))
}
