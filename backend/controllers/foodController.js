import Food from "../models/foodSchema.js";

const addData = async (req, res) => {
   // Ensure files are logged properly
   console.log(req.files);  // Logs the uploaded files to the console
   console.log(req.body);
  
   // Send the file info as JSON
  

  try {
    const { name, description, price, category, rating } = req.body;
    const imagePaths ={};
    for(const[key,files] of Object.entries(req.files)){
      imagePaths[key] = files.map(file=>file.path);
    }
    //console.log(imagePaths);
    // Validation: Ensure all fields are provided
    if (!name || !description || !price || !category || !rating ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save data to the database
    const newFood = new Food({
      name,
      description,
      price,
      category,
      rating,
      imagePaths,
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




const removeData = async (req, res) => {
  const dataId = req.body.id;

  try {
    if (!dataId) {
      return res.status(400).json({ success: false, message: "Food ID is required." });
    }

    const food = await Food.findById(dataId);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found." });
    }

    await Food.findByIdAndDelete(dataId);
    res.json({ success: true, message: "Food deleted successfully." });
  } catch (error) {
    console.error("Error in removeData:", error);
    res.status(500).json({ success: false, message: "Failed to delete food." });
  }
};

const list = async (req, res) => {
  try {
    const data = await Food.find({});
    res.json({ success: true, data: data });
  } catch (error) {
    console.error("Error in list:", error);
    res.status(500).json({ success: false, message: "Failed to fetch food list." });
  }
};

export { addData, removeData, list };
