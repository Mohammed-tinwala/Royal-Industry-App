import BannerCarousel from "../components/BannerCrousel";
import CategorySection from "../components/CategorySection/CategorySection"
import ProductSection from "../components/ProductSection/ProductSection"
import IndustriesServed from "../components/IndustriesServed";
import WhyChooseRoyal from "../components/WhyChooseRoyal";
import CustomerTrust from "../components/CustomerTrust";

import { useState, useEffect } from "react";
import { apiGet } from "../api/api";
import PremiumProductShowcase from "../components/PremiumProductShowcase";
import RoyalProductShowcase from "../components/RoyalProductShowcase";


const Home = () => {
  const [category, setCategory] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiGet("fetchCategories.php")
      .then((res) => {
        if (res.data.status) {
          // console.log(res.data.data);
          setCategory(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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

  useEffect(() => {
    apiGet("fetchProducts.php")
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
    
        <BannerCarousel />
        <CategorySection category={category} />
        <ProductSection heading="Best Selling" products={products} />
        <ProductSection heading="All Products" products={products} />
        <PremiumProductShowcase />
        <IndustriesServed />
        <WhyChooseRoyal />
        <CustomerTrust />
     
    </>
  )
}

export default Home
