import React from "react";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
];

const ProductGallery = () => {
  return (
    <section className="py-16 bg-white">
      <h3 className="text-2xl font-semibold text-center text-amber-800 mb-10">
        Product Gallery
      </h3>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i}`}
            className="rounded-xl hover:scale-105 transition-transform shadow"
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
