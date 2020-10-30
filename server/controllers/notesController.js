const {
  createNote,
  getNotes,
  deleteNote,
  updateNote
} = require('../services/notesService');

exports.getNotes = async (req, res) => {
  try {
    const notes = await getNotes();

    if (!notes) {
      return res.status(400).json({
        success: false,
        message: 'Could not get notes'
      });
    }

    res.json({
      success: true,
      notes
    });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

exports.createNote = async (req, res) => {
  try {
    const note = await createNote({ ...req.body, modified: new Date() });
    if (!note) {
      return res.status(400).json({
        success: false,
        message: 'Could not create note'
      });
    }

    res.json({
      success: true,
      note
    });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { note_name, note_content } = req.body;
    console.log(req.body);
    const note = await updateNote(id, {
      note_name,
      note_content,
      modified: new Date()
    });

    if (!note) {
      return res.status(400).json({
        success: false,
        message: 'Could not update note'
      });
    }

    res.json({
      success: true,
      updatedNote: note
    });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await deleteNote(id);

    if (!deletedNote) {
      return res.status(400).json({
        success: false,
        message: 'Could not delete note'
      });
    }

    res.json({
      success: true,
      deletedNote
    });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};
