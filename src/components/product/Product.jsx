import React from "react";
import ProductHero from "./ProductHero";
import ProductDetails from "./ProductDetails";
import ProductGallery from "./ProductGallery";
import ProductReviews from "./ProductReviews";
import RelatedProducts from "./RelatedProducts";

const Product = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <ProductHero />
      <ProductDetails />
      <ProductGallery />
      <ProductReviews />
      <RelatedProducts />
    </div>
  );
};

export default Product;
