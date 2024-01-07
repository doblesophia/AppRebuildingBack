import Empresa from "../../models/Empresa.js"

const createEmpresa = async (req, res) =>{
    try {
        const newEmpresa = new Empresa(req.body)
        await newEmpresa.save()
        return res.status(201).json({
            success: true,
            response: newEmpresa,
            message: "Empresa created"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
        
    }
}

export default createEmpresa