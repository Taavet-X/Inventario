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

    const numero_pedido = req.body['numero_pedido']
    const nombre_cliente = req.body['nombre_cliente']
    const direccion = req.body['direccion']   
    const celular = req.body['celular']
    const pedido = req.body['pedido']
    const precio_total_pedido = req.body['precio_total_pedido']
    const hora_reserva = req.body['hora_reserva']
      
    
  con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT cliente.direccion AS direccion,mesa.id_mesa AS id_mesa, DATE_FORMAT(reserva.hora_reserva,'%Y-%m-%d %H:%i:%s') AS hora_reserva FROM reserva JOIN cliente ON cliente.direccion = reserva.direccion JOIN estado ON estado.id_estado = reserva.id_estado JOIN mesa ON mesa.id_mesa = reserva.id_mesa WHERE reserva.id_mesa = ? AND reserva.hora_reserva BETWEEN ? AND ? ;";   
    // var values = [precio_total_pedido,horamenos.format('YYYY-MM-DD HH:mm:ss'),horaactual.format('YYYY-MM-DD HH:mm:ss')]
    console.log(values)
    con.query(sql, values, function (err, result) {            
      if (err) throw err;
        console.log(result)
        if(result.length > 0){
          res.json("No Hay Disponibilidad")
        }else{
          con.connect(function(err) {
            if (err) throw err;
            var sql = "SELECT cliente.direccion AS direccion,mesa.id_mesa AS id_mesa, DATE_FORMAT(reserva.hora_reserva,'%Y-%m-%d %H:%i:%s') AS hora_reserva FROM reserva JOIN cliente ON cliente.direccion = reserva.direccion JOIN estado ON estado.id_estado = reserva.id_estado JOIN mesa ON mesa.id_mesa = reserva.id_mesa WHERE reserva.id_mesa = ? AND reserva.hora_reserva BETWEEN ? AND ? ;";   
            var values = [precio_total_pedido,horaactual.format('YYYY-MM-DD HH:mm:ss'),horamas.format('YYYY-MM-DD HH:mm:ss')]
            con.query(sql, values, function (err, result) {
              if (err) throw err;
                console.log(result)
                if(result.length > 0){
                  res.json("No Hay Disponibilidad")
                }else{
                  con.connect(function(err) {
                    if (err) throw err;
                    var sql = "INSERT INTO cliente (direccion,nombre_cliente,numero_pedido,celular,pedido) VALUES (?);";
                    var values = [
                      [direccion,nombre_cliente,numero_pedido,celular,pedido]
                    ]
                    con.query(sql, values, function (err, result) {
                      if (err) throw err;
                      var sql = "INSERT INTO reserva (hora_reserva,id_mesa,id_estado,direccion) VALUES (?);";
                      var values = [
                      [hora_reserva,precio_total_pedido, 1 /* estado 1 es pendiente creado en la bd*/,direccion]
                    ]
                    con.query(sql, values, function (err, result) {
                      if (err) throw err;
                      res.json("1 record inserted")        
                    });       
                    });
                  });  
                }                           
            });
          });          
        }
    });
  });  
        
})
  
//READ Solicitar Información
router.get('/', (req, res) => {
  
  con.connect(function(err) {
    if (err) throw err;    
    var sql = "SELECT reserva.id_reserva, cliente.direccion AS direccion, cliente.numero_pedido AS numero_pedido, cliente.celular AS celular, mesa.precio_total_pedido AS precio_total_pedido, DATE_FORMAT(reserva.hora_reserva,'%m/%d/%Y %h:%i %p') AS hora_reserva, estado.descripcion AS estado  FROM reserva JOIN cliente ON cliente.direccion = reserva.direccion JOIN estado ON estado.id_estado = reserva.id_estado JOIN mesa ON mesa.id_mesa = reserva.id_mesa";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.json(result)        
    });
  });   
})
  
//READ Solicitar Información de un producto
router.get('/:id_reserva', (req, res) => {
  con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT reserva.id_reserva, cliente.direccion AS direccion, cliente.numero_pedido AS numero_pedido, cliente.celular AS celular, mesa.precio_total_pedido AS precio_total_pedido, DATE_FORMAT(reserva.hora_reserva,'%Y-%m-%d %H:%i:%s') AS hora_reserva, estado.descripcion AS estado  FROM reserva JOIN cliente ON cliente.direccion = reserva.direccion JOIN estado ON estado.id_estado = reserva.id_estado JOIN mesa ON mesa.id_mesa = reserva.id_mesa WHERE id_reserva = ?;";   
    var values = [req.params.id_reserva]
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      res.json(result)        
    });
  });   
})
  
//UPDATE actualizar información que ya existe
router.put('/:id_reserva', (req, res) => {  
    const numero_pedido = req.body['numero_pedido']
    const nombre_cliente = req.body['nombre_cliente']
    const direccion = req.body['direccion']
    const celular = req.body['celular']
    const pedido = req.body['pedido']
    const precio_total_pedido = req.body['precio_total_pedido']
    const hora_reserva = req.body['hora_reserva']
    const estado = req.body['estado']
  con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE reserva SET numero_pedido = ?, nombre_cliente = ?, direccion = ?,celular = ? ,pedido = ?, precio_total_pedido = ?, hora_reserva = ?, id_estado = ? WHERE id_reserva = ?; ";
    var values = [numero_pedido, nombre_cliente,direccion,celular,pedido,precio_total_pedido,hora_reserva,estado, req.params.id_reserva]      
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      res.json("Number of records updated: " + result.affectedRows)        
    });
  });        
})

//UPDATE actualizar estado
router.put('/estado/:id_reserva', (req, res) => {  
  const id_estado = req.body['id_estado']
  console.log(req.body)
  con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE reserva SET id_estado = ? WHERE id_reserva = ?; ";
    var values = [id_estado, req.params.id_reserva]      
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      res.json("Number of records updated: " + result.affectedRows)        
    });
  });        
})
    
//DELETE Borrar información 
router.delete('/:id_reserva', (req, res) => {
  con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM reserva WHERE id_reserva = ?";
    var values = [req.params.id_reserva]      
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      res.json("Number of records deleted: " + result.affectedRows)        
    });
  });   
})

module.exports = router
