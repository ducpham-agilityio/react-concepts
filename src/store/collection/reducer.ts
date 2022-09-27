import { HasId } from "src/types/base";

import { ACTION_TYPE } from "./types";
import { CollectionActions } from "./actions";


export interface CollectionState<T extends HasId> {
  collection: T[];
}

export const reducerFactory =  <T extends HasId>() => (state: CollectionState<T>, action: CollectionActions<T>): CollectionState<T> => {
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
