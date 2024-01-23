import joi from "joi";

let registerAdminValidator = joi.object({
    nombre: joi.string().min(2).max(25).required().messages({
        "string.empty": `Nombre cannot be an empty field`,
        "string.min": `Nombre should have a minimum length of { #limit}`,
        "string.max": `Nombre should have a maximum length of { #limit}`,
        "any.required": `Nombre is a required field`,
    }),
    apellido: joi.string().min(2).max(25).required().messages({
        "string.empty": `Apellido cannot be an empty field`,
        "string.min": `Apellido should have a minimum length of { #limit}`,
        "string.max": `Apellido should have a maximum length of { #limit}`,
        "any.required": `Apellido is a required field`,
    }),
    email: joi.string().required().email().messages({
        "string.empty": `Email cannot be an empty field`,
        "string.email": `Email format should be: example@company.com`,
        "any.required": `Email is a required field`,
    }),
    password: joi.string().min(8).required().messages({
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of { #limit}`,
        "any.required": `Password is a required field`,
    }),
    confirmPassword: joi.string().min(8).required().messages({
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of { #limit}`,
        "any.required": `Password is a required field`,
    }),
   
   

})

export default registerAdminValidator