const CartQuantity = () => {
  return (
    <div className="flex items-center border rounded-xl px-4 py-1 shadow-sm">
      <button className="text-[18px] font-medium">
        -
      </button>

      <span className="mx-3 text-lg font-medium">1</span>

      <button className="text-[18px] font-medium">
        +
      </button>
    </div>
  );
};

export default CartQuantity;
