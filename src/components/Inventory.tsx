import { useCallback, useEffect, useState } from "react";

import InventoryItem from './InventoryItem';

export type StoreItem = {
  id: number;
  name: string;
  category: string;
  price: number;
};

const inventoryItems: StoreItem[] = [
  {
    id: 1,
    name: 'Apple iMac 27"',
    category: 'Computer',
    price: 1000
  },
  {
    id: 2,
    name: 'Apple iPhone 13 Pro Max',
    category: 'Phone',
    price: 1500
  },
  {
    id: 3,
    name: 'Apple MacBook Pro 13"',
    category: 'Laptop',
    price: 1999
  },
  {
    id: 4,
    name: 'Apple MacBook Air 13"',
    category: 'Laptop',
    price: 1500
  },
  {
    id: 5,
    name: 'Apple iPod Touch',
    category: 'Accessories',
    price: 699
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
        price: 299
      }
    ]);
  };

  const removeItem = useCallback((id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <button className="mx-2 my-2 bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-6 py-2 text-xs" onClick={addItem}>Add New Item</button>
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Product Name
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Category
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Price
                  </th>
                  <th scope="col" className="p-4">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {items.map(item => (
                  <InventoryItem key={item.id} item={item} onRemove={removeItem} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}