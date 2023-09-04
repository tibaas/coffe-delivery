import React, { createContext, useContext, useState } from "react";
import { CartItem } from "../components/CoffeItem";

interface CartContextProps {
  cart: CartItem[];
  addToCart: (itemToAdd: CartItem) => void;
  totalQuantity: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: {children: React.ReactNode}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addToCart = (itemToAdd: CartItem) => {
    const existingItemIndex = cart.findIndex(
      (item: CartItem) => item.title === itemToAdd.title
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += itemToAdd.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, itemToAdd]);
    }

    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + itemToAdd.quantity);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

