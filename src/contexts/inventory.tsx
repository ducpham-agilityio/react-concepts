import { createContext, FC, useContext } from 'react';

import { InventoryItem } from 'src/models/InventoryItem';

import useCollection from 'src/hooks/useCollection';

interface InventoryContextProps {
  items: InventoryItem[];

  createItem: (item: InventoryItem) => void;
  updateItem: (item: InventoryItem) => void;
  deleteItem: (id: number) => void;
}

const InventoryContext = createContext<InventoryContextProps>({
  items: [],
} as unknown as InventoryContextProps);
InventoryContext.displayName = 'InventoryContext';

export const useInventory = () => useContext(InventoryContext);

interface InventoryProviderProps {
  initialItems?: InventoryItem[];
  children: React.ReactNode;
}

export const InventoryProvider: FC<InventoryProviderProps> = ({ initialItems = [], children }) => {
  const {
    state: { collection: items },
    createItem,
    deleteItem,
    updateItem,
  } = useCollection<InventoryItem>(initialItems);

  return (
    <InventoryContext.Provider
      value={{
        items,
        createItem,
        deleteItem,
        updateItem,
      }}
    >
      {children}
    </InventoryContext.Provider>
  )
};

