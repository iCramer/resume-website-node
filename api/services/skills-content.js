const db = require('./db');
const config = require('../config');

async function getContent(){
  const content = await Promise.all([
    db.query(`SELECT * FROM skillsSection`),
    db.query(`SELECT * FROM skillsSectionTools`)
  ]);

  return content;
}

async function createContent(content) {
  const {
    id, title, headerIcon, toolsHeader, skillTitle1, skillTitle2,
    skillContent1, skillContent2, skillIcon1, skillIcon2
  } = content.bodyCopy;

  const mainContent = await db.query(`UPDATE skillsSection
    SET title=?, headerIcon=?, toolsHeader=?, skillTitle1=?,
    skillTitle2=?, skillContent1=?, skillContent2=?, skillIcon1=?, skillIcon2=?
    WHERE id=?`,
    [title, headerIcon, toolsHeader, skillTitle1, skillTitle2,
     skillContent1, skillContent2, skillIcon1, skillIcon2, +id]);
}

module.exports = {
  getContent,
  createContent
}
