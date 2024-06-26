import React, { createContext, useState, PropsWithChildren, useEffect } from "react";
import { Product } from "./models/products.model";

interface ShoppingItem {
        id: string,
        name: string,
        brand: string,
        description: string,
        photo: string,
        price: number,
        count: number
}

interface ContextType {
    toggle: boolean;
    itemsTocart: ShoppingItem[];
    total: number;
    toggleFunction: () => void;
    handleShopping: (item: ShoppingItem) => void;
    handleCountPlus: (item: ShoppingItem) => void;
    handleCountLess: (item: ShoppingItem) => void;
    DeleteItemFromCart: (item: ShoppingItem) => void;
}

export const MyContext = createContext<ContextType | undefined>(undefined);

const ProviderC: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const [itemsTocart, setItemsToCart] = useState<ShoppingItem[]>([])
    const [total, setTotal] = useState<number>(0)

    const toggleFunction = () => setToggle(!toggle);

    const priceTotalToPay = itemsTocart.reduce((a, b)=> +a+b.price*b.count, 0)
    useEffect(()=>{
        setTotal(priceTotalToPay)
        console.log(total)
    },[itemsTocart])

    const handleShopping = (item: ShoppingItem) => {
      let itemExists = false;
      const updatedItemsToCart = itemsTocart.map(i => {
        if (i.id === item.id) {
          itemExists = true;
          return {...i, count: i.count + 1};
        }
        return i;
      });
    
      if (!itemExists) {
        setItemsToCart([...updatedItemsToCart, {...item, count: 1}]);
      } else {
        setItemsToCart(updatedItemsToCart);
      }
    }

    const handleCountPlus = (item: ShoppingItem) => {
      const updatedItemsToCart = itemsTocart.map(i => {
        if (i.id === item.id) {
            return {...i, count: i.count + 1};
        }
        return i;
    });

    setItemsToCart(updatedItemsToCart);
    }

    const handleCountLess = (item: ShoppingItem) => {
      const updatedItemsToCart = itemsTocart.map(i => {
        if (i.id === item.id) {
            return {...i, count: i.count - 1};
        }
        return i;
    });

    setItemsToCart(updatedItemsToCart);
    }

    const DeleteItemFromCart = (item: ShoppingItem) => {
      const deleteItem = itemsTocart.filter(i => i.id !== item.id)
      setItemsToCart(deleteItem)
    }


    console.log(toggle)
  return (
    <MyContext.Provider
      value={{
        toggle,
        itemsTocart,
        total,
        toggleFunction,
        handleShopping,
        handleCountPlus,
        handleCountLess,
        DeleteItemFromCart
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { ProviderC};
