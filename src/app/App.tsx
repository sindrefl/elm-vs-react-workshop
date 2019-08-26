import React, { Dispatch } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Action, DEFAULT } from './actions';
import {createSelector} from 'reselect';
import { getState } from './reducers';

const appSelector = createSelector(getState, state => ( 
  {
    value: state.foo,
  }
))

const App: React.FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>()
  const {value} = useSelector(appSelector)
  console.log(value)

  return (
    <div className="App">
        <p>{value}</p>
        <button onClick={() => dispatch({type: DEFAULT, payload: "baz"})}>Hello there from React-Redux, Click me!</button>
    </div>
  );
}

export default App;
