import { useCart } from "../context/CartContext";

const AddToCartButton = ({ productId }) => {
  const { addToCart, getProductQuantity, loadingCart } = useCart();
  console.log("Product ID in AddToCartButton:", productId);

  const quantity = getProductQuantity(productId);

  const handleAdd = async () => {
    await addToCart(productId, 1);
  };

  const increaseQty = async () => {
    await addToCart(productId, 1);
  };

  const decreaseQty = async () => {
    if (quantity <= 1) {
      await addToCart(productId, 0);
    } else {
      await addToCart(productId, -1);
    }
  };

  if (loadingCart) {
    return (
      <div className="w-full h-10 bg-gray-200 animate-pulse rounded-xl" />
    );
  }

  return (
    <div className="w-full mt-2">
      {quantity === 0 ? (
        <button
          onClick={handleAdd}
          disabled={loadingCart}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm py-2 font-semibold rounded-lg transition active:scale-[0.98] disabled:opacity-50"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center justify-between bg-gray-900 text-white rounded-xl px-3 py-2">
          <button
            onClick={decreaseQty}
            disabled={loadingCart}
            aria-label="Decrease quantity"
            className="w-8 h-8 flex items-center justify-center text-xl font-bold disabled:opacity-50"
          >
            −
          </button>

          <span className="font-semibold min-w-[24px] text-center">
            {quantity}
          </span>

          <button
            onClick={increaseQty}
            disabled={loadingCart}
            aria-label="Increase quantity"
            className="w-8 h-8 flex items-center justify-center text-xl font-bold disabled:opacity-50"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
