import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { InventoryItem, Product } from "../typescript";
import { fetchAllProducts } from "../helpers/productAPI";
import { createInventory } from "../helpers/inventoryAPI";

interface AddNewInventoryFormProps {
  setInventory: Dispatch<SetStateAction<InventoryItem[]>>;
  items: InventoryItem[];
}

export const AddNewInventoryForm: React.FC<AddNewInventoryFormProps> = ({
  setInventory,
  items,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedProduct && quantity) {
      createInventory([...items, { name: selectedProduct, quantity: quantity }])
        .then((createdInventory) => {
          setInventory(createdInventory);
          setSelectedProduct("");
          setQuantity(1);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill out the form!");
    }
  };

  useEffect(() => {
    fetchAllProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Product name:
        <select
          value={selectedProduct}
          onChange={(event) => setSelectedProduct(event.target.value)}
        >
          <option></option>
          {products.map((product) => (
            <option key={product.name} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(parseInt(event.target.value, 10))}
          min="1"
        />
      </div>
      <button type="submit">+</button>
    </form>
  );
};
