const express = require("express"); 
const hotelSchema = require("../models/hotel");

const router = express.Router();

//crear hotel
router.post("/hotel", (req, res) => {
    const hotel = hotelSchema(req.body);
    hotel.save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))

});

//consultar  hotel
router.get("/hotel", (req, res) => {
    hotelSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// consultar hotel por id
router.get("/hotel/:id", (req, res) => {
    const { id } = req.params;
    hotelSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

// Actualizar hotel
router.put("/hotel/:id", (req, res) => {
    const { id }= req.params;
    const {codigo, nombreHotel, descripcion, numeroContacto, correo}= req.body;
   hotelSchema
    .updateOne({ _id: id}, { $set: {codigo, nombreHotel, descripcion, numeroContacto, correo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({menssag: error}))

});

module.exports = router;