const express = require("express"); 
const mongoose = require("mongoose");
require("dotenv").config();
const habitacionRoutes = require("./routes/habitacion");
const clienteRoutes = require("./routes/cliente");
const ingresoRoutes = require("./routes/ingreso");
const servicioAdicionalRoutes = require("./routes/servicioAdicional");
const salidaRoutes = require("./routes/salida");
const empleadoRoutes = require("./routes/empleado");
const reservaRoutes = require("./routes/reserva");
const informacionTuristicaRoutes = require("./routes/informacionTuristica");
const administradorRoutes = require("./routes/administrador");
const pedidoRoutes = require("./routes/pedido");
const hotelRoutes = require("./routes/hotel");


const bodyParser = require("body-parser");


const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json());
app.use("/api", habitacionRoutes);
app.use("/api", clienteRoutes);
app.use("/api", ingresoRoutes);
app.use("/api", servicioAdicionalRoutes);
app.use("/api", salidaRoutes);
app.use("/api", empleadoRoutes);
app.use("/api", reservaRoutes);
app.use("/api", informacionTuristicaRoutes);
app.use("/api", administradorRoutes);
app.use("/api", pedidoRoutes);
app.use("/api", hotelRoutes);


//rutas
app.get("/",( req, res) => { 
    res.send("Bienvenido a mi Api Rest");
});

    //conexion a la base de datos Mongodb Atlas
    mongoose.connect(process.env.MONGODB_URI) 
    .then(() => console.log("Conectado a Mongodb Atlas"))
    .catch((error) => console.log(error));


app.listen(port, () => console.log("Servidor se esta escuchando por el puerto",port));