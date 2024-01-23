import Admin from '../../models/Admin.js';

const deleteAdmin = async (req, res) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete({_id: req.params.id});

    if (!deletedAdmin) {
      return res.status(404).json({ message: 'Empresa not found' });
    }else{
      res.status(200).json({ message: 'Empresa deleted successfully', deletedAdmin })
    }

  } catch (error) {
    console.error("Admin couldn't be deleted:", error);
    res.status(500).json({ message: 'Server internal error' });
  }
};

export default deleteAdmin;