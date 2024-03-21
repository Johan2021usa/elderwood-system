const express = require("express"); 
const informacionTuristicaSchema = require("../models/informacionTuristica");

const router = express.Router();

//crear informacionTuristica
router.post("/informacionTuristica", (req, res) => {
    const informacionTuristica = informacionTuristicaSchema(req.body);
    informacionTuristica.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))

});

//consultar toda la informacionTuristica
router.get("/informacionTuristica", (req, res) => {
    informacionTuristicaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// consultar  informacionTuristica por id
router.get("/informacionTuristica/:id", (req, res) => {
    const { id } = req.params;
    informacionTuristicaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// Actualizar informacionTuristica
router.put("/informacionTuristica/:id", (req, res) => {
    const { id }= req.params;
    const {codigo, cedula, nombres, apellidos, edad, celular, correo}= req.body;
    informacionTuristicaSchema
    .updateOne({ _id: id}, { $set: {codigo, cedula, nombres, apellidos, edad, celular, correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

module.exports = router;