
/*import { Link } from "react-router-dom";
import { productData } from "../data/products";

export default function Home() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productData.map((product) => (
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
              <p className="text-sm text-gray-500 mb-4">{product.category}</p>

             
              <div className="mt-auto">
                <span className="inline-block bg-green-100 text-green-800 text-lg font-bold px-3 py-1 rounded-full">
                  ₹{product.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}*/
import { Link } from "react-router-dom";
import { productData } from "../data/products";
import { useState } from "react";
import CategoryMenu from "../components/CategoryMenu";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter(
          (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* ✅ Category Menu */}
      <CategoryMenu
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        Our Products
      </h1>

      {/* Products Grid */}
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
              <p className="text-sm text-gray-500 mb-4">{product.category}</p>
              <div className="mt-auto">
                <span className="inline-block bg-green-100 text-green-800 text-lg font-bold px-3 py-1 rounded-full">
                  ₹{product.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

