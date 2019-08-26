import { Action, Something } from "./actions";
import {State, initialState} from './state';

//reducers.ts <-> Update.elm

export const rootReducer = (state: State = initialState, action: Action ): State => {
    switch(action.type){
        case Something: {
            return {
                ...state,
                foo: action.payload
            }
        } 
    }
    return state
}

export const getState = (state: State): State => state
