import React, { createContext, useContext, useState } from "react";
import { CartItem } from "../components/CoffeItem";

export interface CartContextProps {
  cart: CartItem[];
  totalQuantity: number 
  AddToGlobalCart: (itemToAdd: CartItem) => void 
}

const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: {children: React.ReactNode}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const AddToGlobalCart = (itemToAdd: CartItem): void => {
    const itemIndex = cart.findIndex(
      (item: CartItem) => item.title === itemToAdd.title
    );
    //verify if item already exists
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += itemToAdd.quantity
      setCart(updatedCart);
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + itemToAdd.quantity);
      
    } else {
      setCart([...cart, itemToAdd]);
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + itemToAdd.quantity);
    }
  };

  return (
    <CartContext.Provider value={{ cart, AddToGlobalCart, totalQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

