import {Schema, model, Types} from "mongoose"

let collection = "perfil obras"
const schema = new Schema({
    unidadVecinal : {type: Number, required: true },
    rampas: {type: Number, required: true},
    personas: {type: Number, required: true},
    hormigonV: {type: Number, required: true},
    nombreEmpresa: {type: String, required: true},
    direccion: { type: Schema.Types.Mixed, required: true},
    tipoDeConstruccion: {type: [String], required: true},
    rubroConstruccion: {type: [String], required: true},
    img: { type:String }
})

const PerfilObra = model(collection, schema)
export default PerfilObra