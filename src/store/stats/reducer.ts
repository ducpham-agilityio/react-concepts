import { ACTION_TYPE } from "../inventory/types";
import { InventoryActions } from "../inventory/actions";

export interface StatsState {
  counter: number;
}

export const reducer = (state: StatsState, action: InventoryActions) => {
  switch(action.type) {
    case ACTION_TYPE.CREATE_INVENTORY_ITEM: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case ACTION_TYPE.DELETE_INVENTORY_ITEM: {
      return {
        ...state,
        counter: state.counter + 1,
      }
    }

    default:
      return state;
  }
}
