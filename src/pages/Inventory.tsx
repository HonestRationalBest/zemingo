import { FC, useEffect, useState } from "react";
import { AddNewInventoryForm } from "../components/AddInventoryForm";
import { InventoryItem } from "../typescript";
import { fetchInventory, resetInventory } from "../helpers/inventoryAPI";

export const Inventory: FC = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInventory().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const handleReset = () => {
    resetInventory().then(() => {
      setItems([]);
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <AddNewInventoryForm setInventory={setItems} items={items} />
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        {items.map((item, index) => (
          <div key={item.name + index}>
            <div>
              Name: {item.name}, Quantity: {item.quantity}
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
