import React from "react";

const ProductDetails = () => {
  return (
    <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/product-main.jpg"
          alt="Product"
          className="rounded-2xl shadow-md"
        />
        <div>
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Classic Handcrafted Hoodie
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Made from 100% organic cotton, designed for ultimate comfort and timeless style.
          </p>
          <p className="text-2xl font-bold text-amber-700 mb-4">₹2,499</p>
          <button className="bg-amber-700 text-white px-6 py-2 rounded-md hover:bg-amber-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
