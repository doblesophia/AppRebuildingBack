import joi from "joi"

let perfilObraValidator = joi.object({
    unidadVecinal: joi.number().min(1).messages({
        "number.empty": "Unidad Vecinal no puede estar vacía",
        "number.min": "Unidad vecinal debe contener al menos un número"
    }),
    rampas: joi.number().messages({
        "number.empty": "Rampas no puede estar vacía",
        "number.min": "Rampas debe contener al menos un número"
    }),
    personas: joi.number().messages({
        "number.empty": "personas no puede estar vacía",
        "number.min": "personas debe contener al menos un número"
    }),
    hormigonV: joi.number().messages({
        "number.empty": "Metros cúbicos no puede estar vacía",
        "number.min": "Metros cúbicos debe contener al menos un número"
    }),
    nombreEmpresa: joi.string().min(1).messages({
        "string.empty": `nombre empresa cannot be an empty field`,
        "string.min": `nombre empresa should have a minimum length of { #limit}`,
    }),
    direccion: joi.string().min(1).messages({
        "string.empty": `direccion obra empresa cannot be an empty field`,
        "string.min": `direccion obra empresa should have a minimum length of { #limit}`,
    }),
    tipoDeConstruccion: joi.string().min(1).messages({
        "string.empty": `Tipo de construcción empresa cannot be an empty field`,
        "string.min": `Tipo de construcción empresa should have a minimum length of { #limit}`,
    }),
    rubroConstruccion: joi.string().min(1).messages({
        "string.empty": `rubro construcción cannot be an empty field`,
        "string.min": `rubro construcción should have a minimum length of { #limit}`,
    }),
    img: joi.string().uri().messages({
        "string.empty": `Tipo de construcción empresa cannot be an empty field`,
    })
})

export default perfilObraValidator