import CartQuantity from "../CartQuantity/CartQuantity";
import ProductImg from "../../assets/product-img.png";

const CartItem = ({ item }) => {
  const product = item.product || {};


  return (
    <div className="bg-white flex items-center rounded-3xl p-4 shadow-sm gap-4">

      {/* Product Image */}
      <div className="w-28 h-28 rounded-2xl overflow-hidden">
        <img
          src={product.image || ProductImg}
          alt={product.name || "product"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-[18px] font-medium leading-tight">
          {product.name || "Product Name"}
        </h3>

        <div className="mt-1">
          <p className="text-[20px] font-bold">
            ₹{product.discounted_price || "0"}
          </p>

          {product.actual_price && (
            <div className="flex items-center gap-2">
              <p className="line-through text-gray-400 text-sm">
                ₹{product.actual_price}
              </p>
              {product.label > 0 && (
                <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-tl-xl rounded-br-xl">
                  {product.label}% OFF
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quantity selector */}
        <div className="flex items-center justify-between mt-3">
          <CartQuantity item={item} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
