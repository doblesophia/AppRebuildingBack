import { Schema, Types, model } from "mongoose";

const collection = 'direcciones rampa'
const schema = new Schema ({
    direccionRampa: {type: String, required: true},
    location: { 
        lat: {type: Number, required: true},
        lng: {type:Number, required: true}
    },
    // viewport: {
    //     northeast:{
    //         lat: {type: Number},
    //         lng: {type: Number}
    //     },
    //     southwest: {
    //         lat: {type: Number},
    //         lng: {type: Number}
    //     }
    // }
})

const Direccion = model(collection, schema)


export default Direccion