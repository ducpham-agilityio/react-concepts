import { useCallback, useMemo } from 'react';

// Contexts
import { useInventory } from 'src/contexts/inventory';

import InventoryTableRow from 'src/components/Inventory/InventoryTableRow';
import Button from 'src/components/Button';

export default function InventoryTable() {
  const {
    items,
    createItem,
    deleteItem,
    updateItem,
  } = useInventory();

  const handleAddRandomItem = useCallback(() => {
    createItem({
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
                    onUpdate={updateItem}
                    onRemove={deleteItem}
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
