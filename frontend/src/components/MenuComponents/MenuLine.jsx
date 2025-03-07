import React, { useState, useEffect } from "react";

const MenuLine = ({ onMenuSelect }) => {
  const [menuItems] = useState([
    { id: 6, name: "All", image: "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741330687/360_F_104880404_UXFiLPrGAfHRz3G4RxNkyFj4Do3Iagou_xctmzf.webp" },
    { id: 1, name: "Chowmein", image: "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741330687/20240207015214-andy-20cooks-20-20beef-20chow-20mein_fssn0m.webp" },
    { id: 2, name: "Pasta", image: "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741330687/Masala_Pasta_Recipe_lzm1jk.webp" },
    { id: 3, name: "Coffee", image: "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741330687/coffee_its_benefits_898_1__l9yqkb.webp" },
    { id: 4, name: "potato-spiral", image: "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741330687/81361668_vafthu.webp" },
    { id: 5, name: "Rolls", image: "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741330687/chicken-kathi-roll-chicken-frankie-500x500_lxccem.webp" },
  ]);

  const [selectedValue, setSelectedValue] = useState(null);

  const handleClick = (item) => {
    setSelectedValue(item.name);
    onMenuSelect(item.name);
  };

  return (
    <div className="w-full md:w-[70%] px-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 p-4 rounded-lg shadow-lg">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="w-full flex flex-col items-center cursor-pointer"
            onClick={() => handleClick(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className={`w-[60px] sm:w-[70px] md:w-[90px] h-[60px] sm:h-[70px] md:h-[90px] rounded-full transition-all duration-200 ${
                selectedValue === item.name
                  ? "border-4 border-yellow-500"
                  : "border-2 border-gray-100"
              }`}
            />
            <p className="text-center text-xs sm:text-sm text-white font-medium mt-2 truncate w-full">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuLine;
