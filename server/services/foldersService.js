const db = require('../knex/knex');
const table = 'folders';

exports.getFolders = async () => {
  return await db(table).select('*');
};

exports.createFolder = async (folder_name) => {
  return (await db(table).insert({ folder_name }).returning('*'))[0];
};

exports.deleteFolder = async (id) => {
  return (await db(table).where({ id }).delete().returning('*'))[0];
};
