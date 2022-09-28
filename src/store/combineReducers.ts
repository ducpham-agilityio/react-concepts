import { CombinedReducers } from "../types/store";

export const combineReducers = <RootState, RootActions>(reducers: CombinedReducers) => {
    const state = Object.keys(reducers).reduce<Partial<RootState>>(
      (prevState, key) => ({
        ...prevState,
        [key]: reducers[key][0]
      }),
      {}
    );

    const dispatch = (action: RootActions) => Object.keys(combineReducers)
      .map(key => reducers[key][1])
      .forEach(fn => fn(action));

    return [state, dispatch] as const;
  };
