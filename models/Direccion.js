import { Schema, Types, model } from "mongoose";

const collection = 'direcciones'
const schema = new Schema ({
    direccion: {type: String, required: true},
    location: { 
        lat: {type: Number, required: true},
        lng: {type:Number, required: true}
    },
    correo: {type: String, ref: "empresas"}
})

const Direccion = model(collection, schema)


export default Direccion