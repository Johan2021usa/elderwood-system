const mongoose = require("mongoose");

const pedidoSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    fechaPedido:{
        type: String,
        required: true
    },
    estadoPedido:{
        type: String,
        required: true
    }
    
});

module.exports= mongoose.model("pedido", pedidoSchema);