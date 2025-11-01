import React from "react";

const products = [
  { name: "Vintage Tee", price: "₹1,299", img: "/tee.jpg" },
  { name: "Street Joggers", price: "₹1,999", img: "/joggers.jpg" },
  { name: "Denim Jacket", price: "₹2,999", img: "/jacket.jpg" },
];

const RelatedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h3 className="text-2xl font-semibold text-center text-amber-800 mb-10">
        You May Also Like
      </h3>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            <img src={p.img} alt={p.name} className="rounded-lg mb-4" />
            <h4 className="font-medium text-gray-800">{p.name}</h4>
            <p className="text-amber-700 font-semibold">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
