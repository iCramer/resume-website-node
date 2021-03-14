const db = require('./db');
const config = require('../config');

async function getContent(){
  const content = await Promise.all([
    db.query(`SELECT * FROM testimonialsSection`),
    db.query(`SELECT * FROM testimonialsSectionQuotes`)
  ]);

  return content;
}

module.exports = {
  getContent
}
