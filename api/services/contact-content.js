const db = require('./db');
const config = require('../config');

async function getContent(){
  const content = await db.query(
    `SELECT * FROM contactSection`,
  );

  return content;
}

module.exports = {
  getContent
}
