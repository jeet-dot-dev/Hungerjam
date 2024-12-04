import Food from "../models/foodSchema.js";

const addData = async (req, res) => {
  const food = new Food({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    rating:req.body.rating,
    images:req.body.images
  })
  try {
    await food.save();
    res.json({success:true,message:"Food Added"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"error1"});
  }
};

const removeData = async (req, res) => {};

const list = async (req, res) => {
  try {
    const data = await Food.find({});
    console.log(data);
    res.json({ success: true, data: data });
  } catch (error) {
    res.json({ success: false, message:"error"});
  }
};

export { addData, removeData, list };
