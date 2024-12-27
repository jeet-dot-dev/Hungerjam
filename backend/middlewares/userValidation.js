import Joi from 'joi';
import passwordComplexity from "joi-password-complexity";

const userValidation = (req, res, next) => {
    const Userschema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity({
            min: 8,
            max: 26,
            lowerCase: 1,
            upperCase: 1,
            numeric: 1,
            symbol: 1,
            requirementCount: 2,
        }).required().label("Password"),
    });

    const { error } = Userschema.validate(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }
    next();
};

export default userValidation;
