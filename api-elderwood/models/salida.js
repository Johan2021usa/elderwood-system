const mongoose = require("mongoose");

const salidaSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    fechaSalida:{
        type: String,
        required: true
    }
    
});

module.exports= mongoose.model("salida", salidaSchema);