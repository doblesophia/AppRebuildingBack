import Vecino from "../../models/Vecino.js"

export default async function (req, res) {
    try {
    const vecino = await Vecino.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/RegisterVecino',
                vecino
        });
    } catch (error) {
      console.log(error)
    }
  }