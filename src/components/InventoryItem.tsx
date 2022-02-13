import { memo } from 'react';

import Toggle from './Toggle';
import { StoreItem } from './Inventory';

interface InventoryItemProps {
  item: StoreItem;
  onRemove: (id: number) => void;
  onUpdate: (id: number, item: StoreItem) => void;
}

function InventoryItem({ item, onRemove, onUpdate }: InventoryItemProps) {
  const handleRemove = () => {
    onRemove(item.id);
  };

  const handleFieldChange = (field: keyof StoreItem, value: StoreItem[typeof field]) => {
    onUpdate(item.id, { ...item, [field]: value });
  };

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="py-4 px-6 text-sm text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</td>
      <td className="py-4 px-6 text-sm text-left font-medium text-gray-500 whitespace-nowrap dark:text-white">{item.category}</td>
      <td className="py-4 px-6 text-sm text-right font-medium text-gray-900 whitespace-nowrap dark:text-white">${item.price}</td>
      <td className="py-4 px-6 text-sm text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <input
          type="checkbox"
          className="rounded text-blue-500"
          checked={item.enabled}
          onChange={() => {
            handleFieldChange('enabled', !item.enabled);
          }}
        />
      </td>
      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
        <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline" onClick={handleRemove}>Remove</a>
      </td>
    </tr>
  )
}

export default memo(InventoryItem);
