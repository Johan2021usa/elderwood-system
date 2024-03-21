const mongoose = require("mongoose");

const reservaSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    fechaInicioReserva:{
        type: String,
        required: true
    },
    fechaFinReserva:{
        type: String,
        required: true
    },
    estadoReserva:{
        type: String,
        required: true
    }
    
});

module.exports= mongoose.model("reserva", reservaSchema);