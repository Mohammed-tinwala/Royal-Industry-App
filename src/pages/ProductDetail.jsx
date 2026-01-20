import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetail, apiGet } from "../api/api";

import ProductSection from "../components/ProductSection/ProductSection"

/* ---------------- Skeleton Loader ---------------- */
function ProductDetailSkeleton() {
    return (
        <div className="animate-pulse">
            {/* Image */}
            <div className="w-full h-72 bg-gray-200 rounded"></div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-4 py-4">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="w-14 h-14 bg-gray-200 rounded-lg"
                    />
                ))}
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-6 bg-gray-200 rounded"></div>

                <div className="flex gap-3">
                    <div className="w-32 h-8 bg-gray-200 rounded"></div>
                    <div className="w-20 h-6 bg-gray-200 rounded"></div>
                </div>

                <div className="w-full h-16 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
}

/* ---------------- Main Component ---------------- */
export default function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [bestSellingProducts, setBestSellingProducts] = useState([]);


    /* -------- Fetch Product -------- */
    useEffect(() => {
        setLoading(true);

        fetchProductDetail(id)
            .then((data) => {
                if (data.status) {
                    setProduct(data.data);
                    setActiveImage(data.data.images?.[0] || "");
                } else {
                    setError(true);
                }
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [id]);

    useEffect(() => {
        apiGet("fetchProducts-bestselling.php")
            .then((res) => {
                if (res.data.status) {
                    // console.log(""res.data.data);
                    setBestSellingProducts(res.data.data);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    /* -------- Loading -------- */
    if (loading) {
        return <ProductDetailSkeleton />;
    }

    /* -------- Error -------- */
    if (error || !product) {
        return (
            <div className="pt-12 text-center text-red-500">
                Product not found
            </div>
        );
    }

    return (
        <>
            {/* Main Image */}
            <img
                src={activeImage}
                alt={product.name}
                className="w-full h-72 object-contain"
            />

            {/* Thumbnails */}
            <div className="flex items-center justify-center gap-4 py-4">
                {product.images?.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveImage(img)}
                        className={`p-1 rounded-xl cursor-pointer border-2 ${activeImage === img
                            ? "border-gray-700"
                            : "border-gray-200"
                            }`}
                    >
                        <img
                            src={img}
                            alt=""
                            className="w-14 h-14 rounded-lg object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Product Info */}
            <div className="p-5">
                <span className="text-sm text-gray-500">
                    {product.category}
                </span>

                <h2 className="text-xl font-semibold mt-1">
                    {product.name}
                </h2>

                <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <span className="text-3xl font-bold">
                        ₹{product.discounted_price} / {product.unit}
                    </span>

                    <span className="line-through text-gray-400 text-lg">
                        ₹{product.mrp}
                    </span>

                    {product.label && (
                        <div className="bg-(--secondary-color) text-white text-xs font-semibold px-3 py-1 rounded-tl-xl rounded-br-xl">
                            {product.label}
                        </div>
                    )}
                </div>

                {/* Rating */}
                <div className="flex items-center text-gray-600 mt-2">
                    <span className="text-yellow-500 text-xl">★</span>
                    <span className="ml-1 font-medium">4.9</span>
                    <span className="ml-1 text-gray-500">(256)</span>
                </div>
            </div>

            <hr />

            {/* Product Description */}
            <div className="p-5">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Product Description
                    </h3>
                </div>

                <div
                    className="mt-2 text-gray-600 leading-relaxed text-sm"
                    dangerouslySetInnerHTML={{
                        __html: product.description,
                    }}
                />
            </div>

            {/* Bottom Cart Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex items-center justify-between max-w-md mx-auto">
                <button
                    className="flex-1 py-3 rounded-xl text-lg font-semibold text-white"
                    style={{ backgroundColor: "var(--primary-color)" }}
                >
                    Add to Cart
                </button>
            </div>

            <ProductSection heading="Best Selling" products={bestSellingProducts} />
        </>
    );
}
