import { useNavigate } from "react-router-dom"

const CategoryCard = ({ cat }) => {

    const navigate = useNavigate();
    // console.log(cat.id);

    const imageUrl = 'https://alqamerautoparts.com/royalindustry/admin/categoryimages/'
   
    return (
        <>
            <div onClick={() => navigate(`/category/${cat.id}`)} className="cursor-pointer flex flex-col items-center min-w-20">
                <div className="bg-gray-300 rounded-xl md:rounded-lg">
                    <img loading="lazy" src={`${imageUrl}${cat.image}`} alt={cat.category_name}
                        className="w-20 h-20 md:w-[100px] md:h-[100px] shadow-lg rounded-xl md:rounded-lg object-contain" />
                </div>
                <p className="text-xs md:text-sm md:font-semibold mt-2 text-center">{cat.category_name}</p>
            </div>
        </>
    )
}

export default CategoryCard
       