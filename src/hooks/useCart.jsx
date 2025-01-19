import { useState, useEffect } from "react";

// Function to get cart from localStorage
const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const useCart = () => {
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [isLoading, setIsLoading] = useState(false);

  // Update cart in localStorage and state
  const updateCartInLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);  // Update the state immediately after updating localStorage
  };

  // Refetch cart data (reload from localStorage)
  const refetch = () => {
    setIsLoading(true);
    const updatedCart = getCartFromLocalStorage();
    setCart(updatedCart);
    setIsLoading(false);
  };

  // Optional: Watch for changes in localStorage to refresh cart
  useEffect(() => {
    window.addEventListener("storage", refetch);
    return () => {
      window.removeEventListener("storage", refetch);
    };
  }, []);

  return { cart, isLoading, refetch, updateCartInLocalStorage };
};

export default useCart;
