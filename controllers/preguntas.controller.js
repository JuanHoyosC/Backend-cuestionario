const preguntasCtrl = {};
const Preguntas = require('../models/Pregunta');

preguntasCtrl.getPreguntas = async (req, res) => {
    const preguntas = await Preguntas.find();
    res.json(preguntas)
}



module.exports = preguntasCtrl