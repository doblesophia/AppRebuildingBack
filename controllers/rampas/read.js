import Rampa from "../../models/Rampa.js"

export default async function (req, res) {
    try {
    const rampa = await Rampa.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/RegisterRampa',
                rampa
        });
    } catch (error) {
      console.log(error)
    }
  }