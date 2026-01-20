import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { addToCartAPI, getCartItemsAPI } from "../api/api";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loadingCart, setLoadingCart] = useState(false);

  const fetchCartItems = useCallback(async () => {
    if (!user?.uid) {
      setCartItems([]);
      setCartCount(0);
      return;
    }

    try {
      setLoadingCart(true);
      const res = await getCartItemsAPI(user.uid, user.lkey || "");

      if (res?.status) {
        const items = Array.isArray(res.data) ? res.data : [];
        setCartItems(items);
        setCartCount(
          typeof res.totalItems === "number"
            ? res.totalItems
            : items.length
        );
      } else {
        setCartItems([]);
        setCartCount(0);
      }
    } catch (e) {
      setCartItems([]);
      setCartCount(0);
    } finally {
      setLoadingCart(false);
    }
  }, [user]);

  useEffect(() => {
    if (user?.uid) fetchCartItems();
    // console.log("CART ITEMS FROM API:", cartItems);
  }, [user, fetchCartItems]);

  const addToCart = async (productId, quantity) => {
    if (!user?.uid || quantity < 0) return false;

    const res = await addToCartAPI(
      user.uid,
      productId,
      quantity,
      user.lkey || ""
    );

    if (res?.status) {
      await fetchCartItems();
      return true;
    }

    return false;
  };

  const getProductQuantity = (productId) => {
    const item = cartItems.find(
      i => String(i.product_id) === String(productId)
    );
    return item ? Number(item.quantity) : 0;
  };


  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      loadingCart,
      fetchCartItems,
      addToCart,
      getProductQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
