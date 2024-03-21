const express = require("express"); 
const clienteSchema = require("../models/cliente");

const router = express.Router();

//crear cliente
router.post("/cliente", (req, res) => {
    const cliente = clienteSchema(req.body);
    cliente.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))

});

//consultar todos los clientes
router.get("/cliente", (req, res) => {
    clienteSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// consultar una cliente por id
router.get("/cliente/:id", (req, res) => {
    const { id } = req.params;
    clienteSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// Actualizar cliente
router.put("/cliente/:id", (req, res) => {
    const { id }= req.params;
    const {cedula, nombres, apellidos, edad, ciudadResidencia, celular, correo}= req.body;
    clienteSchema
    .updateOne({ _id: id}, { $set: {cedula, nombres, apellidos, edad, ciudadResidencia, celular, correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

module.exports = router;