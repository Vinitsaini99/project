import React from "react";

const ProductHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-amber-800 via-amber-600 to-yellow-500 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold font-[Alex_Brush] tracking-wide">
            FabriQ Collection
          </h1>
          <p className="text-lg opacity-90">
            Discover premium handcrafted pieces with a blend of style and comfort.
          </p>
          <button className="bg-white text-amber-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-amber-100 transition">
            Explore Now
          </button>
        </div>
        <img
          src="/product-hero.png"
          alt="Product"
          className="w-80 md:w-[400px] drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default ProductHero;
