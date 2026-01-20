import { useState, useEffect } from 'react';
import { apiGet } from '../api/api';
import ProductCard from '../components/ProductCard/ProductCard';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiGet("/fetchProducts.php")
      .then((res) => {
        if (res.data.status) {
          // console.log(res.data.data);
          setProducts(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* GRID: 2 cards per row on mobile, 3 on small screens, 4 on medium */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 px-2">
        {products.map((product) => (
          <ProductCard key={product.id} variant="grid" product={product} />
        ))}
      </div>
    </>
  )
}

export default Product
