import {Schema, model} from "mongoose"

const collection = "imagenes"
const schema = new Schema({
    url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
})

const Imagen = model(collection, schema)

export default Imagen