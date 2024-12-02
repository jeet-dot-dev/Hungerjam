const foodData = [
    {
      name: "Paneer Roll",
      price: 89,
      description: "A crispy and delicious paneer roll, stuffed with cheese and spices and served with a sweet and tangy chutney.",
      rating: 4.3,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/547/eaa561e59c56e36e206d5ba2968ec547.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/556/27a09610e2efe79b4b6db6e0a8366556.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ffa/948dd2b84f9abd238d0a7eeead81affa.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/546/287e970f4fdb62c285293030c2731546.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ef9/6ca7643a2c74be5a6d7ce0f256705ef9.jpg?output-format=webp"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Chicken Roll",
      price: 99,
      description: "Flaky paratha wrapped around spiced chicken strips with onions and chutney.",
      rating: 4.5,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/9f1/63172cd2d900b9b96e6dbccba4e5b9f1.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/96a/737c63f7ac26c3da88366cfafc7df96a.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/018/496f94a134d18e9743754b71ccab6018.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/018/496f94a134d18e9743754b71ccab6018.jpg?output-format=webp"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Egg Roll",
      price: 79,
      description: "Classic street-style roll with scrambled eggs and spices.",
      rating: 4.2,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Mixed Veg Roll",
      price: 85,
      description: "Grilled vegetables wrapped in paratha with mint chutney.",
      rating: 4.0,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Double Chicken Roll",
      price: 129,
      description: "Extra-loaded roll with double portion of spiced chicken.",
      rating: 4.6,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Mushroom Roll",
      price: 95,
      description: "Grilled mushrooms with herbs wrapped in flaky paratha.",
      rating: 4.1,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Chicken Seekh Roll",
      price: 119,
      description: "Tandoori chicken seekh kebab wrapped in rumali roti.",
      rating: 4.4,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Schezwan Chicken Roll",
      price: 109,
      description: "Spicy Indo-Chinese style chicken roll with schezwan sauce.",
      rating: 4.3,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Mayo Chicken Roll",
      price: 105,
      description: "Creamy chicken roll with mayo and fresh vegetables.",
      rating: 4.2,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Mutton Roll",
      price: 139,
      description: "Tender spiced mutton wrapped in paratha with mint chutney.",
      rating: 4.7,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Corn Cheese Roll",
      price: 99,
      description: "Sweet corn and melted cheese wrapped in crispy paratha.",
      rating: 4.2,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Aloo Roll",
      price: 75,
      description: "Spiced potato filling wrapped in hot paratha.",
      rating: 4.0,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Fish Roll",
      price: 129,
      description: "Crispy fish fillet with tartar sauce wrapped in paratha.",
      rating: 4.3,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    },
    {
      name: "Paneer Tikka Roll",
      price: 109,
      description: "Grilled paneer tikka wrapped in rumali roti with mint chutney.",
      rating: 4.4,
      images: [
        "https://b.zmtcdn.com/data/dish_photos/122/a811b7ab5a4f398602a895bea6146122.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/ff0/dbf572abb5ed8b51c47f78c8b239fff0.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/985/7c0de03ad09b845c614d786f0273c985.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/631/85e712d5b666d20093c20ee54eb81631.jpeg?output-format=webp",
        "https://b.zmtcdn.com/data/dish_photos/b97/aa14ae43969da81e5ff3c911fd3cbb97.png"
      ],
      reviews: [],
      category: "roll"
    }
]

export default foodData;