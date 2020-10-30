const {
  createNote,
  getNotes,
  deleteNote
} = require('../services/notesService');

exports.getNotes = async (req, res) => {
  try {
    const notes = await getNotes();

    if (!notes) {
      res.json({
        success: false
      });
    }

    res.json({
      success: true,
      notes
    });
  } catch (err) {
    res.json({ success: false, err });
  }
};

exports.createNote = async (req, res) => {
  try {
    const note = await createNote({ ...req.body, modified: new Date() });

    if (!note) {
      res.json({
        success: false
      });
    }

    res.json({
      success: true,
      note
    });
  } catch (err) {
    res.json({ success: false, err });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await deleteNote(id);

    if (!deletedNote) {
      res.json({
        success: false
      });
    }

    res.json({
      success: true,
      deletedNote
    });
  } catch (err) {
    res.json({ success: false, err });
  }
};
