const mongoose = require("mongoose");

const administradorSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    cedula:{
        type: String,
        required: true
    },
    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    }, 
    edad:{
        type: String,
        required: true
    },
    celular:{
        type: String,
        required: true
    }, 
    correo:{
        type: String,
        required: true
    }
});

module.exports= mongoose.model("administrador", administradorSchema);