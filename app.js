const express = require("express");
const app = express()

// Rutas

const routeHome = require("./routes/home");
const routeSucursales = require("./routes/sucursales");
const routeMarcas = require("./routes/marcas");
const routeAutos = require("./routes/autos");

// Servidor

// Módulos de rutas
app.use("/",routeHome);
app.use("/sucursales",routeSucursales);
app.use("/marcas", routeMarcas);
app.use("/autos", routeAutos);

app.listen(3030,() => console.log("Servidor levantado en el puerto 3030"))
