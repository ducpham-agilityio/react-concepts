import { createContext, useContext, useMemo, useReducer } from 'react';

// Helpers
import { combineReducers } from './combineReducers';

// Slices
import { reducer as inventoryReducer } from 'src/store/inventory/reducer';
import { InventoryActions } from 'src/store/inventory/actions';
import { reducer as statsReducer } from 'src/store/stats/reducer';


export const useStore = () => useContext(StoreContext);

interface RootState {
  inventory: ReturnType<typeof inventoryReducer>,
  stats: ReturnType<typeof statsReducer>,
}

interface StoreProviderProps {
  children: React.ReactNode;
  initialState?: Partial<RootState>;
}

type RootActions = InventoryActions;

const defaultState = {
  inventory: {
    inventory: [],
  },
  stats: {
    counter: 0,
  }
};

const StoreContext = createContext<[Partial<RootState>, (action: InventoryActions) => void]>([] as any);
StoreContext.displayName = 'StoreContext';

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const [state, dispatch] = combineReducers<RootState, RootActions>({
    inventory: useReducer(inventoryReducer, { ...defaultState.inventory, ...initialState?.inventory }),
    stats: useReducer(statsReducer, { ...defaultState.stats, ...initialState?.stats }),
  });

  const memoizedDispatch = useMemo(() => dispatch, []);
  const store = useMemo(() => [state, memoizedDispatch] as [Partial<RootState>, (action: InventoryActions) => void], [state]);

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
};

