import { HasId } from "src/types/base";

import { InventoryItem } from "src/models/InventoryItem";

import { ACTION_TYPE } from "./types";
import { InventoryActions } from "./actions";

export interface InventoryState {
  inventory: InventoryItem[];
}

export const reducer = (state: InventoryState, action: InventoryActions) => {
  switch(action.type) {
    case ACTION_TYPE.CREATE_INVENTORY_ITEM: {
      return {
        ...state,
        inventory: [
          ...state.inventory,
          action.payload
        ],
      };
    }

    case ACTION_TYPE.UPDATE_INVENTORY_ITEM: {
      const matchedIndex = state.inventory.findIndex(({ id }) => id === action.payload.id);

      if (matchedIndex === -1) {
        return state;
      }

      return {
        ...state,
        inventory: [
          ...state.inventory.slice(0, matchedIndex),
          action.payload,
          ...state.inventory.slice(matchedIndex + 1),
        ]
      };
    }

    case ACTION_TYPE.DELETE_INVENTORY_ITEM: {
      return {
        ...state,
        inventory: state.inventory.filter(({ id }) => id !== action.payload)
      }
    }

    default:
      return state;
  }
}
