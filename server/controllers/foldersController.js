const {
  createFolder,
  getFolders,
  deleteFolder
} = require('../services/foldersService');

exports.getFolders = async (req, res) => {
  try {
    const folders = await getFolders();

    if (!folders) {
      res.json({
        success: false
      });
    }

    res.json({
      success: true,
      folders
    });
  } catch (err) {
    res.json({ success: false, err });
  }
};

exports.createFolder = async (req, res) => {
  try {
    const { folder_name } = req.body;
    const folder = await createFolder(folder_name);

    if (!folder) {
      res.json({
        success: false
      });
    }

    res.json({
      success: true,
      folder
    });
  } catch (err) {
    res.json({ success: false, err });
  }
};

exports.deleteFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFolder = await deleteFolder(id);

    if (!deletedFolder) {
      res.json({
        success: false
      });
    }

    res.json({
      success: true,
      deletedFolder
    });
  } catch (err) {
    res.json({ success: false, err });
  }
};
