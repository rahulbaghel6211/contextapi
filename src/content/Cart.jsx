import { createContext } from 'react';

const Cart=createContext();
export const CartProvider=({children})=>{
  
    return (
        <Cart.Provider value={0}>
            {children}
        </Cart.Provider>
    )
}