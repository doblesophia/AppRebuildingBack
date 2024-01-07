import Vecino from '../../models/Vecino.js';

const deleteVecino = async (req, res) => {
  try {
    const deletedVecino = await Register.findByIdAndDelete({_id: req.params.id});

    if (!deletedVecino) {
      return res.status(404).json({ message: 'Vecino not found' });
    }else{
      res.status(200).json({ message: 'Empresa deleted successfully', deletedVecino })
    }

  } catch (error) {
    console.error("Vecino couldn't be deleted:", error);
    res.status(500).json({ message: 'Server internal error' });
  }
};

export default deleteVecino;