
// import joi from "joi"
// import Joi from "joi"


// let obrasValidator = Joi.object({
//     userId: Joi.objectId().required().messages({
//       "any.required": "Obras ID required"
//     }),
//     coordenadas: {
//       latitud: Joi.number().messages({
//         "any.number": "El dato ingresado debe ser un número",
//         "number.empty": "El campo requerido debe llenarse"
//       }),
//       longitud: Joi.number().messages({
//         "any.number": "El dato ingresado debe ser un número",
//         "number.empty": "El dato requerido debe llenarse"
//       })
//     },
//     direccion: Joi.string().min(3).messages({
//       "string.empty": "El campo requerido debe ser llenado",
//       "string.min": "La dirección debe tener 3 caracteres o más"
//     }),
//     nombreEmpresa: Joi.string().min(2).messages({
//       "string.empty": "El campo requerido debe ser completado",
//       "string.min": "El campo debe tener al menos 2 caracteres"
//     }),
//     telefono: Joi.number().min(8).messages({
//       "number.empty": "El campo debe ser llenado",
//       "number.min": "El número debe contener 8 caracteres como mínimo"
//     }),
//     correo: Joi.string().min(6).messages({
//       "string.empty": "El campo debe ser llenado",
//       "string.min": "El mail debe tener al menos 6 caracteres "
//     }),
//     observacion: Joi.string().min(6).messages({
//       "string.empty": "El campo debe ser llenado",
//       "string.min": "La observación debe tener al menos 6 caracteres"
//     }),
//     homigonV: {
//       largo: Joi.number().min(1).messages({
//         "number.empty": "El campo debe ser rellenado",
//         "number.min": "El campo debe tener al menos un número"
//       }),
//       ancho: Joi.number().min(1).messages({
//         "number.empty": "El campo debe ser rellenado",
//         "number.min": "El campo debe tener al menos un número"
//       }),
//       alto: Joi.number().min(1).messages({
//         "number.empty": "El campo debe ser rellenado",
//         "number.min": "El campo debe tener al menos un número"
//       }),
//       volumen: Joi.number().min(1).messages({
//         "number.empty": "El campo debe ser rellenado",
//         "number.min": "El campo debe tener al menos un número"
//       })
//     },
//     MaderaV: {
//       largo: Joi.number().min(1).messages({
//         "number.empty": "El campo debe ser rellenado",
//         "number.min": "El campo debe tener al menos un número"
//       }),
//       ancho: Joi.number().min(1).messages({
//         "number.empty": "El campo debe ser rellenado",
//         "number.min": "El campo debe tener al menos un número"
//       }),
//       alto: Joi.number().min(1).messages({
//         "number.empty": "El campo debe ser rellenado",
//         "number.min": "El campo debe tener al menos un número"
//       }),
//       volumen: Joi.number().min(1).messages({
//         "number.empty": "El campo debe ser rellenado",
//         "number.min": "El campo debe tener al menos un número"
//       })
//     },
//     selectedDate: Joi.date().min("now").max("1-1-2100"),
//   })

// export default obrasValidator