const fs = require("fs");
const dbConcesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));
//
const homeController={
    home:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Bienvenidos a nuesta Concesionaria!\n")
    dbConcesionarias.forEach((dato)=>{
        res.write(`--------------------------------
                        \n${dato.sucursal}\n
                   -------------------------------`)
    })
    res.end();
    }
};
module.exports = homeController