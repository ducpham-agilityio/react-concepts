import './App.css';

import { StoreProvider } from './store';

import { InventoryItem } from 'src/models/InventoryItem';

import InventoryTable from 'src/components/Inventory/InventoryTable';

const initialInventoryItems: InventoryItem[] = [
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
    name: 'Apple MacBook Air 13"`',
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

function App() {
  return (
    <div className="App">
      <div className="App-body">

        {/* Inventory */}
        <StoreProvider initialState={{
          inventory: {
            inventory: initialInventoryItems
          }
        }}>
          <InventoryTable />
        </StoreProvider>
      </div>
    </div>
  )
}

export default App
