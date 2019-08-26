import { Action, DEFAULT } from "./actions";
import {combineReducers} from 'redux'

interface State {
    foo: string
}

const initialState = {
    foo: "bar"
}

export const rootReducer = (state: State= initialState, action: Action ): State => {
    switch(action.type){
        case DEFAULT: {
            return {
                ...state,
                foo: action.payload
            }
        } 
    }
    return state
}

export const getState = (state: State): State => state
