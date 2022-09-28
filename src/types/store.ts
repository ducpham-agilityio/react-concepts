import { useReducer } from "react";

export type Reducer = <State, Action>(state: State, action: Action) => State;

export type CombinedReducers = {
  [key: string]: ReturnType<typeof useReducer>;
};
