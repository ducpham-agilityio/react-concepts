import { useCallback, useReducer } from 'react';

import { HasId } from '../types/base';

import { reducerFactory } from '../store/collection/reducer';
import { ACTION_TYPE } from '../store/collection/types';

export default function useCollection<T extends HasId>(initialCollection: T[]){
  const [state, dispatch] = useReducer(reducerFactory<T>(), { collection: initialCollection });

  const createItem = useCallback((item: T) => {
    dispatch({
      type: ACTION_TYPE.CREATE,
      payload: item,
    });
  }, []);

  const deleteItem = useCallback((id: number) => {
    dispatch({
      type: ACTION_TYPE.DELETE,
      payload: id,
    });
  }, []);

  const updateItem = useCallback((item: T) => {
    dispatch({
      type: ACTION_TYPE.UPDATE,
      payload: item,
    });
  }, []);

  return {
    state,
    createItem,
    deleteItem,
    updateItem,
  };
}
