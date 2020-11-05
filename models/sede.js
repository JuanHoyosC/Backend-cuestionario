const mongoose = require('mongoose');
const { Schema } = mongoose

const SedesSchema = new Schema({
    Campeche: { type: Array, required: true },
    CDMX: { type: Array, required: true },
    Hidalgo: { type: Array, required: true },
    Chiapas: { type: Array, required: true },
    Tabasco: { type: Array, required: true },
    "San Luis": { type: Array, required: true },
    "Edo Mex": { type: Array, required: true },
    Zacatecas: { type: Array, required: true }
})

module.exports = mongoose.model('sedes', SedesSchema)