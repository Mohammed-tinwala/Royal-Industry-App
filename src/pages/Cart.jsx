// pages/Cart.jsx
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/Cart/CartItem";

const Cart = () => {
  const { cartItems, fetchCartItems, loadingCart } = useCart();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  if (loadingCart) return <p className="p-4 text-center">Loading cart items...</p>;

  return (
    <div className="pt-12 pb-24 px-4">
      {(!cartItems || cartItems.length === 0) ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-3">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
