import { Link } from "react-router-dom";
import { productData } from "../data/products";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {productData.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="border rounded-lg p-4 hover:shadow-lg transition"
          >
            <img src={product.image} alt={product.title} className="mb-4 w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}


