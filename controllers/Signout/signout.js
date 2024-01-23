import Empresa from "../../models/Empresa.js";
import Vecino from "../../models/Vecino.js";

const signOutController = async (req, res, next) => {
  console.log("iniciando controlador")
  console.log(req.user)
  try {

    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    let user;

    if (req.user.role === 1) {
      // El usuario es una Empresa
      user = await Empresa.findOneAndUpdate(
        { email: req.user.email }, // Cambiado de email a correo
        { online: false },
        { new: true } 
      );
      
    } else if (req.user.role === 0) {
      // El usuario es un Vecino
      user = await Vecino.findOneAndUpdate(
        { email: req.user.email }, // Cambiado de email a correo
        { online: false },
        { new: true } 
      );
      
    } else {
      return res.status(400).json({ message: 'Modelo de usuario no válido' });
    }

    return res.status(200).json({
      message: 'User signout!',
      user,
    });
  } catch (error) {
    console.error('Error en signOutController:', error)
    next(error);
  }
};

export default signOutController;