import mongoose from "mongoose"
import {Schema, model, Types} from "mongoose"

const collection = 'matches'
const schema = new Schema({
  obra: {
    type: Types.ObjectId,
    ref: 'obra',
    required: true
  },
  rampa: {
    type: Types.ObjectId,
    ref: 'rampas',
    required: true
  },
  distancia: {
    type: Number,
    required:true
  },
  nombreEmpresa:{
    type: String,
    required: true,
    ref: 'obra'
  },
 direccion:{
  type: String,
  required: true,
  ref: "obra"
 },
 direccionRampas:{
  type: String,
  required: true,
  ref: "rampas"
 },
 hormigonV:{
  type: Number,
  required: true,
  ref: "obra"
 }
  // Otros campos necesarios
});

const Match = model(collection, schema)
export default Match


