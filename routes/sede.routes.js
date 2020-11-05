const express = require('express');
const router = express.Router();
const sedes = require('../controllers/sedes.controller')

router.get('/sedes', sedes.getSedes)


module.exports = router