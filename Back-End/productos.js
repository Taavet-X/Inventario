const express = require("express")
const router = express.Router()
const mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "developer",
    database: "inventario_ohlala"
  });
  
  //CREATE Enviar nueva Información
  router.post('/', (req, res) => {   
      const nombre_producto = req.body['nombre_producto']
      const precio = req.body['precio']
      const descripcion = req.body['descripcion']
      con.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO productos (nombre_producto, precio, descripcion) VALUES (?);";
        var values = [
          [nombre_producto,precio,descripcion]
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
      var sql = "SELECT * FROM productos";
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result)        
      });
    });   
  })
  
  //READ Solicitar Información de un producto
  router.get('/:id_producto', (req, res) => {
    con.connect(function(err) {
      if (err) throw err;    
      var sql = "SELECT * FROM productos WHERE id_producto = ?;";
      var values = [req.params.id_producto]
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.json(result)        
      });
    });   
  })
  
  //UPDATE actualizar información que ya existe
  router.put('/:id_producto', (req, res) => {  
    const nombre_producto = req.body['nombre_producto']
    const precio = req.body['precio']
    const descripcion = req.body['descripcion']
    con.connect(function(err) {
      if (err) throw err;
      var sql = "UPDATE productos SET nombre_producto = ?, precio = ?, descripcion = ? WHERE id_producto = ?; ";
      var values = [nombre_producto, precio,descripcion, req.params.id_producto]      
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.json("Number of records updated: " + result.affectedRows)        
      });
    });        
  })
    
  //DELETE Borrar información 
  router.delete('/:id_producto', (req, res) => {
    con.connect(function(err) {
      if (err) throw err;
      var sql = "DELETE FROM productos WHERE id_producto = ?";
      var values = [req.params.id_producto]      
      con.query(sql, values, function (err, result) {
        if (err) throw err;
        res.json("Number of records deleted: " + result.affectedRows)        
      });
    });   
  })

module.exports = router