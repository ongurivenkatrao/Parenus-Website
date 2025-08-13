import { useParams, Link } from "react-router-dom";
import { productData } from "../data";

export default function CategoryProducts() {
  const { categoryName } = useParams();
  const products = productData.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{categoryName}</h2>
      <div className="grid grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 text-center">
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover mb-2" />
            <Link 
              to={`/product/${p.id}`} 
              className="text-green-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
