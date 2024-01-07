import Obra from "../../models/Obra.js"

export default async function (req, res) {
    try {
    const obra = await Obra.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/RegisterObra',
                obra
        });
    } catch (error) {
      console.log(error)
    }
  }