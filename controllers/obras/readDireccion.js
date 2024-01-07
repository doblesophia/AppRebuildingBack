import Direccion from "../../models/Direccion.js"

export default async function (req, res) {
    try {
    const direccion = await Direccion.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/readDireccion',
                direccion
        });
    } catch (error) {
      console.log(error)
    }
  }