const mongoose = require('mongoose');
const { Schema } = mongoose

const SedesSchema = new Schema({
    "Campeche": { type: Array, required: true },
    "CDMX": { type: Array, required: true },
    "Chiapas": { type: Array, required: true },
    "Ciudad del carmen": { type: Array, required: true },
    "Durango": { type: Array, required: true },
    "Hidalgo": { type: Array, required: true },
    "Naucalpan": { type: Array, required: true },
    "San Luis Postosi": { type: Array, required: true },
    "Tabasco": { type: Array, required: true },
    "Toluca": { type: Array, required: true },
    "Zacatecas":{ type: Array, required: true }
})

module.exports = mongoose.model('sedes', SedesSchema)
