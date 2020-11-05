const mongoose = require('mongoose');
const { Schema } = mongoose

const AdmnistadorSchema = new Schema({
    uid: { type: String, required: true },
    email: { type: String, required: true },
    sede: { type: String, required: true },
    empleados: { type: Array, required: true }
})

module.exports = mongoose.model('Administrador', AdmnistadorSchema)