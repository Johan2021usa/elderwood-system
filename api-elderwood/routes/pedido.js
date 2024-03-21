const express = require("express"); 
const pedidoSchema = require("../models/pedido");

const router = express.Router();

//crear pedido
router.post("/pedido", (req, res) => {
    const pedido = pedidoSchema(req.body);
    pedido.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))

});

//consultar todos los pedido
router.get("/pedido", (req, res) => {
    pedidoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// consultar  salida por id
router.get("/pedido/:id", (req, res) => {
    const { id } = req.params;
    pedidoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// Actualizar pedido
router.put("/pedido/:id", (req, res) => {
    const { id }= req.params;
    const {codigo, descripcion, fechaPedido, estadopPedido}= req.body;
    pedidoSchema
    .updateOne({ _id: id}, { $set: {codigo, descripcion, fechaPedido, estadopPedido}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

module.exports = router;