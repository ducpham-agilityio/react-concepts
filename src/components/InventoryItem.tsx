import { memo, useCallback } from 'react';
import { StoreItem } from './Inventory';

interface InventoryItemProps {
  item: StoreItem;
  onRemove: (id: number) => void;
}

function InventoryItem({ item, onRemove }: InventoryItemProps) {
  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="p-4 w-4">
        <div className="flex items-center">
          <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
        </div>
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</td>
      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{item.category}</td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.price}</td>
      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
        <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline" onClick={handleRemove}>Remove</a>
      </td>
    </tr>
  )
}

export default memo(InventoryItem);
