import { AuthState } from "./auth/AuthState";
import { GameState } from "./game/GameState";

    
export type State = {
  AuthReducer: AuthState;
  GameReducer: GameState;
};