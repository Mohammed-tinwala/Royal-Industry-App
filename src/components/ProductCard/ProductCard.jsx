import { Link } from "react-router-dom";

const ProductCard = ({ product, variant, handleAddToCart }) => {

    return (
        <div
            className={`
                bg-white rounded-3xl shadow-sm p-4
                ${variant === "scroll" ? "shrink-0 w-60" : "w-full"}

            `}
        >
            {/* Image */}
            <Link to={`/product-detail/${product.id}`}>
                <div className="w-full h-40 sm:h-48 flex items-center justify-center">

                    {/* Gray background container */}
                    <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
                        <img
                            src={product.images?.[0]}
                            loading="lazy"
                            alt={product.name}
                            className="w-4/5 h-full object-cover"
                        />
                    </div>

                </div>
            </Link>


            <div className="flex justify-between items-center mt-1">
                {/* Discount badge */}
                <div className="mt-2 w-fit bg-(--secondary-color) text-white text-xs font-semibold px-3 py-1 rounded-tl-xl rounded-br-xl">
                    {product.label}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                    <span className="material-icons text-(--secondary-color) text-sm">
                        star
                    </span>
                    <p className="text-sm text-gray-600">4</p>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-gray-700 text-normal font-medium mt-3 line-clamp-1">
                {product.name}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                {product.short_description}
            </p>



            {/* Price */}
            <p className="text-base font-semibold text-gray-900 mt-1">
                Starts from ₹{product.discounted_price}
                <span className="text-sm">/{product.unit}</span>
            </p>

            <p className="text-gray-400 line-through text-sm mt-1">
                ₹{product.mrp}
            </p>


        </div>
    );
};

export default ProductCard;
