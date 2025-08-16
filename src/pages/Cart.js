
/*import { useCartStore } from "../store/cartStore";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, totalPrice, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCartStore();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty 🛒</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-500">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-300 px-2 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-gray-300 px-2 rounded"
              >
                +
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <p className="font-semibold">
                ₹{item.price * item.quantity}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: ₹{totalPrice}</h2>
        <button
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          onClick={() =>
            navigate("/invoice", { state: { cart, totalPrice } })
          }
        >
          Checkout
        </button>
      </div>
    </div>
  );
}*/
import { useCartStore } from "../store/cartStore";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, totalPrice, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCartStore();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty 🛒</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-500">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-300 px-2 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-gray-300 px-2 rounded"
              >
                +
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <p className="font-semibold">₹{item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: ₹{totalPrice}</h2>
        <button
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          onClick={() => navigate("/invoice", { state: { cart, totalPrice } })}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}





          