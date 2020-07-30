import { getAccessToken, setAccessToken, removeAccessToken } from 'services/storage';
import { ReduxAction } from 'interfaces/reduxAction';
import { Dispatch } from 'redux';

export enum AuthActionTypes {
  LOGIN = 'AUTH/LOGIN',
  LOGOUT = 'AUTH/LOGOUT',
}

export interface AuthState {
  authenticated: boolean;
  token?: string | null;
}

const token = getAccessToken();

const initialState = {
  authenticated: !!token,
  token,
};

function reducer(state: AuthState = initialState, action: ReduxAction<AuthActionTypes>) {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, authenticated: true, token: action.payload };
    case AuthActionTypes.LOGOUT:
      return { ...state, authenticated: false, token: null };
    default:
      return state;
  }
}

export default reducer;

export const actionLogin = (accessToken: string) => ({
  type: AuthActionTypes.LOGIN,
  payload: accessToken,
});

export const actionLogout = () => ({
  type: AuthActionTypes.LOGOUT,
});

export const login = (accessToken: string) => (dispatch: Dispatch) => {
  setAccessToken(accessToken);
  dispatch(actionLogin(accessToken));
};

export const logout = () => (dispatch: Dispatch) => {
  removeAccessToken();
  dispatch(actionLogout());
  window.location.href = '/';
};
