const sedesCtrl = {};
const Sedes = require('../models/sede');

sedesCtrl.getSedes = async (req, res) => {
    // Recoge toda la coleccion de las sedes
    try {
        const sedes = await Sedes.find();
        res.json(sedes)
        // Si hay una error en la base de datos entrará al catch
    } catch  {
        res.json({status: "Hubo un error"});
    }
}



module.exports = sedesCtrl