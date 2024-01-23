import Match from "../../models/Match.js";

const createMatch = async (req, res) => {
    try {
        console.log('Controlador de creación de matches iniciado.');
        const matchesArray = req.body.matchesArray;

        const createdMatches = [];

        for (const matchData of matchesArray) {
            console.log('Iterando sobre matchData:', matchData);
            // Verificar si el match ya existe
            const existingMatch = await Match.findOne(matchData);
            console.log('Existing Match:', existingMatch);

            if (!existingMatch) {
                // Si no existe, crear y guardar el match
                const newMatch = new Match(matchData);
                await newMatch.save();
                createdMatches.push(newMatch);
            }
            
        }
        console.log('Matches creados:', createdMatches);

        return res.status(201).json({
            success: true,
            response: createdMatches,
            message: "Matches created"
        });
    } catch (error) {
        console.error('Error en el controlador:', error);
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        });
    }
};

export default createMatch;