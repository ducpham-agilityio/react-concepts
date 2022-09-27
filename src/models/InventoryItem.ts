import { HasId } from "../hooks/useCollection";

export interface InventoryItem extends HasId {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  enabled: boolean;
};
