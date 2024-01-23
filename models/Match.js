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
  distance: {
    type: Number,
    required:true
  },
});

const Match = model(collection, schema)
export default Match


