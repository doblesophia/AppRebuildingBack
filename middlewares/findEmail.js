import Empresa from '../models/Empresa.js';
import Vecino from '../models/Vecino.js';

async function findEmail(req, res, next) {
  const { email } = req.body;
  try {

    const userEmailEmpresa = await Empresa.findOne({ email });
    if (userEmailEmpresa) {
      return res.status(400).json({
        success: false,
        message: 'Email Empresa already exists',
      });
    }
    const userEmailVecino = await Vecino.findOne({ email });
    if (userEmailVecino) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists in Vecino model',
      });
    }
    console.log("Uno")
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
}

export default findEmail;