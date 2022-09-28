import { useCallback } from 'react';

import { useStore } from '../store';

import { ACTION_TYPE } from '../store/inventory/types';
import { InventoryItem } from '../models/InventoryItem';

export function useInventory() {
  const [state, dispatch] = useStore();

  const createItem = useCallback((item: InventoryItem) => {
    dispatch({
      type: ACTION_TYPE.CREATE_INVENTORY_ITEM,
      payload: item,
    });
  }, [dispatch]);

  const deleteItem = useCallback((id: number) => {
    dispatch({
      type: ACTION_TYPE.DELETE_INVENTORY_ITEM,
      payload: id,
    });
  }, [dispatch]);

  const updateItem = useCallback((item: InventoryItem) => {
    dispatch({
      type: ACTION_TYPE.UPDATE_INVENTORY_ITEM,
      payload: item,
    });
  }, [dispatch]);

  return {
    inventory: state.inventory,
    createItem,
    deleteItem,
    updateItem,
  };
}
