const express = require("express"); 
const reservaSchema = require("../models/reserva");

const router = express.Router();

//crear reserva
router.post("/reserva", (req, res) => {
    const reserva = reservaSchema(req.body);
    reserva.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))

});

//consultar todas las reserva
router.get("/reserva", (req, res) => {
    reservaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// consultar reserva por id
router.get("/reserva/:id", (req, res) => {
    const { id } = req.params;
    reservaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// Actualizar reserva
router.put("/reserva/:id", (req, res) => {
    const { id }= req.params;
    const {codigo, fechaInicioReserva, fechaFinReserva, estadoReserva}= req.body;
    reservaSchema
    .updateOne({ _id: id}, { $set: {codigo, fechaInicioReserva, fechaFinReserva, estadoReserva}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

module.exports = router;