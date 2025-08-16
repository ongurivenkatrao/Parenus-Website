
/*import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-8">
   
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 text-left text-gray-700 font-medium flex justify-between items-center"
      >
        {selectedCategory}
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(categoriesData).map(([heading, items]) => (
              <div key={heading}>
                <h3 className="text-gray-800 font-semibold mb-2">{heading}</h3>
                <ul>
                  {items.map((item) => (
                    <li
                      key={item}
                      onClick={() => {
                        onSelectCategory(item);
                        setIsOpen(false);
                      }}
                      className={`px-2 py-1 cursor-pointer rounded hover:bg-blue-100 ${
                        selectedCategory === item ? "bg-blue-200 font-semibold" : ""
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}*/
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
      <ul className="flex space-x-4 max-w-6xl mx-auto p-4">
        {Object.entries(categoriesData).map(([mainCategory, subCategories]) => (
          <li key={mainCategory} className="relative group">
           
            <button className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600">
              {mainCategory}
            </button>

            <ul className="absolute left-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              {subCategories.map((sub) => (
                <li
                  key={sub}
                  onClick={() => onSelectCategory(sub)}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
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
  "Work & Travel": ["Workplace Utility", "Joining Kits", "Bags And Travel Accessories"]
};

export default function CategoryMenu({ selectedCategory, onSelectCategory }) {
  return (
    <nav className="w-full bg-white shadow-md">
      <ul className="flex space-x-3 max-w-6xl mx-auto p-3 font-sans text-sm">
        {Object.entries(categoriesData).map(([mainCategory, subCategories]) => (
          <li key={mainCategory} className="relative group">
            {/* Main Category */}
            <button className="px-3 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
              {mainCategory}
            </button>

            {/* Subcategories Dropdown */}
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






