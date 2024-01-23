import Admin from "../../models/Admin.js"

export default async function (req, res) {
    try {
    const admin = await Admin.find()
        return res.status(200).json({
                success: true,
                response: 'ok',
                message : '/AdminEmpresa',
                admin
        });
    } catch (error) {
      console.log(error)
    }
  }