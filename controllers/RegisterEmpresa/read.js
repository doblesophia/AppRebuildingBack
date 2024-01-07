import Empresa from "../../models/Empresa.js"

export default async function (req, res) {
    try {
    const empresa = await Empresa.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/RegisterEmpresa',
                empresa
        });
    } catch (error) {
      console.log(error)
    }
  }