import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import { AuthReducer } from './auth/AuthReducer';
import { GameReducer } from './game/GameReducer';

const loggerMiddleware: Middleware = createLogger();

// tslint:disable-next-line:no-any
export const ConfigureStore = () => {
  return createStore(
    combineReducers({
      AuthReducer: AuthReducer,
      GameReducer: GameReducer,
    }),
    {},
    applyMiddleware(loggerMiddleware),
  );
};