import React, { createContext, useContext, useReducer } from 'react';
import _clone from 'lodash/clone';
import GameAPI from './GameAPI.json';
import { StateType, ActionTypes } from './types';
import { reducer } from './redux/reducer';
import { User, GAME_SCREEN } from './types';

export type JeopardyReducer = [StateType, React.Dispatch<ActionTypes>];
const users: User[] = [
  { name: 'Team A', score: 200 },
  { name: 'Team B', score: 300 },
  { name: 'Team C', score: 500 },
];

// const demoQuestion = {
//   value: 'Their favorite board game is Monopoly',
//   points: 300,
// };

const initialState: StateType = {
  questions: _clone(GameAPI),
  question: null,
  users,
  mode: GAME_SCREEN.BOARD_PAGE,
};

// @ts-ignore: An argument for 'defaultValue' was not provided.
export const StateContext = createContext<JeopardyReducer>();

export type StateProviderProps = {
  children: any;
};

export const StateProvider = ({ children }: StateProviderProps) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext<JeopardyReducer>(StateContext);
