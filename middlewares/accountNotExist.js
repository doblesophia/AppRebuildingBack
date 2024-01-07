import Empresa from '../models/Empresa.js'
import Vecino from "../models/Vecino.js"

export default async function(req, res, next) {
    let user;
  
    
    const empresa = await Empresa.findOne({ email: req.body.email });
    if (empresa) {
      user = empresa;
    } else {
    
      const vecino = await Vecino.findOne({ email: req.body.email });
      if (vecino) {
        user = vecino;
      } else {
        
        return res.status(404).json({
          success: false,
          message: 'User not found!',
        });
      }
    }
  
    
    req.foundUser = user;
  
    return next();
  }