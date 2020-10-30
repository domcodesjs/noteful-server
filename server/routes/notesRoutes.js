const express = require('express');
const router = express.Router();
const {
  getNotes,
  createNote,
  deleteNote,
  updateNote
} = require('../controllers/notesController');

router.get('/', getNotes);
router.post('/', createNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
