const mongoose = require("mongoose");

const ingresoSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    fechaIngreso:{
        type: String,
        required: true
    },
    estadoIngreso:{
        type: String,
        required: true
    }
    
});

module.exports= mongoose.model("ingreso", ingresoSchema);