const express = require("express"); 
const empleadoSchema = require("../models/empleado");

const router = express.Router();

//crear empleado
router.post("/empleado", (req, res) => {
    const empleado = empleadoSchema(req.body);
    empleado.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))

});

//consultar todos los empleados
router.get("/empleado", (req, res) => {
    empleadoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// consultar un empleado por id
router.get("/empleado/:id", (req, res) => {
    const { id } = req.params;
    empleadoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// Actualizar empleado
router.put("/empleado/:id", (req, res) => {
    const { id }= req.params;
    const {codigo, cedula, nombres, apellidos, cargo, edad, celular, correo}= req.body;
    empleadoSchema
    .updateOne({ _id: id}, { $set: {codigo, cedula, nombres, apellidos, cargo, edad, celular, correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

module.exports = router;