const express = require('express');
const router = express.Router();
const {
  createFolder,
  getFolders,
  deleteFolder
} = require('../controllers/foldersController');

router.get('/', getFolders);
router.post('/', createFolder);
router.delete('/:id', deleteFolder);

module.exports = router;
