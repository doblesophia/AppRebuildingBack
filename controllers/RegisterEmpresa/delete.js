import Empresa from '../../models/Empresa.js';

const deleteEmpresa = async (req, res) => {
  try {
    const deletedEmpresa = await Empresa.findByIdAndDelete({_id: req.params.id});

    if (!deletedEmpresa) {
      return res.status(404).json({ message: 'Empresa not found' });
    }else{
      res.status(200).json({ message: 'Empresa deleted successfully', deletedEmpresa })
    }

  } catch (error) {
    console.error("Empresa couldn't be deleted:", error);
    res.status(500).json({ message: 'Server internal error' });
  }
};

export default deleteEmpresa;