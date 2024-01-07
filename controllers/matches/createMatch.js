import Match from "../../models/Match.js"

const createMatch = async (req, res) =>{
    try {
        const newMatch = new Match(req.body)
        await newMatch.save()
        return res.status(201).json({
            success: true,
            response: newMatch,
            message: "Match created"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
        
    }
}

export default createMatch