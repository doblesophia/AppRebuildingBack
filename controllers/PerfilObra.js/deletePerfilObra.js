import PerfilObra from '../../models/PerfilObra.js';

const deletePerfilObra = async (req, res) => {
  try {
    const deletedPerfilObra = await PerfilObra.findByIdAndDelete({_id: req.params.id});

    if (!deletedPerfilObra) {
      return res.status(404).json({ message: 'Perfil Obra not found' });
    }else{
      res.status(200).json({ message: 'Perfil obra deleted successfully', deletedPerfilObra })
    }

  } catch (error) {
    console.error("Perfil couldn't be deleted:", error);
    res.status(500).json({ message: 'Server internal error' });
  }
};

export default deletePerfilObra;