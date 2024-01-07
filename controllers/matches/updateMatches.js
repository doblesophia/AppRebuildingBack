import Match from "../../models/Match.js"

const updateMatch = async(req,res,next)=> {
    try {
        let updatedMatch = await Match.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (updatedMatch) {
            return res.status(200).json({ response: updatedMatch,
            message: "Match successfully updated"})
        } else {
            return res.status(404).json({ response: 'not found' })
        }    
    } catch(error) {
        next(error)
    }
}



export default updateMatch