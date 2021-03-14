const db = require('./db');
const config = require('../config');

async function getContent(){
  const content = await Promise.all([
    db.query(`SELECT * FROM experienceSection`),
    db.query(`SELECT * FROM experienceSectionProjects`)
  ]);

  return content;
}

module.exports = {
  getContent
}
