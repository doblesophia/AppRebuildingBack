const validator = (schema) => (req, res, next) => {
    const validation = schema.validate(req.body, {abortEarly: false})

    if(validation.error){
        return res.status(400).json({
        succses: false,
        message : (validation.error.details.map(error=>error.message))

    })
    }
    console.log("Dos") 
    return next()
}


export default validator