import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index <= all_product.length; index++) { // Start from index 1
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => { // Corrected function name to camelCase
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const productId in cartItems) {
      if (cartItems[productId] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === parseInt(productId, 10)
        );

        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[productId];
        } else {
          console.warn(`Product with ID ${productId} not found in all_product`);
        }
      }
    }

    return totalAmount;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart, // Updated function name
    getTotalCartAmount,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
