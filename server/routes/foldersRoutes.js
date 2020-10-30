const express = require('express');
const router = express.Router();
const {
  createFolder,
  getFolders,
  deleteFolder,
  updateFolder
} = require('../controllers/foldersController');

router.get('/', getFolders);
router.post('/', createFolder);
router.delete('/:id', deleteFolder);
router.patch('/:id', updateFolder);

module.exports = router;
