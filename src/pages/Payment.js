
import { useLocation } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const { cart, totalPrice, product } = location.state || {};

  const items = cart || (product ? [{ ...product, quantity: 1 }] : []);
  const total = totalPrice || (product ? product.price : 0);

  if (!items.length) {
    return <p className="p-6 text-red-500 text-center">No items found.</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-lg bg-white rounded-lg shadow-lg p-8 w-full">
        <h1 className="text-2xl font-bold mb-4">Payment Options</h1>
        <p className="mb-4 font-semibold text-lg">Total: ₹{total}</p>

        <ul className="mb-4 text-gray-700">
          {items.map((item) => (
            <li key={item.id} className="mb-1">
              {item.title} × {item.quantity} = ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Credit / Debit Card
          </button>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            UPI / Google Pay / PhonePe
          </button>
          <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
            Net Banking
          </button>
          <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition">
            Cash on Delivery
          </button>
        </div>
      </div>
    </div>
  );
}



