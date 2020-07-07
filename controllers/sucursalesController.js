const fs = require("fs");
const dbConcesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));
//
const sucursales = {
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        dbConcesionarias.forEach((concesionaria)=>{
            res.write(concesionaria.sucursal + '\n\n');
            res.write(concesionaria.direccion + '\n\n');
            res.write(concesionaria.telefono + '\n\n');
            res.write("------------------------------------------------------------------------------------------" + '\n\n');
        })
        res.end()
    },
    sucursal:(req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id = req.params.id;
        dbConcesionarias.forEach((concesionaria)=>{
            if(id == concesionaria.sucursal){
                res.write(concesionaria.sucursal + '\n\n');
                res.write(concesionaria.direccion + '\n\n');
                res.write(concesionaria.telefono + '\n\n');
                concesionaria.autos.forEach(concesionaria=>{
                    res.write("Marca: " + concesionaria.marca + "\n");
                    res.write("Modelo: " + concesionaria.modelo + "\n");
                    res.write("Año: " + concesionaria.anio + "\n");
                    res.write("-------------------------------------------------" + '\n\n');
                })
                res.write("Total de vehiculos: " + concesionaria.autos.length)
                res.end()
            }
        })
        res.end("No se encuentra la concesionaria")
    }
}

module.exports = sucursales