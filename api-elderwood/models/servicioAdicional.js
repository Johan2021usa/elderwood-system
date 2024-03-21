const mongoose = require("mongoose");

const servicioAdicionalSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    servicio:{
        type: String,
        required: true
    },
    costoDiario:{
        type: String,
        required: true
    }

});

module.exports= mongoose.model("servicioAdicional", servicioAdicionalSchema);