import  PerfilObra from "../../models/PerfilObra.js"

export default async function (req, res) {
    try {
    const perfilobra = await PerfilObra.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/PerfilObra',
                perfilobra
        });
    } catch (error) {
      console.log(error)
    }
  }
