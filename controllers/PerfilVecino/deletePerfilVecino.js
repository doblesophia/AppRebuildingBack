import PerfilVecino from '../../models/PerfilVecino.js';

const deletePerfilVecino = async (req, res) => {
  try {
    const deletedPerfilVecino = await PerfilVecino.findByIdAndDelete({_id: req.params.id});

    if (!deletedPerfilVecino) {
      return res.status(404).json({ message: 'Perfil Vecino not found' });
    }else{
      res.status(200).json({ message: 'Perfil Vecino deleted successfully', deletedPerfilVecino })
    }

  } catch (error) {
    console.error("Perfil couldn't be deleted:", error);
    res.status(500).json({ message: 'Server internal error' });
  }
};

export default deletePerfilVecino;