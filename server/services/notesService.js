const db = require('../knex/knex');
const table = 'notes';

exports.getNotes = async () => {
  return await db(table).select('*');
};

exports.createNote = async (note) => {
  return (await db(table).insert(note).returning('*'))[0];
};

exports.deleteNote = async (id) => {
  return (await db(table).where({ id }).delete().returning('*'))[0];
};
