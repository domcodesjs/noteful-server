const {
  createFolder,
  getFolders,
  deleteFolder,
  updateFolder
} = require('../services/foldersService');

exports.getFolders = async (req, res) => {
  try {
    const folders = await getFolders();

    if (!folders) {
      return res.status(400).json({
        success: false,
        message: 'Could not get folders'
      });
    }

    res.json({
      success: true,
      folders
    });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

exports.createFolder = async (req, res) => {
  try {
    const { folder_name } = req.body;
    const folder = await createFolder(folder_name);

    if (!folder) {
      return res.status(400).json({
        success: false,
        messasge: 'Could not create folder'
      });
    }

    res.json({
      success: true,
      folder
    });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

exports.updateFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const { folder_name } = req.body;
    const folder = await updateFolder(id, folder_name);

    if (!folder) {
      return res.status(400).json({
        success: false,
        message: 'Could not delete folder'
      });
    }

    res.json({
      success: true,
      folder
    });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

exports.deleteFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFolder = await deleteFolder(id);

    if (!deletedFolder) {
      return res.status(400).json({
        success: false,
        message: 'Could not delete folder'
      });
    }

    res.json({
      success: true,
      deletedFolder
    });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};
