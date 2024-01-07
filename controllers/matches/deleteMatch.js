import Match from '../../models/Match.js';

const deleteMatch = async (req, res) => {
  try {
    const deletedMatch = await Match.findByIdAndDelete({_id: req.params.id});

    if (!deletedMatch) {
      return res.status(404).json({ message: 'Match not found' });
    }else{
      res.status(200).json({ message: 'Match deleted successfully', deletedMatch })
    }

  } catch (error) {
    console.error("Match couldn't be deleted:", error);
    res.status(500).json({ message: 'Server internal error' });
  }
};

export default deleteMatch;