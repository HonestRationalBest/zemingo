import React, { useState } from "react";
import { addProduct } from "../helpers/productAPI";

export const AddProductForm = () => {
  const [productName, setProductName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (productName) {
      addProduct(productName)
        .then(() => {
          setProductName("");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please provide product name");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={productName}
        onChange={handleInputChange}
        placeholder="Product name"
      />
      <button type="submit">Save</button>
    </form>
  );
};
