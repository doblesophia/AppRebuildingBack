import joi from "joi";

let loginValidator = joi.object({
    email: joi.string().required().email().messages({
        "string.empty": `Email cannot be an empty field`,
        "string.email": `Email format should be: example@company.com`,
        "any.required": `Email is a required field`,
    }),
    password: joi.string().min(8).required().messages({
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of { #limit}`,
        "any.required": `Password is a required field`,
    })
})

export default loginValidator