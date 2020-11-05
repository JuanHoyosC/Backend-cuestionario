const mongoose = require('mongoose');
const { Schema } = mongoose

const PreguntasSchema = new Schema({
    Calidad: { type: Array, required: true },
    Compromiso: { type: Array, required: true },
    Conocimiento: { type: Array, required: true },
    Iniciativa: { type: Array, required: true },
    Presentacion_y_asistencia: { type: Array, required: true },
    Trabajo_en_equipo: { type: Array, required: true }
})

module.exports = mongoose.model('preguntas', PreguntasSchema)