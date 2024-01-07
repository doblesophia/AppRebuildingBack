import { Schema, Types, model } from "mongoose";

const collection = 'vecinos'
const schema = new Schema ({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true},
    role: {type: Number, default: 0}
})

const Vecino = model(collection, schema)


export default Vecino