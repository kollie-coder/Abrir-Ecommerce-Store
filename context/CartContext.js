import cart from "@/app/(tabs)/cart";
import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem("carts");
        if (storedCartItems !== null) {
          setCartItems(JSON.parse(storedCartItems));

          // retrieving the total sum from the async storage 
          totalSum(storedCartItems);

        }
      } catch (error) {
        console.error("Failed to load cart items", error);
      }
    };

    loadCartItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const updatedCartItems = [...cartItems, item];
      await AsyncStorage.setItem("carts", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);

      totalSum(updatedCartItems);
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  const totalSum = (cartItems) => {
    const totalSum = cartItems.reduce((amount, item) => amount + item.price, 0);
    
    console.log('totalSum', totalSum);
    setTotalPrice(totalSum);
  };

  const deleteItemFromCart = async(item) => {
    const newItems = cartItems.filter((cartItem)=>cartItem.id!== item.id);
   
    await AsyncStorage.setItem("carts", JSON.stringify(newItems));
    setCartItems(newItems);
    totalSum(newItems);
  }
 

  const value = {
    cartItems, 
    addToCart,  
    totalPrice,
    deleteItemFromCart,
  };
  return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}