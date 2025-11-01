import React from "react";

const ProductReviews = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <h3 className="text-2xl font-semibold text-center text-amber-800 mb-10">
        What Our Customers Say
      </h3>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {["Amazing fit!", "Super soft!", "Loved the color!"].map((review, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 italic">“{review}”</p>
            <div className="mt-4 text-amber-700 font-medium">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductReviews;
