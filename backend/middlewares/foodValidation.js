import Joi from 'joi';

const fooValidation = (req, res, next) => {
  const foodSchema = Joi.object({
    name: Joi.string().trim().min(1).required().messages({
      "string.empty": "Name is required",
      "any.required": "Name field is mandatory",
    }),
    description: Joi.string().trim().min(1).required().messages({
      "string.empty": "Description is required",
      "any.required": "Description field is mandatory",
    }),
    price: Joi.number().positive().required().messages({
      "number.base": "Price must be a valid number",
      "number.positive": "Price must be greater than zero",
      "any.required": "Price field is mandatory",
    }),
    rating: Joi.number().min(0).max(5).required().messages({
      "number.base": "Rating must be a number",
      "number.min": "Rating cannot be less than 0",
      "number.max": "Rating cannot exceed 5",
      "any.required": "Rating field is mandatory",
    }),
    category: Joi.string().trim().required().messages({
      "string.empty": "Category is required",
      "any.required": "Category field is mandatory",
    }),
    images: Joi.array()
      .items(Joi.string().uri().trim().required())
      .min(1)
      .required()
      .messages({
        "array.base": "Images must be an array of URLs",
        "array.min": "At least one image URL is required",
        "string.uri": "Each image must be a valid URL",
      }),
  });

  const { error } = foodSchema.validate(req.body, { abortEarly: false }); // Abort early set to false to collect all errors
  if (error) {
    return res.status(400).json({
      message: "Validation error",
      errors: error.details.map((err) => ({
        field: err.context.label,
        message: err.message,
      })),
    });
  }
  next();
};

export default fooValidation;
