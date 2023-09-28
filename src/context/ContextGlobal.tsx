import React, { createContext, useContext, useState } from "react";
import { CartItem } from "../components/CoffeItem";

export interface CartContextProps {
  cart: CartItem[];
  totalQuantity: number 
  AddToGlobalCart: (itemToAdd: CartItem) => void 
  DeleteCart: (item: CartItem) => void
  ResetCart: () => void

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

  const DeleteCart = (item: CartItem): void => {
    const updatedCart = cart.filter((cartItem: CartItem) => cartItem !== item)
    setCart([...updatedCart])
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - item.quantity);
  }

  const ResetCart = (): void => {
    setCart([])
    setTotalQuantity(0)
    
  }

  return (
    <CartContext.Provider value={{ cart, AddToGlobalCart, totalQuantity, DeleteCart, ResetCart}}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

