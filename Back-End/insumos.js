const express = require("express")
const router = express.Router()
const mysql = require('mysql2');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "developer",
    database: "inventario_ohlala"
  });
  
  //CREATE Enviar nueva Información
  router.post('/', (req, res) => {   
      
      const nombre_insumo = req.body['nombre_insumo']
      // const cantidad = req.body['cantidad']
      let fecha_caducidad = req.body['fecha_caducidad']
      if (fecha_caducidad == "") {
        fecha_caducidad = null
      }
      console.log(fecha_caducidad);
      con.connect(function(err) {
        if (err) res.json("error");
        let sql = "INSERT INTO insumos (nombre_insumo,fecha_caducidad) VALUES (?);";
        let values = [
          [nombre_insumo,fecha_caducidad]
        ]
        con.query(sql, values, function (err, result) {
          if (err) throw err;
          res.json("1 record inserted")        
        });
      });    
  })
  
  //READ Solicitar Información
  router.get('/', (req, res) => {
    con.connect(function(err) {
      if (err) throw err;    
      let sql = "SELECT id_insumos,nombre_insumo,DATE_FORMAT(fecha_caducidad,'%Y-%m-%d') AS fecha_caducidad FROM insumos";
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result) 
        console.log(result)       
      });
    });     
  })
  
  //READ Solicitar Información de un producto
  router.get('/:id_insumos', (req, res) => {
    con.connect(function(err) {
      if (err) throw err;    
      let sql = "SELECT * FROM insumos WHERE id_insumos = ?;";
      let values = [req.params.id_insumos]
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.json(result)        
      });
    });   
  })
  
  //UPDATE actualizar información que ya existe
  router.put('/:id_insumos', (req, res) => {  
    const nombre_insumo = req.body['nombre_insumo']
    const cantidad = req.body['cantidad']
    const fecha_caducidad = req.body['fecha_caducidad']
    con.connect(function(err) {
      if (err) throw err;
      let sql = "UPDATE insumos SET nombre_insumo = ?, cantidad = ?, fecha_caducidad = ? WHERE id_insumos = ?; ";
      let values = [nombre_insumo, cantidad,fecha_caducidad, req.params.id_insumos]      
      con.query(sql, values, function (err, result) {
        if (err){
          console.log(err)
          res.status(500).json(err)
        } else{
          res.json("Number of records updated: " + result.affectedRows)        
        }        
      });
    });        
  })
    
  //DELETE Borrar información 
  router.delete('/:id_insumos', (req, res) => {
    con.connect(function(err) {
      if (err) throw err;
      let sql = "DELETE FROM insumos WHERE id_insumos = ?";
      let values = [req.params.id_insumos]      
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.json("Number of records deleted: " + result.affectedRows)        
      });
    });   
  })

module.exports = router