const fs = require("fs");
const dbConcesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));
//
const autos = {
    index: (req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let autos = []
        dbConcesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach(auto=>{
                autos.push(auto)
            })
        })
        autos.forEach(auto=>{
            res.write("Marca: " + auto.marca + "\n");
            res.write("Modelo: " + auto.modelo + "\n");
            res.write("Año: " + auto.anio + "\n");
            res.write("Color: " + auto.color + "\n");
            res.write("-----------------------------------------------------" + "\n\n");
        })
        res.end()
    },
    marca: (req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id = req.params.id;
        let autos = []
        dbConcesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach(auto=>{
                autos.push(auto)
            })
        })
        autos.forEach(auto=>{
            if(auto.marca ==id){
                res.write("Modelo: " + auto.modelo + "\n")
                res.write("Año: " + auto.anio + "\n")
                res.write("Color: " + auto.color + "\n")
                res.write("------------------------------------------------------" + "\n")
                
            }
        })
        res.end()
    }

};

module.exports = autos