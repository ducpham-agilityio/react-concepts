import { InventoryItem } from "src/models/InventoryItem";

import { ACTION_TYPE } from "./types";

type CreateItem = {
  type: ACTION_TYPE.CREATE_INVENTORY_ITEM,
  payload: InventoryItem;
}

type UpdateItem = {
  type: ACTION_TYPE.UPDATE_INVENTORY_ITEM,
  payload: InventoryItem;
}

type DeleteItem = {
  type: ACTION_TYPE.DELETE_INVENTORY_ITEM,
  payload: number;
}

export type InventoryActions =
  | CreateItem
  | UpdateItem
  | DeleteItem;
