import { jwt } from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    console.log("token recibido", token)
  
    if (!token) {
      return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      req.user = decoded;
      next();
      console.log('Token recibido en middleware:', token)
    } catch (error) {
      return res.status(401).json({ message: 'Token no válido.' });
    }
  };

  export default authMiddleware