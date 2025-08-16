
/*import { Link, useLocation } from "react-router-dom";
import { productData } from "../data/products";
import { useState, useEffect } from "react";
import CategoryMenu from "../components/CategoryMenu";

export default function Home() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Update selectedCategory if URL changes (optional)
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts =
    selectedCategory === "All"
      ? [] // Show default posters for "All"
      : productData.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      <CategoryMenu
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

     
      {selectedCategory === "All" ? (
        <div>
          
          <div className="mb-8 mt-10">
            <h2 className="text-2xl font-bold text-center mb-4 text-red-600">
              🎉 Today'S Special 🎉
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
                src="/images/Posters/Happy.jpg"
                alt="Festival Poster 1"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="/images/Posters/Happy.jpg"
                alt="Festival Poster 2"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="/images/Posters/Happy.jpg"
                alt="Festival Poster 3"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          
          <div className="mb-10 bg-yellow-100 border border-yellow-300 rounded-xl shadow p-2 overflow-hidden">
            <marquee behavior="scroll" direction="left" scrollamount="8">
              <span className="mx-10 text-lg font-semibold text-yellow-800">
                🌟 Today’s Special Discount on All Products!
              </span>
              <span className="mx-10 text-lg font-semibold text-yellow-800">
                🛍️ Buy 1 Get Upto 100%
              </span>
              <span className="mx-10 text-lg font-semibold text-yellow-800">
                🍫 Flat up to 50% Off on All Products!
              </span>
            </marquee>
          </div>

          
          <div className="mt-10 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">
              🎊 Today’s Day Special Offers 🎊
            </h2>
            <p className="text-gray-500 mb-6">
              Enjoy our exclusive festival discounts and special deals today!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
              <img
                src="/images/mugs/image_30.jpg"
                alt="Day Special 1"
                className="w-40 h-40 object-cover rounded-xl shadow-md mx-auto"
              />
              <img
                src="/images/mugs/image_31.jpg"
                alt="Day Special 2"
                className="w-40 h-40 object-cover rounded-xl shadow-md mx-auto"
              />
              <img
                src="/images/mugs/image_32.jpg"
                alt="Day Special 3"
                className="w-40 h-40 object-cover rounded-xl shadow-md mx-auto"
              />
              <img
                src="/images/mugs/image_33.jpg"
                alt="Day Special 4"
                className="w-40 h-40 object-cover rounded-xl shadow-md mx-auto"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          
          <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 mt-10">
            {selectedCategory} Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative group overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    {product.category}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-green-100 text-green-800 text-lg font-bold px-3 py-1 rounded-full">
                      ₹{product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}*/
import { Link, useLocation } from "react-router-dom";
import { productData } from "../data/products";
import { useState, useEffect } from "react";
import CategoryMenu from "../components/CategoryMenu";

export default function Home() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Update when URL changes
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts =
    selectedCategory === "All"
      ? [] // default posters for "All"
      : productData.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      {/* Category Menu */}
      <CategoryMenu
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Posters Section */}
      {selectedCategory === "All" ? (
        <div>
          {/* Festival Posters */}
          <div className="mb-8 mt-10">
            <h2 className="text-2xl font-bold text-center mb-4 text-red-600">
              🎉 Today'S Special 🎉
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
                src="/images/Posters/Happy.jpg"
                alt="Festival Poster 1"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="/images/Posters/Happy.jpg"
                alt="Festival Poster 2"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="/images/Posters/Happy.jpg"
                alt="Festival Poster 3"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Marquee */}
          <div className="mb-10 bg-yellow-100 border border-yellow-300 rounded-xl shadow p-2 overflow-hidden">
            <marquee behavior="scroll" direction="left" scrollamount="8">
              <span className="mx-10 text-lg font-semibold text-yellow-800">
                🌟 Today’s Special Discount on All Products!
              </span>
              <span className="mx-10 text-lg font-semibold text-yellow-800">
                🛍️ Buy 1 Get Upto 100%
              </span>
              <span className="mx-10 text-lg font-semibold text-yellow-800">
                🍫 Flat up to 50% Off on All Products!
              </span>
            </marquee>
          </div>

          {/* Day Special Posters */}
          <div className="mt-10 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">
              🎊 Today’s Day Special Offers 🎊
            </h2>
            <p className="text-gray-500 mb-6">
              Enjoy our exclusive festival discounts and special deals today!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
              <img
                src="/images/mugs/image_30.jpg"
                alt="Day Special 1"
                className="w-40 h-40 object-cover rounded-xl shadow-md mx-auto"
              />
              <img
                src="/images/mugs/image_31.jpg"
                alt="Day Special 2"
                className="w-40 h-40 object-cover rounded-xl shadow-md mx-auto"
              />
              <img
                src="/images/mugs/image_32.jpg"
                alt="Day Special 3"
                className="w-40 h-40 object-cover rounded-xl shadow-md mx-auto"
              />
              <img
                src="/images/mugs/image_33.jpg"
                alt="Day Special 4"
                className="w-40 h-40 object-cover rounded-xl shadow-md mx-auto"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Show Products for selected category */}
          <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 mt-10">
            {selectedCategory} Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative group overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full max-h-72 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    {product.category}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-green-100 text-green-800 text-lg font-bold px-3 py-1 rounded-full">
                      ₹{product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


