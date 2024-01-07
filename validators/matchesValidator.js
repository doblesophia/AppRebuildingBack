import joi from "joi"
import joiOid from "joi-oid"

let matchesValidator = joi.object({
    obra: joiOid.objectId().messages({
        "any.required": "Id obra required"
    }),
    rampa: joiOid.objectId().messages({
        "any.required": "Id obra required"
    }),
    distancia: joi.number().min(1).messages({
        "any.required": "Número requerido",
        "number.min": "Debes ingresar al menos un número"
    }),
    nombreEmpresa: joi.string().min(1).messages({
        "any.required": "At least one letter is required",
        "string.min": "Debes ingresar al menos 1 letra"
    }),
    direccion: joi.string().min(2).messages({
        "any.required": "At least one letter is required",
        "string.min": "Debes ingresar al menos 2 letra"
    }),
     direccionRampas: joi.string().min(2).messages({
        "any.required": "At least one letter is required",
        "string.min": "Debes ingresar al menos 2 letra"
     }),
     hormigonV: joi.number().min(1).messages({
        "any.required": "Número requerido",
        "number.min": "Debes ingresar al menos un número"
     })
})

export default matchesValidator