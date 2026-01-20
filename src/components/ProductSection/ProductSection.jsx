import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductSection({ heading, products }) {

    const navigate = useNavigate();
    const location = useLocation();

    const scrollRef = useRef();

    const scroll = (direction) => {
        scrollRef.current.scrollBy({
            left: direction === "left" ? -260 : 260,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full pb-5 relative select-none">
            {/* Heading */}
            <div className="section-text-container">
                <h2 className="section-heading">{heading}</h2>
                <p
                    className="section-subheading cursor-pointer"
                    onClick={() => navigate("/products")}
                >
                    See more
                </p>

            </div>

            <div className="flex gap-4 px-4 category-scroll overflow-x-auto items-start">
                {products.map((product) => (
                    <ProductCard key={product.id} variant="scroll" product={product} />
                ))}
            </div>
        </section>
    );
}
