import DireccionRampa from "../../models/DireccionRampa.js"

export default async function (req, res) {
    try {
    const direccion = await DireccionRampa.find()
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