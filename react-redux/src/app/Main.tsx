import React, { Dispatch } from 'react';
import './Main.css';
import { useDispatch, useSelector } from 'react-redux';
import { Action, Something } from './actions';
import {createSelector} from 'reselect';
import { getState } from './reducers';
import logo from '../logo.svg'

const appSelector = createSelector(getState, state => ( 
  {
    value: state.foo,
  }
))

export const Main: React.FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>()
  const {value} = useSelector(appSelector)

  return (
    <div className="App">
    <img src={logo} width={400}/>
        <p>{value}</p>
        <button onClick={() => dispatch({type: Something, payload: "baz"})}>Hello there from React-Redux, Click me!</button>
    </div>
  );
}

