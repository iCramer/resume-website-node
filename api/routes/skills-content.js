const express = require('express');
const router = express.Router();
const skillsContent = require('../services/skills-content');

router.get('/', async function(req, res, next) {
  try {
    const data = await skillsContent.getContent();
    res.json({ bodyCopy: data[0][0], tools: data[1] });
  }
  catch (err) {
    console.error(`Error while getting content `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await skillsContent.createContent(req.body));
  } catch (err) {
    console.error(`Error while creating content`, err.message);
    next(err);
  }
});

module.exports = router;
