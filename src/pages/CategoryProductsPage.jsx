import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiGet } from "../api/api";
import ProductCard from "../components/ProductCard/ProductCard";

const CategoryProductsPage = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategoryProducts();
    }, [categoryId]);

    const fetchCategoryProducts = () => {
        setLoading(true);
        apiGet(`fetchProducts.php?category=${categoryId}`)
            .then((res) => {
                if (res.data.status) {
                    setProducts(res.data.data);
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };

    return (
        <div className="p-4 pt-12 mt-6">
            {/* <h1 className="text-lg font-semibold mb-4">
                Category Products
            </h1> */}

            {loading ? (
                <p>Loading...</p>
            ) : products.length === 0 ? (
                <p>No products found</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            variant="grid"
                            product={product}   // ✅ SAME PROP AS ALL PRODUCTS PAGE
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryProductsPage;
