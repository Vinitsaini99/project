import React from 'react'

const Product = () => {
  const images = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-500 mb-3 tracking-wide">
          FABRIQ Models
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Discover our exclusive collection of professional models showcasing
          modern elegance and style.
        </p>
      </div>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white"
          >
            <img
              src={img}
              alt={`Model ${index + 1}`}
              className="w-full h-64 sm:h-72 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg sm:text-xl font-semibold tracking-wide">
                Model {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
