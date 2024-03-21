const mongoose = require("mongoose");

const  hotelSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    nombreHotel:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    numeroContacto:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    }

});

module.exports= mongoose.model("hotel", hotelSchema);