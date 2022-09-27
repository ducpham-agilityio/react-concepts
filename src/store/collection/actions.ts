import { HasId } from "src/types/base";
import { ACTION_TYPE } from "./types";

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

export type CollectionActions<T extends HasId> =
  | CreateItem<T>
  | UpdateItem<T>
  | DeleteItem;
