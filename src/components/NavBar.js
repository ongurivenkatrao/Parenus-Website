
/*import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";

const categories = [
  "Organizers",
  "Eco Notebooks",
  "Notebooks",
  "Vacuum Flasks",
  "Insulated Bottles",
  "Water Bottles",
  "Mugs",
  "Hot & Cold Mugs",
  "Steel Mugs",
  "Spill Proof Mugs",
  "Bamboo & Wheat Fiber",
  "Lunch Box",
  "Electric Lunch Box",
  "Electric Kettles",
  "Home & Kitchen",
  "LifeStyle Products",
  "Unique Toolkits",
  "Lamps & Torches",
  "Ladies Utility",
  "Air Fresheners",
  "Table Clocks",
  "Table Trophy",
  "Magnifiers",
  "Multifunction Pens & Highlighters",
  "Eco Pens",
  "Multifunction Keychains",
  "Photo Frames",
  "Mobile Stands",
  "Mobile Accessories",
  "USB Hubs",
  "Table Top",
  "Tech Related",
  "Phone Chargers",
  "Charging Cables",
  "Power Bank",
  "Workplace Utility",
  "Joining Kits",
  "Bags And Travel Accessories"
];

export default function NavBar() {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  // Filter categories based on search term
  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCategory = (cat) => {
    setSearchTerm(cat);
    setIsDropdownOpen(false);
    navigate(`/?category=${encodeURIComponent(cat)}`);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg p-4 flex flex-col md:flex-row items-center md:items-stretch md:justify-between space-y-3 md:space-y-0">
      
      <div className="flex items-center space-x-3 flex-1">
        <img
          src="/images/parenus Logo-02.png"
          alt="Parenus Logo"
          className="h-14 w-auto object-contain"
        />
        <div className="text-xl font-extrabold tracking-wide hover:text-yellow-300 transition-colors">
          <Link to="/">Parenus - Corporate Gifting</Link>
        </div>
      </div>

      
      <div className="relative flex-1 max-w-md mx-auto w-full">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsDropdownOpen(true);
          }}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
          className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
        />
        <FaSearch className="absolute right-3 top-2.5 text-gray-500" />

        {isDropdownOpen && searchTerm && (
          <ul className="absolute z-50 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto text-gray-800 shadow-lg">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat) => (
                <li
                  key={cat}
                  className="px-4 py-2 cursor-pointer hover:bg-yellow-100 hover:text-yellow-800 transition-colors"
                  onMouseDown={() => handleSelectCategory(cat)}
                >
                  {cat}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No matches found</li>
            )}
          </ul>
        )}
      </div>

     
      <div className="flex space-x-7 text-lg font-semibold flex-1 justify-center">
        <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>
        <Link to="/Counter" className="hover:text-yellow-300 transition-colors">Contact Us</Link>
      </div>

      
      <div className="flex items-center space-x-4 flex-1 justify-end">
        <Link
          to="/login"
          className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors shadow-md"
        >
          Login / Signup
        </Link>

        <Link to="/cart" className="relative flex items-center">
          <FaShoppingCart size={22} className="hover:text-yellow-300 transition-colors" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full shadow-md">
            {cart.length}
          </span>
        </Link>

        <span className="font-bold text-lg bg-yellow-400 text-blue-900 px-3 py-1 rounded-full shadow-md">
          ₹{totalPrice}
        </span>
      </div>
    </nav>
  );
}*/
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";

const categories = [
  "Organizers",
  "Eco Notebooks",
  "Notebooks",
  "Vacuum Flasks",
  "Insulated Bottles",
  "Water Bottles",
  "Mugs",
  "Hot & Cold Mugs",
  "Steel Mugs",
  "Spill Proof Mugs",
  "Bamboo & Wheat Fiber",
  "Lunch Box",
  "Electric Lunch Box",
  "Electric Kettles",
  "Home & Kitchen",
  "LifeStyle Products",
  "Unique Toolkits",
  "Lamps & Torches",
  "Ladies Utility",
  "Air Fresheners",
  "Table Clocks",
  "Table Trophy",
  "Magnifiers",
  "Multifunction Pens & Highlighters",
  "Eco Pens",
  "Multifunction Keychains",
  "Photo Frames",
  "Mobile Stands",
  "Mobile Accessories",
  "USB Hubs",
  "Table Top",
  "Tech Related",
  "Phone Chargers",
  "Charging Cables",
  "Power Bank",
  "Workplace Utility",
  "Joining Kits",
  "Bags And Travel Accessories"
];

export default function NavBar() {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCategory = (cat) => {
    setSearchTerm(cat);
    setIsDropdownOpen(false);
    navigate(`/?category=${encodeURIComponent(cat)}`);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg p-4 flex flex-col md:flex-row items-center md:items-stretch md:justify-between space-y-3 md:space-y-0">
        {/* Left side: Logo + site title */}
        <div className="flex items-center space-x-3 flex-1">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/parenus Logo-02.png"
              alt="Parenus Logo"
              className="h-14 w-auto object-contain"
            />
            <div className="text-xl font-extrabold tracking-wide hover:text-yellow-300 transition-colors">
              Parenus - Corporate Gifting
            </div>
          </Link>
        </div>

        {/* Middle: Search bar */}
        <div className="relative flex-1 max-w-md mx-auto w-full">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsDropdownOpen(true);
            }}
            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
            className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />

          {isDropdownOpen && searchTerm && (
            <ul className="absolute z-50 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto text-gray-800 shadow-lg">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => (
                  <li
                    key={cat}
                    className="px-4 py-2 cursor-pointer hover:bg-yellow-100 hover:text-yellow-800 transition-colors"
                    onMouseDown={() => handleSelectCategory(cat)}
                  >
                    {cat}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No matches found</li>
              )}
            </ul>
          )}
        </div>

        {/* Middle: Navigation links */}
        <div className="flex space-x-7 text-lg font-semibold flex-1 justify-center">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">
            About
          </Link>
          <Link to="/Counter" className="hover:text-yellow-300 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Right side: Login, Cart, Price */}
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <Link
            to="/login"
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors shadow-md"
          >
            Login / Signup
          </Link>

          <Link to="/cart" className="relative flex items-center">
            <FaShoppingCart size={22} className="hover:text-yellow-300 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full shadow-md">
              {cart.length}
            </span>
          </Link>

          <span className="font-bold text-lg bg-yellow-400 text-blue-900 px-3 py-1 rounded-full shadow-md">
            ₹{totalPrice}
          </span>
        </div>
      </nav>

      {/* Discount Marquee */}
      <div className="bg-yellow-400 text-blue-900 font-semibold py-2 overflow-hidden relative">
        <div className="marquee flex whitespace-nowrap animate-marquee">
          <span className="mx-4">
            🎉 Flat 20% OFF on all Drinkware! 🎁 Buy 2 Notebooks, Get 1 Free! 🛒 Special Discount on Tech Accessories!
          </span>
          <span className="mx-4">
            🎉 Flat 20% OFF on all Drinkware! 🎁 Buy 2 Notebooks, Get 1 Free! 🛒 Special Discount on Tech Accessories!
          </span>
        </div>
      </div>

      {/* Tailwind CSS animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            min-width: 200%; /* ensures continuous scroll */
            animation: marquee 40s linear infinite; /* slow & smooth */
          }
          .marquee span {
            flex-shrink: 0;
          }
        `}
      </style>
    </>
  );
}
