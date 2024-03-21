const express = require("express"); 
const administradorSchema = require("../models/administrador");

const router = express.Router();

//crear administrador
router.post("/administrador", (req, res) => {
    const administrador = administradorSchema(req.body);
    administrador.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))

});

//consultar  administrador
router.get("/administrador", (req, res) => {
    administradorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// consultar  administrador por id
router.get("/administrador/:id", (req, res) => {
    const { id } = req.params;
    administradorSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// Actualizar administrador
router.put("/administrador/:id", (req, res) => {
    const { id }= req.params;
    const {codigo, nombreLugar, descripcioninformacion, complementoInformacion}= req.body;
    administradorSchema
    .updateOne({ _id: id}, { $set: {codigo, nombreLugar, descripcioninformacion, complementoInformacion}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

module.exports = router;