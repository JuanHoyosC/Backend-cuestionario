const express = require('express');
const router = express.Router();
const administrador = require('../controllers/administrador.controller')

router.get('/administradores', administrador.getAdministradores)
router.get('/administrador/:uid', administrador.getAdministrador)
router.post('/administrador', administrador.crearAdministrador)
router.put('/administrador/:uid', administrador.actualizarAdministrador)
router.put('/empleados/:uid', administrador.editarEmpleado)


module.exports = router