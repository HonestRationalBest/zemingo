import { Product } from "../typescript";

export const fetchAllProducts = (): Promise<Product[]> => {
  return fetch("/product/all").then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

export const addProduct = (productName: string): Promise<Product[]> => {
  return fetch("/product", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: productName }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to add new product");
    } else {
      alert("The product has been successfully added!");
    }
    return response.json();
  });
};
