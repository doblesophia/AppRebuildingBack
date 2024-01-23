import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const correo = req.body.email || req.user.email; // Usa el campo correcto

  const token = jwt.sign(
    { correo }, // Utiliza el mismo campo al firmar
    process.env.SECRET || "hola1234",
    { expiresIn: 60 * 60 * 24 }
  );

  req.token = token;
  return next();
};