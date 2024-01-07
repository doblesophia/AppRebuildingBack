import Empresa from '../models/Empresa.js';
import Vecino from '../models/Vecino.js';
import bcrypt from 'bcryptjs';

export default async function(req, res, next) {

  let db_pass;
  // Buscar en el modelo Empresa
  const empresaUser = await Empresa.findOne({ email: req.body.email });
  
  // Buscar en el modelo Vecino si no se encuentra en Empresa
  if (!empresaUser) {
    const vecinoUser = await Vecino.findOne({ email: req.body.email });
    if (!vecinoUser) {
      return res.status(400).json({
        response: null,
        message: 'Invalid credentials!',
      });
    }
    
    db_pass = vecinoUser.password;
  } else {
    db_pass = empresaUser.password;
  }

  const form_pass = req.body.password;

  if (bcrypt.compareSync(form_pass, db_pass)) {
    return next();
  }

  return res.status(400).json({
    response: null,
    message: 'Invalid credentials!',
  });
}