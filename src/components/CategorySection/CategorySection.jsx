import './CategorySection.css';
import CategoryCard from "./CategoryCard";

const CategorySection = ({ category }) => {

    // console.log("CategorySection category:", category);

    return (
        <section className="w-full mt-8 pb-5 relative select-none">
            {/* Heading */}
            <div className="section-text-container">
                <h2 className="section-heading">Shop by Category</h2>
                <p className="section-subheading">See more</p>
            </div>

            <div className="flex px-4 gap-5 mt-4 overflow-x-auto category-scroll
            md:grid md:grid-cols-8 md:gap-0 md:px-0">
                {category.map((cat) => (
                    <CategoryCard key={cat.id} cat={cat} />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
