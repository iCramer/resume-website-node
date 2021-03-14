const db = require('./db');
const config = require('../config');

async function getContent(){
  const content = await Promise.all([
    db.query(`SELECT * FROM aboutSection`),
    db.query(`SELECT * FROM aboutSectionParagraphs`)
  ]);

  return content;
}

module.exports = {
  getContent
}
