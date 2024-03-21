const express = require("express"); 
const habitacionSchema = require("../models/habitacion");

const router = express.Router();

//crear habitacion
router.post("/habitacion", (req, res) => {
    const habitacion = habitacionSchema(req.body);
    habitacion.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))

});

//consultar todas las habitaciones 
router.get("/habitacion", (req, res) => {
    habitacionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// consultar una habitacion por id
router.get("/habitacion/:id", (req, res) => {
    const { id } = req.params;
    habitacionSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// Actualizar habitacion
router.put("/habitacion/:id", (req, res) => {
    const { id }= req.params;
    const {codigo, tipoHabitacion, precioPorDia, disponibilidad, servicioAdicionalDisponible}= req.body;
    habitacionSchema
    .updateOne({ _id: id}, { $set: {codigo, tipoHabitacion, precioPorDia, disponibilidad, servicioAdicionalDisponible}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

module.exports = router;