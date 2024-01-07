import mongoose from "mongoose";
import { Schema, model, Types } from "mongoose";
import Empresa from "./Empresa.js";

const collection = "obra"
const schema = new Schema({

//     coordenadas: {
//         latitud: { type: Number, required: true },
//         longitud: { type: Number, required: true },
//   },
nombreEmpresa: { type: String, required: true, ref: "empresas" },
telefono: { type: Number, required: true },
correo: { type: String, required: true, ref: "empresas" },
observacion: { type: String, required: false },
hormigonV: { type: Number, required: true },
maderaV: { type: Number, required: true },
selectedDate: { type: Date, required: true },
direccion: { type: Schema.Types.Mixed, required: true, ref: 'direcciones' },
});

const Obra = model(collection, schema)
export default Obra