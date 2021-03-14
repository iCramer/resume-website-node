const db = require('./db');
const config = require('../config');

async function getContent(){
  const content = await db.query(
    `SELECT * FROM introSection`,
  );

  return content;
}

async function createContent(content) {
  const { firstName, lastName, subtitle, arrowText, id } = content;
  const result = await db.query(`UPDATE introSection
    SET firstName=?, lastName=?, subtitle=?, arrowText=?
    WHERE id=?`,
    [firstName, lastName, subtitle, arrowText , +id]);
}

module.exports = {
  getContent,
  createContent
}
