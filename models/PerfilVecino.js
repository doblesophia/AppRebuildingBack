import {Schema, model, Types} from "mongoose"

let collection = "perfil vecinos"
const schema = new Schema({
   nombre: {type: String, required: true},
   apellido: {type: String, required: true},
   email: {type: String, required: true},
   comuna: {type: String, required: true},
   unidadVecinal: {type: Number, required: true},
    img: { type:String }
})

const PerfilObra = model(collection, schema)
export default PerfilObra