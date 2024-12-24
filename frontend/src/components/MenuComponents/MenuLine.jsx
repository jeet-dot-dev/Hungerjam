import React, { useState } from "react";

const MenuLine = ({ onMenuSelect }) => {
  const [menuItems] = useState([
    {
      id: 6,
      name: "All",
      image:
        "https://t3.ftcdn.net/jpg/01/04/88/04/360_F_104880404_UXFiLPrGAfHRz3G4RxNkyFj4Do3Iagou.jpg",
    },
    {
      id: 1,
      name: "Chowmein",
      image:
        "https://images.getrecipekit.com/20240207015214-andy-20cooks-20-20beef-20chow-20mein.jpg?aspect_ratio=4:3&quality=90&",
    },
    {
      id: 2,
      name: "Pasta",
      image:
        "https://prolicious.com/cdn/shop/articles/Masala_Pasta_Recipe.jpg?v=1705482430",
    },
    {
      id: 3,
      name: "Coffee",
      image:
        "https://www.netmeds.com/images/cms/wysiwyg/blog/Post/2018/10/coffee_its_benefits_898_1_.jpg",
    },
    {
      id: 4,
      name: "potato-spiral",
      image:
        "https://static.toiimg.com/thumb/81361668.cms?width=1200&height=900",
    },
    {
      id: 5,
      name: "Rolls",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/02/chicken-kathi-roll-chicken-frankie-500x500.jpg",
    },
  ]);

  const [selectedValue, setSelectedValue] = useState(null);

  const handleClick = (item) => {
    setSelectedValue(item.name);
    onMenuSelect(item.name); // Pass the selected value to the parent component
  };

  return (
    <div className="line w-[70%]  flex items-center justify-center gap-14 p-4 rounded-lg shadow-lg">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="img1 w-[100px] h-[150px] flex justify-center items-center flex-col cursor-pointer "
          onClick={() => handleClick(item)}
        >
          <img
            src={item.image}
            alt={item.name}
            className={`w-[90px] h-[90px] rounded-full transition-all duration-200 ${
              selectedValue === item.name
                ? "border-4 border-yellow-500"
                : "border-2 border-gray-100"
            }`}
          />
          <p className="text-center text-sm text-white font-medium mt-2">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MenuLine;
