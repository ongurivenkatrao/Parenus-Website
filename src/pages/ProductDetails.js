

import { useParams, useNavigate } from "react-router-dom";
import { productData } from "../data/products";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find((item) => item.id === parseInt(id));
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return <p className="p-6 text-red-500 text-center">Product not found.</p>;
  }

  // Fallback images if product.images not provided
  const defaultImages = [
    product.image,
    product.image.replace(".webp", "-1.webp"),
    product.image.replace(".webp", "-2.webp"),
    product.image.replace(".webp", "-3.webp")
  ];

  const images = product.images?.length ? product.images : defaultImages;
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleBuyNow = () => {
    navigate("/payment", { state: { product } });
  };

  return (
    <div className="flex justify-center p-8 bg-gray-50">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
        
        {/* Left: Thumbnails + Main Image */}
        <div className="flex gap-4">
          {/* Small images */}
          <div className="flex flex-col gap-3">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumbnail-${idx}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition-transform hover:scale-105 hover:border-blue-500 ${
                  selectedImage === img ? "border-green-500 border-2" : ""
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-[400px] object-cover rounded-lg border"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          
          {product.description && (
       <p className="mb-4 text-gray-700 leading-relaxed">
    {product.description}
  </p>
      )}


          {/* Price */}
          <div className="flex items-center gap-4 mb-3">
            <span className="text-3xl font-bold text-green-600">₹{product.price}</span>
            {product.oldPrice && (
              <>
                <span className="line-through text-gray-500">₹{product.oldPrice}</span>
                <span className="text-green-500 font-semibold">
                  {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% Off
                </span>
              </>
            )}
          </div>

          {/* Rating */}
          {product.rating && (
            <div className="mb-4 text-yellow-500">
              ⭐ {product.rating} ({product.reviews} Reviews)
            </div>
          )}

          {/* Gift Location */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Gift Receiver's Location</p>
            <input
              type="text"
              placeholder="Enter pincode, location, area"
              className="border rounded px-3 py-2 w-full focus:ring focus:ring-green-300"
            />
          </div>

          {/* Delivery Date */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Select Delivery Date & Time Slot</p>
            <input
              type="date"
              className="border rounded px-3 py-2 w-full focus:ring focus:ring-green-300"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              className="flex-1 bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
              onClick={() => addToCart(product)}
            >
              🛒 Add to Cart
            </button>
            <button
              className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              onClick={handleBuyNow}
            >
              🛍️ Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

