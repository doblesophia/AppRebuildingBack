import Empresa from '../../models/Empresa.js';
import Vecino from "../../models/Vecino.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Importa jsonwebtoken

const signinController = async (req, res) => {
    const { email, password, role } = req.body;
  
    try {
      // Busca al usuario en el modelo Empresa
      const userEmpresa = await Empresa.findOne({ email });
      if (userEmpresa) {
        const passwordMatch = await bcrypt.compare(password, userEmpresa.password);
        if (passwordMatch) {
          userEmpresa.online = true;
          userEmpresa.save();
        }
  
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Credenciales incorrectas' });
        }
  
        const token = jwt.sign(
          {
            userId: userEmpresa._id,
            email: req.body.email || req.user.email,
          },
          process.env.SECRET,
          { expiresIn: 60 * 60 * 24 }
        );
  
        return res.status(200).json({ token, user: userEmpresa });
      }
  
      // Si no se encuentra en el modelo Empresa, busca en el modelo Vecino
      const userVecino = await Vecino.findOne({ email });
      if (userVecino) {
        const passwordMatch = await bcrypt.compare(password, userVecino.password);
        if (passwordMatch) {
          userVecino.online = true;
          userVecino.save();
        }
  
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Credenciales incorrectas' });
        }
  
        const token = jwt.sign(
          {
            userId: userVecino._id,
            email: req.body.email || req.user.email,
          },
          process.env.SECRET,
          { expiresIn: 60 * 60 * 24 }
        );
  
        return res.status(200).json({ token, user: userVecino });
      }
  
      // Si no se encuentra en ninguno de los modelos, devuelve un error
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error });
    }
  };
  
  export default signinController;