import Empresa from '../models/Empresa.js'
import Vecino from "../models/Vecino.js"
import Admin from "../models/Admin.js"
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
        
        const admin = await Admin.findOne({email:req.body.email})
        if(admin){
          user = admin
        } else {
        return res.status(404).json({
          success: false,
          message: 'User not found!',
        });
      }
    }
  }
  
    
    req.foundUser = user;
  
    return next();
  }