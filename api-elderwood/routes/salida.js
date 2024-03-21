const express = require("express"); 
const salidaSchema = require("../models/salida");

const router = express.Router();

//crear salida
router.post("/salida", (req, res) => {
    const salida = salidaSchema(req.body);
    salida.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))

});

//consultar todas las salida
router.get("/salida", (req, res) => {
    salidaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// consultar  salida por id
router.get("/salida/:id", (req, res) => {
    const { id } = req.params;
    salidaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// Actualizar salida
router.put("/salida/:id", (req, res) => {
    const { id }= req.params;
    const {codigo, fechaSalida}= req.body;
    ingresoSchema
    .updateOne({ _id: id}, { $set: {codigo, fechaSalida}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

module.exports = router;