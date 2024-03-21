const mongoose = require("mongoose");

const informacionTuristicaSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    nombreLugar:{
        type: String,
        required: true
    },
    descripcioninformacion:{
        type: String,
        required: true
    },
    complementoInformacion:{
        type: String,
        required: true
    }


});

module.exports= mongoose.model("informacionTuristica", informacionTuristicaSchema);