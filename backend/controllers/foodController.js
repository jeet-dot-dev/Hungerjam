import Food from "../models/foodSchema.js";
import cloudinary from "../config/cloudConfig.js";

//add data
const addData = async (req, res) => {
  try {
    const { name, description, price, category, rating } = req.body;
    const imagePaths = [];

    for (const [key, files] of Object.entries(req.files)) {
      files.forEach((file) => {
        imagePaths.push({
          url: file.path, // File URL
          public_id: file.filename, // Cloudinary public ID
        });
      });
    }

    // Validation: Ensure all fields are provided
    if (!name || !description || !price || !category || !rating) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save data to the database
    const newFood = new Food({
      name,
      description,
      price,
      category,
      rating,
      imagePaths, // Store image details
    });

    await newFood.save();

    res.status(200).json({
      message: "Food item added successfully!",
      food: newFood,
    });
  } catch (error) {
    console.error("Error in addData:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//remove data
const removeData = async (req, res) => {
  const dataId = req.body.id;

  try {
    if (!dataId) {
      return res
        .status(400)
        .json({ success: false, message: "Food ID is required." });
    }

    const food = await Food.findById(dataId);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food not found." });
    }

    // Delete images from Cloudinary
    const imageDeletionPromises = food.imagePaths.map((image) =>
      cloudinary.uploader.destroy(image.public_id)
    );
    await Promise.all(imageDeletionPromises);

    // Delete the food document from the database
    await Food.findByIdAndDelete(dataId);

    res.json({ success: true, message: "Food and associated images deleted successfully." });
  } catch (error) {
    console.error("Error in removeData:", error);
    res.status(500).json({ success: false, message: "Failed to delete food." });
  }
};


//list data
const list = async (req, res) => {
  try {
    const data = await Food.find({});
    res.json({ success: true, data: data });
  } catch (error) {
    console.error("Error in list:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch food list." });
  }
};

export { addData, removeData, list };
