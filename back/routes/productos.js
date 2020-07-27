var express= require('express');
var ProductoController = require('../controllers/ProductosController');
var multipart = require('connect-multiparty');
var path = multipart({uploadDir:'./uploads/productos'});

var api= express.Router();

api.post('/producto/registrar',path,ProductoController.registrar);
api.get('/productos/:titulo?',ProductoController.listar);
api.put('/producto/editar/:id/:img?',path,ProductoController.editar);
api.get('/producto/:id',ProductoController.obtener_producto);
api.delete('/productos/:id',ProductoController.eliminar);
api.put('/producto/stock/:id',ProductoController.update_stock);
api.get('/producto/img/:img',ProductoController.get_img);

module.exports=api;