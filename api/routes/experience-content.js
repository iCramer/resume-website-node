const express = require('express');
const router = express.Router();
const experienceContent = require('../services/experience-content');

router.get('/', async function(req, res, next) {
  try {
    let data = await experienceContent.getContent();
    res.json({ bodyCopy: data[0][0], projects: data[1] });
  }
  catch (err) {
    console.error(`Error while getting content `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await experienceContent.createContent(req.body));
  } catch (err) {
    console.error(`Error while creating content`, err.message);
    next(err);
  }
});

module.exports = router;
