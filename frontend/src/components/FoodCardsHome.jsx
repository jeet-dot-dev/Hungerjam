import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FoodCardsHome = () => {
  const foodItems = [
    {
      image:
        "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741249440/Indo-Chinese-Chilli-Chicken1-1024x683_cuwfkk.webp",
      name: "Chili Chicken",
      description:
        "Spicy, savory, and packed with flavor. A must-try for spice lovers!",
      rating: 4.5,
    },
    {
      image:
        "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741249439/Chicken-Fried-Rice-square-FS-_fqpgys.webp",
      name: "Fried Rice",
      description:
        "Perfectly fried with a mix of veggies and your choice of protein.",
      rating: 4.2,
    },
    {
      image:"https://res.cloudinary.com/dhdmbwnak/image/upload/v1741249440/Paneer-Tikka-Featured-1_olkabw.webp",
      name: "Paneer Tikka",
      description:
        "Grilled paneer cubes with aromatic spices, perfect for vegetarians.",
      rating: 4.8,
    },
    {
      image:
        "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741249440/Indo-Chinese-Chilli-Chicken1-1024x683_cuwfkk.webp",
      name: "Butter Chicken",
      description:
        "A rich and creamy dish that's both indulgent and flavorful.",
      rating: 4.7,
    },
    {
      image:
        "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741249439/Chicken-Biryani-Recipe_tcuofg.webp",
      name: "Biryani",
      description:
        "A fragrant and flavorful rice dish, often paired with chicken or mutton.",
      rating: 4.6,
    },
    {
      image:
        "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741249439/butter-chicken-ac2ff98_xlikws.webp",
      name: "Pasta Primavera",
      description:
        "Pasta tossed with fresh vegetables and a light garlic sauce.",
      rating: 4.3,
    },
    {
      image:
        "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741249797/shutterstock_1617156526-min_ithd0f.webp",
      name: "Sushi",
      description:
        "Fresh fish rolled with seasoned rice, an artful dish from Japan.",
      rating: 4.9,
    },
    {
      image:
        "httphttps://res.cloudinary.com/dhdmbwnak/image/upload/v1741249439/images_dxzdj0.webp",
      name: "Spiral Potato",
      description:
        "Crispy or soft, filled with meat, veggies, and fresh salsa.",
      rating: 4.4,
    },
  ];

  return (
    <section className="w-full bg-[#f4f1ea] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#333]">
          Our Popular Dishes
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foodItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="food-card flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <LazyLoadImage
                  src={item.image}
                  alt={item.name}
                  effect="blur"
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full"
                  threshold={100}
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full">
                  <span className="text-yellow-500 font-semibold">{item.rating}</span>
                  <span className="text-yellow-500 ml-1">★</span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#333] mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow text-sm">{item.description}</p>
                
                <Link 
                  to="/menu" 
                  className="w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 font-medium text-white rounded-lg bg-gradient-to-r from-[#ff6f61] to-[#ff8e61] hover:from-[#ff6f61] hover:to-[#ffb701] transition-all duration-300"
                  >
                    Order Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#333] text-white font-semibold rounded-lg hover:bg-[#222] transition-colors duration-300"
            >
              View Full Menu
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodCardsHome;