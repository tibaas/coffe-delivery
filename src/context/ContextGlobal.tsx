import React, { createContext, useContext, useState } from "react";
import { CartItem } from "../components/CoffeItem";

export interface CartContextProps {
  cart: CartItem[];
  totalQuantity: number 
  ResetCart: () => void
  AddToGlobalCart: (itemToAdd: CartItem) => void 

}

const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: {children: React.ReactNode}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  //this function is not working yet
  const ResetCart = () => {
    setCart([])
  }
  const AddToGlobalCart = (itemToAdd: CartItem): void => {


    const existingItemIndex = cart.findIndex(
      (item: CartItem) => item.title === itemToAdd.title
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(existingItemIndex, 1);
      setCart(updatedCart);
    } else {
      setCart([...cart, itemToAdd]);
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + itemToAdd.quantity);
    }
  };

  return (
    <CartContext.Provider value={{ cart, AddToGlobalCart, totalQuantity, ResetCart}}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

