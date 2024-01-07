import {Schema, model, Types} from "mongoose"

const collection = "rampas"
const schema = new Schema({
nombre: { type: String, required: true, ref: "vecinos" },
telefono: { type: Number, required: true },
correo: { type: String, required: true, ref: "vecinos" },
observacion: { type: String, required: false },
selectedDate: { type: Date, required: true },
direccionRampa: { type: Schema.Types.Mixed, required: true, ref: 'direcciones rampa' },
area: {type: Number, required: true},
unidadVecinal: {type: Number, required: true},
location: { 
    lat: {type: Number, required: true, ref: "direcciones rampa"},
    lng: {type: Number, required: true, ref: "direcciones rampa"}
},
});

const Rampa = model(collection, schema)
export default Rampa


