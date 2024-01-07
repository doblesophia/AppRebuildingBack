import { Schema, model } from "mongoose";

// Importa el modelo de Direccion
import Direccion from "./Direccion.js"; // Asegúrate de proporcionar la ruta correcta al archivo

const collection = 'empresas';

const schema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  nombreEmpresa: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  role: { type: Number, default: 1 },
  
  // Agrega un campo de referencia a Direccion
 
});

const Empresa = model(collection, schema);

export default Empresa;