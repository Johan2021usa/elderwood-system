const express = require("express"); 
const reservaSchema = require("../models/reserva");
const cors = require('cors'); // import cors library
const router = express.Router();

router.use(
    cors(
        {origin: "http://localhost:4200"}
    )
);

/** Node by default doesn't allow to use the API by cors origin,
 * hence, we must install CORS library in order to accept any origin.
 * 
 * This was done, becuase angular app wasn't able to consume any resource,
 * form this restful api; since, they are different origins...
 * 
 * ==> npm i cors
*/

// GET all reservas
router.get("/reserva", (req, res) => {
    reservaSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}));
});

// Create reserva
router.post("/reserva", (req, res) => {
    const reserva = reservaSchema(req.body);
    reserva.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

// consultar reserva por id
router.get("/reserva/:id", (req, res) => {
    const { id } = req.params;
    reservaSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}));
});

// Actualizar reserva
router.put("/reserva/:id", (req, res) => {
    const { id }= req.params;
    const {codigo, fechaInicioReserva, fechaFinReserva, estadoReserva}= req.body;
    reservaSchema.updateOne(
        { _id: id}, 
        { $set: {codigo, fechaInicioReserva, fechaFinReserva, estadoReserva}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}));
});

module.exports = router;