import { AuthAction, AuthActionType } from './AuthActions';
import { AuthState } from './AuthState';

import clone from 'clone';

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

export const AuthReducer: (state: AuthState | undefined, action: AuthAction) => AuthState = (
  state: AuthState = authInitialState,
  action: AuthAction,
): AuthState => {
  const newState: AuthState = clone(state);

  switch (action.type) {
    case AuthActionType.LOG_IN:
      newState.isLoggedIn = true;
      break;
    case AuthActionType.LOG_OUT:
      newState.isLoggedIn = false;
      break;
    default:
      return state;
  }

  return newState;
};