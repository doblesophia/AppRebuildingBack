
import Empresa from "../models/Empresa.js"
import Vecino from "../models/Vecino.js"
import passport from "passport"
import { Strategy,ExtractJwt } from "passport-jwt"

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET || "hola1234" ,
  };
  
  passport.use(
    new Strategy(options, async (jwt_payload, done) => {
      
      try {
        let user;
  
        // Buscar en el modelo Empresa
        user = await Empresa.findOne({ email: jwt_payload.email });
        console.log(user.role)
        // Si no se encuentra en Empresa, buscar en Vecino
        if (!user) {
          user = await Vecino.findOne({ email: jwt_payload.email });
        }
  
        if (user) {
          // Puedes personalizar qué información se pasa al token aquí
          const payload = {
            id: user.id,
            email: user.email,
            role: user.role
            // Otras propiedades que desees incluir
          };
  
          return done(null, payload);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error, false);
      }
    })
  );
  
  export default passport;