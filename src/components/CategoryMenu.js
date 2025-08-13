// src/components/CategoryMenu.jsx
export default function CategoryMenu({ selectedCategory, onSelectCategory }) {
  const categories = [
    "All",
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

  return (
    <div className="flex flex-wrap gap-6 justify-center mb-8 border-b pb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`text-sm font-semibold transition ${
            selectedCategory === cat
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
