import  PerfilVecino from "../../models/PerfilVecino.js"

export default async function (req, res) {
    try {
    const perfilvecino = await PerfilVecino.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/PerfilVecino',
                perfilvecino
        });
    } catch (error) {
      console.log(error)
    }
  }