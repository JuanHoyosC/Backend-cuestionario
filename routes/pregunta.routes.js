const express = require('express');
const router = express.Router();
const preguntas = require('../controllers/preguntas.controller')

router.get('/preguntas', preguntas.getPreguntas)


module.exports = router