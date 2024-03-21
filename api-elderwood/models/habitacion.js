const mongoose = require("mongoose");

const habitacionSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    tipoHabitacion:{
        type: String,
        required: true
    },
    precioPorDia:{
        type: String,
        required: true
    }, 
    disponibilidad:{
        type: String,
        required: true
    }, 
    servicioAdicionalDisponible:{
        type: String,
        required: true
    }
});

module.exports= mongoose.model("habitacion", habitacionSchema);