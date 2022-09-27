import { createContext, FC, useContext } from 'react';

import { InventoryItem } from 'src/models/InventoryItem';

import useCollection from 'src/hooks/useCollection';

interface InventoryContextProps {
  items: InventoryItem[];
  addItem: (item: InventoryItem) => void;
  removeItem: (id: number) => void;
  updateItem: (item: InventoryItem) => void;
}

const InventoryContext = createContext<InventoryContextProps>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateItem: () => {},
});
InventoryContext.displayName = 'InventoryContext';

export const useInventory = () => useContext(InventoryContext);

interface InventoryProviderProps {
  initialItems?: InventoryItem[] | (() => InventoryItem[]);
  children: React.ReactNode;
}

export const InventoryProvider: FC<InventoryProviderProps> = ({ initialItems = [], children }) => {
  const {
    collection: items,
    addItem,
    removeItem,
    updateItem,
  } = useCollection(initialItems);

  return (
    <InventoryContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateItem,
      }}
    >
      {children}
    </InventoryContext.Provider>
  )
};

