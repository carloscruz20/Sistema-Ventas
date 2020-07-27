var express= require('express');
var UserController = require('../controllers/UserController');

var api= express.Router();

api.post('/registrar',UserController.registrar);
api.post('/login',UserController.login);
api.get('/usuarios',UserController.listar);
api.put('/user/editar/:id',UserController.editar);
api.get('/user/:id',UserController.get_user)

module.exports=api;