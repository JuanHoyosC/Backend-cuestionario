const preguntasCtrl = {};
const Preguntas = require('../models/Pregunta');

preguntasCtrl.getPreguntas = async (req, res) => {
   try {
       // Obtiene toda la colección de preguntas de la base de datos
        const preguntas = await Preguntas.find();
        res.json(preguntas)
   } catch  {
        res.json({status: "Hubo un error"});
   }
}



module.exports = preguntasCtrl