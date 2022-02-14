import { useCallback, useState } from "react";

import InventoryItem from './InventoryItem';
import Button from './Button';

export type Item = {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  enabled: boolean;
};

const inventoryItems: Item[] = [
  {
    id: 1,
    name: 'Apple iMac 27"',
    category: 'Computer',
    price: 1000,
    quantity: 10,
    enabled: true,
  },
  {
    id: 2,
    name: 'Apple iPhone 13 Pro Max',
    category: 'Phone',
    price: 1500,
    quantity: 18,
    enabled: true,
  },
  {
    id: 3,
    name: 'Apple MacBook Pro 13"',
    category: 'Laptop',
    price: 1999,
    quantity: 50,
    enabled: true,
  },
  {
    id: 4,
    name: 'Apple MacBook Air 13"',
    category: 'Laptop',
    price: 1500,
    quantity: 112,
    enabled: true,
  },
  {
    id: 5,
    name: 'Apple iPod Touch',
    category: 'Accessories',
    price: 699,
    quantity: 6,
    enabled: true,
  }
];

export default function Inventory() {
  const [ items, setItems ] = useState<Item[]>(inventoryItems);

  const handleAddItem = useCallback(() => {
    setItems(prevItems => [
      ...prevItems,
      {
        id: 6,
        name: 'Apple iPod Touch Gen 7',
        category: 'Accessories',
        price: 799,
        quantity: 60,
        enabled: true,
      }
    ]);
  }, []);

  const handleRemoveItem = useCallback((id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const handleUpdateItem = useCallback((id: number, newItem: Item) => {
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
          <Button onClick={handleAddItem}>Add New Item</Button>
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Item
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Category
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400">
                    Price
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400">
                    Quantity
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400">
                    Item Cost
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
                    onUpdate={handleUpdateItem}
                    onRemove={handleRemoveItem}
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
