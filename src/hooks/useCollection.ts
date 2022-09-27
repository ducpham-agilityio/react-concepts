import { useCallback, useReducer } from 'react';

export interface HasId {
  id: number;
}


interface CollectionState<T extends HasId> {
  collection: T[];
}

enum ACTION_TYPE {
  CREATE = 'CREATE',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
};

type CreateItem<T extends HasId> = {
  type: ACTION_TYPE.CREATE,
  payload: T;
}

type UpdateItem<T extends HasId> = {
  type: ACTION_TYPE.UPDATE,
  payload: T;
}

type DeleteItem = {
  type: ACTION_TYPE.DELETE,
  payload: number;
}

type CollectionActions<T extends HasId> =
  | CreateItem<T>
  | UpdateItem<T>
  | DeleteItem;

const reducerFactory =  <T extends HasId>() => (state: CollectionState<T>, action: CollectionActions<T>): CollectionState<T> => {
  switch(action.type) {
    case ACTION_TYPE.CREATE: {
      return {
        ...state,
        collection: [
          ...state.collection,
          action.payload
        ],
      };
    }

    case ACTION_TYPE.UPDATE: {
      const matchedIndex = state.collection.findIndex(({ id }) => id === action.payload.id);

      if (matchedIndex === -1) {
        return state;
      }

      return {
        ...state,
        collection: [
          ...state.collection.slice(0, matchedIndex),
          action.payload,
          ...state.collection.slice(matchedIndex + 1),
        ]
      };
    }

    case ACTION_TYPE.DELETE: {
      return {
        ...state,
        collection: state.collection.filter(({ id }) => id !== action.payload)
      }
    }

    default:
      return state;
  }
}

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
