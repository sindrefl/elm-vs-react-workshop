import { Action, Something } from "./actions";
import {State, initialState} from './state';

//reducers.ts <-> Update.elm


/**For use as first parameter in selector */
export const getState = (state: State): State => state
