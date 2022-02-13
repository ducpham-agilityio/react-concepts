import { useCallback, useEffect, useState } from "react";

import InventoryItem from './InventoryItem';

export type StoreItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  enabled: boolean;
};

const inventoryItems: StoreItem[] = [
  {
    id: 1,
    name: 'Apple iMac 27"',
    category: 'Computer',
    price: 1000,
    enabled: true,
  },
  {
    id: 2,
    name: 'Apple iPhone 13 Pro Max',
    category: 'Phone',
    price: 1500,
    enabled: true,
  },
  {
    id: 3,
    name: 'Apple MacBook Pro 13"',
    category: 'Laptop',
    price: 1999,
    enabled: true,
  },
  {
    id: 4,
    name: 'Apple MacBook Air 13"',
    category: 'Laptop',
    price: 1500,
    enabled: true,
  },
  {
    id: 5,
    name: 'Apple iPod Touch',
    category: 'Accessories',
    price: 699,
    enabled: true,
  }
];

export default function Inventory() {
  const [ items, setItems ] = useState<StoreItem[]>(inventoryItems);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: 6,
        name: 'Apple Watch Series 5',
        category: 'Accessories',
        price: 299,
        enabled: false,
      }
    ]);
  };

  const removeItem = useCallback((id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const updateItem = useCallback((id: number, newItem: StoreItem) => {
    setItems(prevItems => {
      const matchedItemIndex = prevItems.findIndex(item => item.id === id);

      if (matchedItemIndex === -1) {
        return prevItems;
      };

      return [
        ...prevItems.slice(0, matchedItemIndex),
        newItem,
        ...prevItems.slice(matchedItemIndex + 1)
      ];
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <button className="mx-2 my-2 bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-6 py-2 text-xs" onClick={addItem}>Add New Item</button>
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Product Name
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Category
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400">
                    Price
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Enabled
                  </th>
                  <th scope="col" className="p-4">
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {items.map(item => (
                  <InventoryItem
                    key={item.id}
                    item={item}
                    onUpdate={updateItem}
                    onRemove={removeItem}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
