import joi from "joi"

let perfilVecinoValidator = joi.object({
    nombre: joi.string().min(1).message({
        "string.empty": `nombre empresa cannot be an empty field`,
        "string.min": `nombre empresa should have a minimum length of { #limit}`,
    }),
    apellido: joi.string().min(1).message({
        "string.empty": `nombre empresa cannot be an empty field`,
        "string.min": `nombre empresa should have a minimum length of { #limit}`,
    }),
    email: joi.string().min(1).message({
        "string.empty": `nombre empresa cannot be an empty field`,
        "string.min": `nombre empresa should have a minimum length of { #limit}`,
    }),
    comuna: joi.string().min(1).message({
        "string.empty": `nombre empresa cannot be an empty field`,
        "string.min": `nombre empresa should have a minimum length of { #limit}`,
    }),
    unidadVecinal: joi.number().min(1).messages({
        "number.empty": "Unidad Vecinal no puede estar vacía",
        "number.min": "Unidad vecinal debe contener al menos un número"
    }),
    img: joi.string().uri().messages({
        "string.empty": `Tipo de construcción empresa cannot be an empty field`,
    })
})
export default perfilVecinoValidator