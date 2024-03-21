const express = require("express"); 
const ingresoSchema = require("../models/ingreso");

const router = express.Router();

//crear ingreso
router.post("/ingreso", (req, res) => {
    const ingreso = ingresoSchema(req.body);
    ingreso.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))

});

//consultar todos los ingreso
router.get("/ingreso", (req, res) => {
    ingresoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// consultar una ingreso por id
router.get("/ingreso/:id", (req, res) => {
    const { id } = req.params;
    ingresoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// Actualizar ingreso
router.put("/ingreso/:id", (req, res) => {
    const { id }= req.params;
    const {codigo, fechaIngreso, estadoIngreso}= req.body;
    ingresoSchema
    .updateOne({ _id: id}, { $set: {codigo, fechaIngreso, estadoIngreso}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

module.exports = router;