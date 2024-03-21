const express = require("express"); 
const servicioAdicionalSchema = require("../models/servicioAdicional");

const router = express.Router();

//crear servicioAdicional
router.post("/servicioAdicional", (req, res) => {
    const servicioAdicional = servicioAdicionalSchema(req.body);
    servicioAdicional.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))

});

//consultar todos los servicioAdicional
router.get("/ingreso", (req, res) => {
    servicioAdicionalSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// consultar una servicioAdicional por id
router.get("/servicioAdicional/:id", (req, res) => {
    const { id } = req.params;
    servicioAdicionalSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// Actualizar servicioAdicional
router.put("/servicioAdicional/:id", (req, res) => {
    const { id }= req.params;
    const {codigo, servicio, costoDiario}= req.body;
    servicioAdicionalSchema
    .updateOne({ _id: id}, { $set: {codigo, servicio, costoDiario}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

module.exports = router;