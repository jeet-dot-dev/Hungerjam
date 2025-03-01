import Joi from "joi";
 const addressValidationSchema = Joi.object({
  firstname: Joi.string().min(2).max(50).required().messages({
    "string.empty": "First name is required.",
    "string.min": "First name must be at least 2 characters long.",
    "string.max": "First name must not exceed 50 characters.",
  }),
  lastname: Joi.string().min(2).max(50).required().messages({
    "string.empty": "Last name is required.",
    "string.min": "Last name must be at least 2 characters long.",
    "string.max": "Last name must not exceed 50 characters.",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required.",
    "string.email": "Please provide a valid email address.",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required.",
      "string.pattern.base": "Phone number must be 10 digits long.",
    }),
  address: Joi.string().min(5).max(255).required().messages({
    "string.empty": "Address is required.",
    "string.min": "Address must be at least 5 characters long.",
    "string.max": "Address must not exceed 255 characters.",
  }),
  city: Joi.string().min(2).max(100).required().messages({
    "string.empty": "City is required.",
    "string.min": "City must be at least 2 characters long.",
    "string.max": "City must not exceed 100 characters.",
  }),
  pin: Joi.string()
    .pattern(/^[0-9]{6}$/)
    .required()
    .messages({
      "string.empty": "PIN code is required.",
      "string.pattern.base": "PIN code must be exactly 6 digits.",
    }),
  instructions: Joi.string().allow("").max(500).messages({
    "string.max": "Instructions must not exceed 500 characters.",
  }),
  deliveryTime: Joi.string().allow("").messages({
    "string.base": "Delivery time must be a string.",
  }),
  user: Joi.string().required().messages({
    "string.empty": "User ID is required.",
  }),
});

const validateAddress = (req, res, next) => {
  const { error } = addressValidationSchema.validate(req.body, { abortEarly: false });

  if (error) {
    // Send a response with all validation errors
    return res.status(400).json({ 
      errors: error.details.map((err) => err.message) 
    });
  }

  next(); // Proceed to the next middleware or route handler
};

export default validateAddress;
