const administradorCtrl = {};
const Administrador = require('../models/Administrador');

administradorCtrl.getAdministradores = async (req, res) => {
    const administradores = await Administrador.find();
    res.json(administradores)
}

administradorCtrl.getAdministrador = async (req, res) => {
    const administrador = await Administrador.findOne({'uid': req.params.uid});
    res.json(administrador)
}

administradorCtrl.crearAdministrador = async (req, res) => {
    const administrador = new Administrador(req.body);
    await administrador.save();
    res.json({status: "El administrador ha sido registrado"});
}


administradorCtrl.actualizarAdministrador = async (req, res) => {
    await Administrador.updateOne({'uid': req.params.uid}, {empleados: req.body})
    res.json({status: "Se ha actualizado correctamente"});
}

administradorCtrl.editarEmpleado = async (req, res) => {
    await Administrador.updateOne({'uid': req.params.uid}, {empleados: req.body})
    res.json({status: "Se ha actualizado correctamente"});
}



module.exports = administradorCtrl