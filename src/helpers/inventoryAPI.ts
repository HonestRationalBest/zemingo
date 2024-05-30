import { InventoryItem } from "../typescript";

export const fetchInventory = (): Promise<InventoryItem[]> => {
  return fetch("/inventory").then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

export const createInventory = (
  items: InventoryItem[]
): Promise<InventoryItem[]> => {
  return fetch("/inventory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create inventory");
    }
    return response.json();
  });
};

export const resetInventory = (): Promise<void> => {
  return fetch("/inventory/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to reset inventory");
    }
    return response.json();
  });
};
