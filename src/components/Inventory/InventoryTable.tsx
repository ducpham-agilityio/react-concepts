import { useCallback, useMemo } from 'react';

import { InventoryItem } from 'src/models/InventoryItem';

import useCollection from 'src/hooks/useCollection';

import InventoryTableRow from 'src/components/Inventory/InventoryTableRow';
import Button from 'src/components/Button';

const inventoryItems: InventoryItem[] = [
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

export default function InventoryTable() {
  const {
    collection: items,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    updateItem: handleUpdateItem,
  } = useCollection(inventoryItems);

  const handleAddRandomItem = useCallback(() => {
    handleAddItem({
      id: 6,
      name: 'Apple iPod Touch Gen 7',
      category: 'Accessories',
      price: 799,
      quantity: 60,
      enabled: true,
    });
  }, []);

  const SearchInput = useMemo(() => (
    <div className="relative text-gray-600 mb-4">
      <input type="search" name="search" placeholder="Search" className="bg-white h-10 px-5 rounded-lg text-sm focus:outline-none" />
    </div>
  ), []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:rounded-lg">
          {SearchInput}

          <div className="inline-block min-w-full align-middle shadow-md">
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
                  <InventoryTableRow
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

        <div className="overflow-x-auto sm:rounded-lg">
          <Button onClick={handleAddRandomItem}>Add New Item</Button>
        </div>
      </div>
    </div>
  )
}
