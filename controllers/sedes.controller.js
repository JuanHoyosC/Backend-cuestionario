const sedesCtrl = {};
const Sedes = require('../models/sede');

sedesCtrl.getSedes = async (req, res) => {
    const sedes = await Sedes.find();
    res.json(sedes)
}



module.exports = sedesCtrl