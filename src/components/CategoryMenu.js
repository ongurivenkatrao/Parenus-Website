
/*import React from "react";

const categoriesData = {
  "Office & Stationery": [
    "Organizers",
    "Eco Notebooks",
    "Notebooks",
    "Multifunction Pens & Highlighters",
    "Eco Pens"
  ],
  "Drinkware": [
    "Vacuum Flasks",
    "Insulated Bottles",
    "Water Bottles",
    "Mugs",
    "Hot & Cold Mugs",
    "Steel Mugs",
    "Spill Proof Mugs",
    "Bamboo & Wheat Fiber"
  ],
  "Kitchen & Lunch": [
    "Lunch Box",
    "Electric Lunch Box",
    "Electric Kettles",
    "Home & Kitchen",
    "LifeStyle Products"
  ],
  "Tools & Accessories": [
    "Unique Toolkits",
    "Lamps & Torches",
    "Ladies Utility",
    "Air Fresheners",
    "Table Clocks",
    "Table Trophy",
    "Magnifiers",
    "Multifunction Keychains"
  ],
  "Tech & Mobile": [
    "Photo Frames",
    "Mobile Stands",
    "Mobile Accessories",
    "USB Hubs",
    "Table Top",
    "Tech Related",
    "Phone Chargers",
    "Charging Cables",
    "Power Bank"
  ],
  "Work & Travel": ["Workplace Utility", "Joining Kits", "Bags And Travel Accessories"]
};

export default function CategoryMenu({ selectedCategory, onSelectCategory }) {
  return (
    <nav className="w-full bg-white shadow-md">
      <ul className="flex space-x-3 max-w-6xl mx-auto p-3 font-sans text-sm">
        {Object.entries(categoriesData).map(([mainCategory, subCategories]) => (
          <li key={mainCategory} className="relative group">
            
            <button className="px-3 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
              {mainCategory}
            </button>

            
            <ul className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              {subCategories.map((sub) => (
                <li
                  key={sub}
                  onClick={() => onSelectCategory(sub)}
                  className={`px-3 py-2 cursor-pointer hover:bg-blue-100 transition-colors ${
                    selectedCategory === sub ? "bg-blue-200 font-semibold" : ""
                  }`}
                >
                  {sub}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}*/
import React from "react";

const categoriesData = {
  "Office & Stationery": [
    "Organizers",
    "Eco Notebooks",
    "Notebooks",
    "Multifunction Pens & Highlighters",
    "Eco Pens"
  ],
  "Drinkware": [
    "Vacuum Flasks",
    "Insulated Bottles",
    "Water Bottles",
    "Mugs",
    "Hot & Cold Mugs",
    "Steel Mugs",
    "Spill Proof Mugs",
    "Bamboo & Wheat Fiber"
  ],
  "Kitchen & Lunch": [
    "Lunch Box",
    "Electric Lunch Box",
    "Electric Kettles",
    "Home & Kitchen",
    "LifeStyle Products"
  ],
  "Tools & Accessories": [
    "Unique Toolkits",
    "Lamps & Torches",
    "Ladies Utility",
    "Air Fresheners",
    "Table Clocks",
    "Table Trophy",
    "Magnifiers",
    "Multifunction Keychains"
  ],
  "Tech & Mobile": [
    "Photo Frames",
    "Mobile Stands",
    "Mobile Accessories",
    "USB Hubs",
    "Table Top",
    "Tech Related",
    "Phone Chargers",
    "Charging Cables",
    "Power Bank"
  ],
  "Work & Travel": [
    "Workplace Utility",
    "Joining Kits",
    "Bags And Travel Accessories"
  ]
};

export default function CategoryMenu({ selectedCategory, onSelectCategory }) {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <ul className="flex space-x-3 max-w-6xl mx-auto p-3 font-sans text-sm">
        {Object.entries(categoriesData).map(([mainCategory, subCategories]) => (
          <li key={mainCategory} className="relative group">
            
            <button className="px-3 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
              {mainCategory}
            </button>

            {/* Dropdown */}
            <ul className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              {subCategories.map((sub) => (
                <li
                  key={sub}
                  onClick={() => onSelectCategory(sub)}
                  className={`px-3 py-2 cursor-pointer hover:bg-blue-100 transition-colors ${
                    selectedCategory === sub ? "bg-blue-200 font-semibold" : ""
                  }`}
                >
                  {sub}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

