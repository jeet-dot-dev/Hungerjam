import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FoodCardsHome = () => {
  const foodItems = [
    {
      image:
        "https://maunikagowardhan.co.uk/wp-content/uploads/2014/11/Indo-Chinese-Chilli-Chicken1-1024x683.jpg",
      name: "Chili Chicken",
      description:
        "Spicy, savory, and packed with flavor. A must-try for spice lovers!",
      rating: 4.5,
    },
    {
      image:
        "https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg",
      name: "Fried Rice",
      description:
        "Perfectly fried with a mix of veggies and your choice of protein.",
      rating: 4.2,
    },
    {
      image:
        "https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg",
      name: "Paneer Tikka",
      description:
        "Grilled paneer cubes with aromatic spices, perfect for vegetarians.",
      rating: 4.8,
    },
    {
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
      name: "Butter Chicken",
      description:
        "A rich and creamy dish that’s both indulgent and flavorful.",
      rating: 4.7,
    },
    {
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
      name: "Biryani",
      description:
        "A fragrant and flavorful rice dish, often paired with chicken or mutton.",
      rating: 4.6,
    },
    {
      image:
        "https://familystylefood.com/wp-content/uploads/2023/05/Pasta-Primavera-bowl.jpg",
      name: "Pasta Primavera",
      description:
        "Pasta tossed with fresh vegetables and a light garlic sauce.",
      rating: 4.3,
    },
    {
      image:
        "https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg",
      name: "Sushi",
      description:
        "Fresh fish rolled with seasoned rice, an artful dish from Japan.",
      rating: 4.9,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1FXPNopGE_RG2kNE4htjXtfZXW9m6xNzpw&s",
      name: "Spiral Potato",
      description:
        "Crispy or soft, filled with meat, veggies, and fresh salsa.",
      rating: 4.4,
    },
  ];

  return (
    <div className="food-cards w-full  bg-[#f4f1ea] p-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {foodItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ rotateY: "30deg" }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="food-card flex flex-col items-center bg-white p-4 rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover "
            />
            <div className="food-info mt-4 text-center">
              <h3 className="food-name text-lg font-semibold text-[#333]">
                {item.name}
              </h3>
              <p className="food-description text-sm text-gray-600 mt-2">
                {item.description}
              </p>
              <div className="food-rating mt-2 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < item.rating ? "text-yellow-500" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <motion.button
                initial={{
                  background:
                    "linear-gradient(90deg, #ff6f61 50%, #ff6f61 50%)",
                }}
                whileHover={{
                  background: [
                    "linear-gradient(90deg, #ff6f61 0%, #ffb701 100%)",
                  ],
                  transition: { duration: 0.6 },
                }}
                className="relative py-2 px-6 font-semibold text-white rounded-lg bg-[#ff6f61] overflow-hidden"
              >
               <Link to='/menu'> Explore More</Link>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoodCardsHome;
