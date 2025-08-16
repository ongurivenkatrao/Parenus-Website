import { useLocation, useNavigate } from "react-router-dom";

export default function Invoice() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, deliveryDate, location: giftLocation } = location.state || {};

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500">
        No product details found.
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4 text-center">🧾 Invoice</h1>

        <div className="flex justify-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-40 h-40 object-cover rounded-lg border"
          />
        </div>

        <div className="space-y-2 mb-6">
          <p><strong>Product:</strong> {product.title}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
          {product.oldPrice && (
            <p><strong>Discount:</strong> {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% Off</p>
          )}
          {product.rating && (
            <p><strong>Rating:</strong> ⭐ {product.rating} ({product.reviews} Reviews)</p>
          )}
          <p><strong>Gift Location:</strong> {giftLocation}</p>
          <p><strong>Delivery Date:</strong> {deliveryDate}</p>
        </div>

        <div className="flex gap-4">
          <button
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            onClick={() => navigate("/")}
          >
            🔙 Back to Home
          </button>
          <button
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            onClick={() => navigate("/payment", { state: { product } })}
          >
            ✅ Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
}


