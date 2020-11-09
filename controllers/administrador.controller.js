const administradorCtrl = {};
const Administrador = require('../models/Administrador');

//Esta funcion no se usa por el momento
administradorCtrl.getAdministradores = async (req, res) => {
    try {
        const administradores = await Administrador.find();
        res.json(administradores)
        //Si hay un error al guarda enviara una respuestade error
    } catch  {
        res.json({status: "Hubo un error"});
    }
}

administradorCtrl.getAdministrador = async (req, res) => {
    try {
        //Obtiene el adminsitrador que inicia sessión
        const administrador = await Administrador.findOne({'uid': req.params.uid});
        //Envia los datos del administrador que inicia sessión
        res.json(administrador)
        //Si hay un error al guarda enviara una respuestade error
    } catch  {
        res.json({status: "Hubo un error"});
    }
}

administradorCtrl.crearAdministrador = async (req, res) => {
   try {
       //Obtiene los datos enviados desde el front y crea un administrador
        const administrador = new Administrador(req.body);
        //Guarda el administrador en la base de datos
        await administrador.save();
        //Envia una respuesta al front
        res.json({status: "El administrador ha sido registrado"});
        //SI hay un error al guarda enviara una respuestade error
   } catch  {
        res.json({status: "Hubo un error"});
   }
}


administradorCtrl.actualizarAdministrador = async (req, res) => {
   try {
       //Actualiza los empleados con los datos enviados desde el front en el administrador seleccionado
        await Administrador.updateOne({'uid': req.params.uid}, {empleados: req.body})
        //Envia una respuesta correcta al front
        res.json({status: "Se ha actualizado correctamente"});
        //Si hay un error al guarda enviara una respuestade error
   } catch  {
        res.json({status: "Hubo un error"});
   }
}

administradorCtrl.editarEmpleado = async (req, res) => {
   try {
       //Actualiza los empleados con los datos enviado desde el front
        await Administrador.updateOne({'uid': req.params.uid}, {empleados: req.body})
        res.json({status: "Se ha actualizado correctamente"});
        //Si hay un error al guarda enviara una respuestade error
   } catch {
       res.json({status: "Hubo un error"})
   }
}



module.exports = administradorCtrl