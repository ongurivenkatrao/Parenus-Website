
/*import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";

export default function NavBar() {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between">
    
      <div className="flex items-center space-x-3">
        <img
          src="/images/parenus Logo-02.png"
          alt="Parenus Logo"
          className="h-14 w-auto object-contain"
        />
        <div className="text-xl font-bold">
          <Link to="/">Parenus - Known for Corporate Gifting...</Link>
        </div>
      </div>

      
<div className="flex space-x-7 text-lg font-bold">
  <Link to="/" className="hover:underline">Home</Link>
  <Link to="/about" className="hover:underline">About</Link>
  <Link to="/Counter" className="hover:underline">Contact Us</Link>
</div>


      
      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className="bg-white text-blue-600 px-4 py-1 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Login / Signup
        </Link>

        <Link to="/cart" className="relative flex items-center">
          <FaShoppingCart size={22} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            {cart.length}
          </span>
        </Link>

        <span className="font-semibold">₹{totalPrice}</span>
      </div>
    </nav>
  );
}*/
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";

export default function NavBar() {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center">
      {/* Left side: Logo + site title */}
      <div className="flex items-center space-x-3 flex-1">
        <img
          src="/images/parenus Logo-02.png"
          alt="Parenus Logo"
          className="h-14 w-auto object-contain"
        />
        <div className="text-xl font-bold">
          <Link to="/">Parenus - Known for Corporate Gifting...</Link>
        </div>
      </div>

      {/* Middle: Navigation links */}
      <div className="flex space-x-7 text-lg font-bold flex-1 justify-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/Counter" className="hover:underline">Contact Us</Link>
      </div>

      {/* Right side: Login, Cart, Price */}
      <div className="flex items-center space-x-4 flex-1 justify-end">
        <Link
          to="/login"
          className="bg-white text-blue-600 px-4 py-1 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Login / Signup
        </Link>

        <Link to="/cart" className="relative flex items-center">
          <FaShoppingCart size={22} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            {cart.length}
          </span>
        </Link>

        <span className="font-semibold">₹{totalPrice}</span>
      </div>
    </nav>
  );
}





